/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

      // eg. "Gagan Preet Singh"
      name: {
          type: 'string'
      },

      // eg. "s.gagan.preet@gmail.com"
      email: {
          type: 'string'
      },

      // eg. "Password@123"
      password: {
          type: 'string'
      }

  }
};

