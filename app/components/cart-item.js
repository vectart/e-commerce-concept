import Ember from 'ember';
import layout from '../templates/components/cart-item';

export default Ember.Component.extend({
  layout: layout,
  cart: Ember.inject.service(),

  classNames: ['cart-item'],
  classNameBindings: ['isHidden'],

  isHidden: true,

  didInsertElement: function () {
    Ember.run.next(function () {
      this.set('isHidden', false);
    }.bind(this));
  },

  click: function () {
    Ember.run.later(function () {
      this.get('cart').removeObject(this.get('item'));
    }.bind(this), 800);

    this.set('isHidden', true);

    return false;
  }
});
