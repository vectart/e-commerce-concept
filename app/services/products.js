import Ember from 'ember';

var fuse;

export default Ember.ArrayController.extend(Ember.PromiseProxyMixin, {
  promise: Ember.$.getJSON('/products.json').then(function (products) {
    fuse = new Fuse(products, { keys: ['name'] });
    return products;
  }),

  search: function (keyword) {
    if (fuse) {
      return fuse.search(keyword);
    }
  }
});
