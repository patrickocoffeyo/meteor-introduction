/**
 * @file
 * Defines '/' route.
 */
/* globals Router, Meteor, Examples */

Router.route('/orders', {
  waitOn: function () {
    return [
      Meteor.subscribe('ordersOpenByUser'),
      Meteor.subscribe('pizzasAll'),
    ];
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
    this.render('orderCreate');
  }
});

// Register helper that returns pizza types.
Template.registerHelper('pizzaTypes', function() {
  return _.map(Pizzas.find().fetch(), function(pizza) {
    return {label: pizza.title, value: pizza._id};
  });
});

AutoForm.hooks({
  insertOrderForm: {
    onSuccess: function(operation, result, template) {
      Router.go('/orders');
      FlashMessages.sendSuccess('Your order has been created!');
    }
  }
});

Template.orders.events({
  'click .btn.delete': function (event) {
    Orders.remove({_id: this._id});
  }
});
