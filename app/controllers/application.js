import Ember from 'ember';

export default Ember.Controller.extend({
  products: Ember.inject.service(),

  expandCart: false,
  isList: false,
  keyword: '',

  filteredProducts: function () {
    if (this.get('keyword')) {
      return this.get('products').search(this.get('keyword'));
    }

    return this.get('model');
  }.property('keyword', 'model.@each'),

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
