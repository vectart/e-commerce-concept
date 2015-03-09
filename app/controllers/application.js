import Ember from 'ember';

export default Ember.Controller.extend({
  expandCart: false,

  routeChanged: function () {
    this.set('expandCart', true);
  }.observes('currentPath'),

  actions: {
    toggleCart: function () {
      this.toggleProperty('expandCart');
    }
  }
});
