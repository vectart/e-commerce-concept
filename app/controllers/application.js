import Ember from 'ember';

export default Ember.Controller.extend({
  expandCart: false,

  routeChanged: function () {
    this.set('expandCart', false);
  }.observes('currentPath'),

  actions: {
    toggleCart: function () {
      this.toggleProperty('expandCart');
    },
    hideCart: function () {
      this.set('expandCart', false);
    }
  }
});
