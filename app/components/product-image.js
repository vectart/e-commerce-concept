import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  attributeBindings: ['style'],

  style: function () {
    return 'background-image: url("/img/%@.jpg")'.fmt(this.get('slug'));
  }.property('slug'),
});
