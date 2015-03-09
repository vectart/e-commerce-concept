import Ember from 'ember';

export default Ember.ArrayController.extend(Ember.PromiseProxyMixin, {
  promise: Ember.$.getJSON('/products.json')
});
