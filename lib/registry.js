'use strict';

var assert = require('fluent-assert');

var registeredSchemas = {};

var Registry = function(){ };

Registry.prototype.register = function(name, schema){
  assert.string('name', name).notEmpty();
  assert.object('schema', schema);

  registeredSchemas[name] = schema;
};

Registry.prototype.getSchema = function(name){
  return registeredSchemas[name];
};

module.exports = new Registry();
