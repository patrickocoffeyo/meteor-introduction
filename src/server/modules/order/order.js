/**
 * @file
 * Define allow and publish functions for Orders collection.
 */
/* globals Meteor, Orders */

Meteor.startup(function() {
  Orders.allow({
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

Meteor.publish('ordersByUser', function(userId) {
  return Orders.find();
});
