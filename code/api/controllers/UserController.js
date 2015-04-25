/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

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
                          if err{
                              return res.negotiate(err)
                          }
                          return res.json({
                              id: newUser.id
                          });
                        }
                    }
                })
            },
        });
    }
};

