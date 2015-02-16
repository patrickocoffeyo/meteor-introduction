/**
 * @file
 * Define user roles, and create initial admin user.
 */
/* globals Meteor, Examples */

/**
 * Implements Meteor.startup().
 * Creates default users with appropriate roles.
 */
Meteor.startup(function() {
  if (Meteor.users.find().fetch().length === 0) {
    var users = [
        {name:'Patrick Coffey', email:'patrick@fourkitchens.com', roles:[]},
        {name:'Admin', email:'patrick+admin@fourkitchens.com', roles:['admin']},
      ];

    _.each(users, function (userData) {
      var id, user;

      id = Accounts.createUser({
        email: userData.email,
        password: 'elmo',
        profile: { name: userData.name }
      });

      Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});
      Roles.addUsersToRoles(id, userData.roles);
    });
  }
});

/**
 * Validates login.
 */
Accounts.validateLoginAttempt(function () {
  return true;
});
