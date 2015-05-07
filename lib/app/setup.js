/*jshint asi: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require, process, __dirname, module */

'use strict';

// set to the root of the project
var root = __dirname + '/../..';

var express = require('express');
var hbs = require('hbs');
var port = 5555;


module.exports = function expressAppSetup (app) {

  //
  //  Configure Express App
  //

  app.set('port', (process.env.PORT || port));
  app.set('view engine', 'hbs');
  app.set('views', root + '/assets/templates');
  app.set('view options', { layout: 'layouts/default.hbs' });
  app.use(express.static(root + '/public'));

  //
  //  Handlebars Setup
  //

  // Register Template Partials

  hbs.registerPartials(root + '/assets/templates/partials');

  //  Handlebars Helpers

  var blocks = {};

  hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
  });

  hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');
    // clear the block
    blocks[name] = [];
    return val;
  });

  hbs.registerHelper('json', function(context) {
    return JSON.stringify(context);
  });

  return app;
};