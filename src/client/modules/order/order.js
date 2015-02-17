/**
 * @file
 * Defines '/' route.
 */
/* globals Router, Meteor, Examples */

Router.route('/orders', {
  waitOn: function () {
    return Meteor.subscribe('ordersOpenByUser', Meteor.userId());
  },
  action: function () {
    this.render('orders', {
      data: function () {
        return {
          orders: function() {
            return Orders.find({user: Meteor.userId()}).fetch();
          }
        };
      }
    });
  }
});

Router.route('/orders/create', {
  waitOn: function () {
    return Meteor.subscribe('pizzasAll', Meteor.userId());
  },
  action: function () {
    this.render('orderCreate', {
      data: function () {
        return {
          pizzas: function() {
            return Pizzas.find().fetch();
          }
        };
      }
    });
  }
});
