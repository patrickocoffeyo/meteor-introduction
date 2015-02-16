/**
 * @file
 * Define allow and publish functions for Pizzas collection.
 */
/* globals Meteor, Pizzas */

Meteor.startup(function() {
  Pizzas.allow({
    insert: function(userId, pizza) {
      if (this.userId && Roles.userIsInRole(loggedInUser, ['admin'])) {
        return true;
      }

      return false;
    },
    update: function(userId, pizza) {
      if (this.userId && Roles.userIsInRole(loggedInUser, ['admin'])) {
        return true;
      }

      return false;
    },
    remove: function(userId, pizza) {
      if (this.userId && Roles.userIsInRole(loggedInUser, ['admin'])) {
        return true;
      }

      return false;
    }
  });
});

Meteor.publish('pizzasByOrder', function(orderId) {
  return Pizzas.find();
});
