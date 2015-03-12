/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    extensions: ['js', 'css']
  },
  storeConfigInMeta: false
});

app.import('bower_components/fuse.js/src/fuse.js');

module.exports = app.toTree();
