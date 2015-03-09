import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'main',
  classNameBindings: ['currentPage', 'controller.cart'],

  currentPage: function () {
    return this.get('controller.currentPath').replace(/\.?index$/, '').split('.').get('lastObject');
  }.property('controller.currentPath')
});
