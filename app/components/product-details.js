import Ember from 'ember';
import layout from '../templates/components/product-details';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  layout: layout,
  classNames: ['product-details'],
  classNameBindings: ['isActive:active'],

  style: function () {
    return 'background-image: url("/img/%@.jpg")'.fmt(this.get('product.id'));
  }.property('product.id'),

  actions: {
    addToCart: function () {
      this.get('cart').addObject(this.get('product'));
    }
  }
});
