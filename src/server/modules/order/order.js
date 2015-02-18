/**
 * @file
 * Define allow and publish functions for Orders collection.
 */
/* globals Meteor, Orders */

Meteor.startup(function() {
  Orders.allow({
    insert: function(userId, order) {
      if (userId) {
        return true;
      }

      return false;
    },
    update: function(userId, order) {
      if (userId && order.user === userId) {
        return true;
      }

      return false;
    },
    remove: function(userId, order) {
      if (userId && order.user === userId) {
        return true;
      }

      return false;
    }
  });
});

Meteor.publish('ordersOpenByUser', function(userId) {
  return Orders.find({user: this.userId});
});
