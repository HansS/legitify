'use strict';

var assert = require('fluent-assert');

var registeredSchemas = {};

module.exports = function(name, schema){
  assert.string('name', name).notEmpty();
  assert.object('schema', schema);

  registeredSchemas[name] = schema;
}
