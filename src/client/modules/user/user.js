/**
 * @file
 * Defines '/' route.
 */
/* globals Router, Meteor */

Router.route('/', {
  action: function () {
    if (!Meteor.userId()) {
      this.render('userAnonymousDasboard');
    }
    else {
      Router.go('/orders');
    }
  }
});

