import Ember from 'ember';
import layout from '../templates/components/product-details';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  layout: layout,
  classNames: ['product-details'],
  classNameBindings: ['isActive:active', 'inCart'],

  inCart: function () {
    return this.get('cart').contains(this.get('product'));
  }.property('cart.@each', 'product'),

  actions: {
    addToCart: function () {
      this.get('cart').addObject(this.get('product'));
    },
    showCart: function () {
      this.sendAction('showCart');
    }
  }
});
