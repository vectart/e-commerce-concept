import Ember from 'ember';

export default Ember.Route.extend({
  products: Ember.inject.service(),

  model: function () {
    return this.get('products');
  }
});
