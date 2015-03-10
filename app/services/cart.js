import Ember from 'ember';

export default Ember.ArrayController.extend({
  total: function () {
    return this.mapBy('price').reduce(function (total, price) {
      return total + price;
    });
  }.property('@each.price')
});
