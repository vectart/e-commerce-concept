import Ember from 'ember';
import layout from '../templates/components/product-snippet';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNames: ['product-snippet'],
  classNameBindings: ['product.wide'],

  style: function () {
    return 'background-image: url("/img/%@.jpg")'.fmt(this.get('product.id'));
  }.property('product.id')
});
