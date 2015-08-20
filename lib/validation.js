'use strict';

var promise = require('bluebird');
var joi = require('joi');
var assert = require('fluent-assert');

var registery = require('./registery');

var validate = function(schemaName, object, options) {
  assert.string('schemaName', schemaName).notEmpty();
  assert.object('objectToValidate', object);

  var schema = registery.getSchema(schemaName);
  if(!schema){
    throw new Error('Schema not found');
    return;
  }
  return joi.validate(object, schema, options, function(err, value){
    if(err){
      var filtered = {
        name: err.name,
        message: err.message,
        details: err.details,
        object: err._object,
        stack: err.stack
      };
      return promise.reject(filtered, value);
    }
    return promise.resolve(value);
  });
}

module.exports = validate;
