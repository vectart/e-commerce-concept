import Ember from 'ember';

export default Ember.Controller.extend({
  expandCart: false,
  isList: true,

  routeChanged: function () {
    this.set('expandCart', false);
  }.observes('currentPath'),

  actions: {
    toggleCart: function () {
      this.toggleProperty('expandCart');
    },
    hideCart: function () {
      this.set('expandCart', false);
    },
    showList: function () {
      this.set('isList', true);
    },
    showGrid: function () {
      this.set('isList', false);
    }
  }
});
