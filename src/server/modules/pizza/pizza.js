/**
 * @file
 * Define allow and publish functions for Pizzas collection.
 */
/* globals Meteor, Pizzas */

Meteor.startup(function() {
  Pizzas.allow({
    insert: function(userId, example) {
      if (this.userId) {
        return true;
      }

      return false;
    },
    update: function(userId, example) {
      if (this.userId) {
        return true;
      }

      return false;
    },
    remove: function(userId, example) {
      if (this.userId) {
        return true;
      }

      return false;
    }
  });
});

Meteor.publish('pizzasByOrder', function(orderId) {
  return Pizzas.find();
});
