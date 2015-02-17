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

  // Create some pizzas if none exist.
  if (Pizzas.find().fetch().length === 0) {
    var pizzas = [
      {title: 'Dolan the dogs in', description: 'A large, and spicy pizza. Has a thick stuffed crust, topped with sausage, bacon, pepperjack and cheddar cheese, and alfredo sauce.', price: 18},
      {title: 'Boogs bunny', description: 'A thin-crusted itallian style pizza with tomatoes, spinach, canadian bacon, and black olives.', price: 12},
      {title: 'Dafty the duck', description: 'Chicago-style pizza with lots of meat, cheese, and tomatoe sauce.', price: 14},
      {title: 'Spoderman', description: 'Strong pizza. Lots of chilis and jalepenos and black olives.', price: 12},
      {title: 'The Gooby 2000', description: 'A weird, weird pizza with a ramen-based crust, and egg-drop noodle soup.', price: 12}
    ];

    _.each(pizzas, function (pizza) {
      Pizzas.insert(pizza);
    });
  }
});

Meteor.publish('pizzasAll', function() {
  return Pizzas.find();
});
