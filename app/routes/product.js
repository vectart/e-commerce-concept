import Ember from 'ember';

export default Ember.Route.extend({
  products: Ember.inject.service(),

  model: function (params) {
    return this.get('products').then(function (products) {
      return products.findBy('id', params.id);
    });
  },

  render: function () {
    this._super.apply(this, arguments);
    Ember.run.next(function () {
      this.set('controller.isActive', true);
    }.bind(this));
  },

  teardownViews: function () {
    this.set('controller.isActive', false);
  }
});
