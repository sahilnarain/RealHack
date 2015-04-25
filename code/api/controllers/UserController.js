/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


    login: function (req, res) {

      // Try to look up user using the provided email address
      User.findOne({
          email: req.param('email')
        }, function foundUser(err, user) {
          if (err) return res.negotiate(err);
          if (!user) return res.notFound();
          // Compare password attempt from the form params to the encrypted password
          // from the database (`user.password`)
          require('machinepack-passwords').checkPassword({
            passwordAttempt: req.param('password'),
            encryptedPassword: user.encryptedPassword
          }).exec({
            error: function (err){
              return res.negotiate(err);
            },
            // If the password from the form params doesn't checkout w/ the encrypted
            // password from the database...
            incorrect: function (){
              return res.notFound();
            },
            success: function (){
              // Store user id in the user session
              req.session.me = user.id;
              // All done- let the client know that everything worked.
              return res.ok();
            }
          });
        });
    },
    
    signup: function(req, res) {
        var Passwords = require('machinepack-passwords');

        Passwords.encryptPassword({
            password: req.param('password'),
            difficulty: 10
        }).exec({
            error: function(err) {
                return res.negotiate(err)
            },
            success: function(encryptedPassword) {
                console.log(encryptPassword);
                require('machinepack-gravatar').getImageUrl({
                    emailAddress: req.param('email')
                }).exec({
                    error: function(err) {
                        return res.negotiate(err)
                    },
                    success: function(gravatarUrl) {
                        User.create({
                            name: req.param('name'),
                            title: req.param('title'),
                            email: req.param('email'),
                            encryptedPassword: encryptedPassword,
                            gravatarUrl: gravatarUrl,
                            lastLoggedIn: new Date()
                        }),
                        function userCreated(err, newUser) {
                          if(err){
                              if(err.invalidAttributes && err.invalidAttributes.email && err.invalidAttributes.email[0] && err.invalidAttributes.email[0].rule == 'unique') {
                                  return res.emailAddressInUse();
                              }
                              return res.negotiate(err)
                          }
                          return res.json({ id: newUser.id });
                        }
                    }
                })
            }
        });
    }
};

