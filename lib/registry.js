'use strict';

var assert = require('fluent-assert');
var _ = require('lodash');

var registeredSchemas = {};

var Registry = function(){ };

Registry.prototype.register = function(name, schema){
  assert.string('name', name).notEmpty();
  assert.object('schema', schema);

  registeredSchemas[name] = schema;
};

Registry.prototype.registerAll = function(object){
  assert.object('Registration Object', object);
  var self = this;
  _.each(object, function(value, key){
    self.register(key, value);
  });
}

Registry.prototype.getSchema = function(name){
  return registeredSchemas[name];
};

module.exports = new Registry();
