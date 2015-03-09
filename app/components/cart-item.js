import Ember from 'ember';
import layout from '../templates/components/cart-item';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['cart-item'],
  classNameBindings: ['isHidden'],

  isHidden: true,

  didInsertElement: function () {
    Ember.run.next(function () {
      this.set('isHidden', false);
    }.bind(this));
  }
});
