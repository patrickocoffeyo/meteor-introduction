/**
 * @file
 * Defines '/login' route.
 */
/* globals Router, Meteor */

Router.route('order', {
  action: function () {
    if (!Meteor.userId()) {
      this.render('userAnonymousDasboard');
    }
    else {
      this.render('order');
    }
  }
});

