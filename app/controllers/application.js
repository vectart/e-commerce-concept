import Ember from 'ember';

export default Ember.Controller.extend({
  cart: false,

  routeChanged: function () {
    this.set('cart', false);
  }.observes('currentPath'),

  actions: {
    toggleCart: function () {
      this.toggleProperty('cart');
    }
  }
});
