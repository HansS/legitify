'use strict';

var assert = require('fluent-assert');

var registeredSchemas = {};

var register = function(name, schema){
  assert.string('name', name).notEmpty();
  assert.object('schema', schema);

  registeredSchemas[name] = schema;
};

var getSchema = function(name){
  return registeredSchemas[name];
}

module.exports = register;

module.exports.getSchema = getSchema;
