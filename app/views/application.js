import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'main',
  classNameBindings: ['currentPage', 'controller.expandCart:cart', 'isTouchDevice', 'isNotTouchDevice'],

  currentPage: function () {
    return this.get('controller.currentPath').replace(/\.?index$/, '').split('.').get('lastObject');
  }.property('controller.currentPath'),

  isTouchDevice: function () {
    return !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;
  }.property(),

  isNotTouchDevice: Ember.computed.not('isTouchDevice')
});
