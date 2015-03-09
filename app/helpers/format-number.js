import Ember from 'ember';

export function formatNumber(number) {
  return '$' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Ember.HTMLBars.makeBoundHelper(formatNumber);
