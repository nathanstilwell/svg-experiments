/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require, process */

'use strict';

var express = require('express');
var app = require('./lib/app/setup')(express());

//
// Routes
//

require('./routes')(app);

// Start Listening

app.listen(app.get('port'), function expressAppListen () {
  process.stdout.write('App running the ' + (process.env.NODE_ENV || 'development') + ' environment on port ' + app.get('port'));
});