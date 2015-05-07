/*jshint asi: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global module: true, require: true*/
'use strict';

module.exports = function photocracyRouter (app) {

  var router = require('express').Router();

//
//  Placeholder page title
//
  router.use(function (req, res, next) {
    res.locals.pageTitle = 'SVG Adventures!';
    next();
  });


  //
  // a little function to help the stubbed out routes
  //

  function getThing (thing) {
    return function (req, res) {
      res.render(thing);
    };
  }

  app.get('/', getThing('index'));
  app.get('/first', getThing('first'));
  app.get('/second', getThing('second'));
}; // module exports