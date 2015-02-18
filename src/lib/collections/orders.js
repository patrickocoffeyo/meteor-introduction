/**
 * @file
 * Defines 'Orders' collections and helpers.
 */
/* globals Orders:true, Mongo */

// Declare 'Orders' collection.
Orders = new Mongo.Collection('orders');

// Define schema for Pizzas collection.
Orders.attachSchema({
  user: {
    type: String,
    label: 'User',
    max: 200,
    autoValue: function() {
      return Meteor.userId();
    }
  },
  address: {
    type: String,
    label: 'Address',
    optional: false,
    max: 600
  },
  pizza: {
    type: String,
    label: 'Pizza',
    optional: false,
    max: 200
  },
  state: {
    type: String,
    label: 'Status',
    max: 80,
    autoValue: function() {
      return 'ordered';
    }
  }
});

// Add helpers to Orders collection object.
Orders.helpers({
  pizzaName: function() {
    var pizza = Pizzas.findOne({_id: this.pizza});
    return pizza.title;
  }
});
