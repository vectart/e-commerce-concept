import Ember from 'ember';
import layout from '../templates/components/cart-details';

export default Ember.Component.extend({
  cart: Ember.inject.service(),

  layout: layout,
  classNames: ['cart-details', 'scrollable'],

  click: function () {
    this.sendAction();
  }
});
