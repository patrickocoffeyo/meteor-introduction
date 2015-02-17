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
