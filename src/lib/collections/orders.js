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
    max: 200
  },
  address: {
    type: String,
    label: 'Address',
    max: 600
  },
  pizzas: {
    type: String,
    label: 'Description',
    max: 200
  },
  state: {
    type: String,
    label: 'Status',
    max: 80,
  }
});
