/**
 * @file
 * Defines 'Pizzas' collections and helpers.
 */
/* globals Pizzas:true, Mongo */

// Declare 'Pizzas' collection.
Pizzas = new Mongo.Collection('pizzas');

// Define schema for Pizzas collection.
Pizzas.attachSchema({
  title: {
    type: String,
    label: 'Title',
    max: 80
  },
  description: {
    type: String,
    label: 'Description',
    max: 200
  },
  price: {
    type: Number,
    label: 'Price',
  }
});
