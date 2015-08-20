'use strict';

var promise = require('bluebird');
var joi = require('joi');
var assert = require('fluent-assert');

var registery = require('./registery');

module.exports = function(schemaName, object, options) {
  assert.string('schemaName', schema).notEmpty();
  assert.object('objectToValidate', object);

  return joi.validate(object, registery[name], options, function(err, value){
    if(err){
      var filteredError = {
        name: err.name,
        message: err.message,
        details: err.details,
        object: err._.object
      };
      return promise.reject(filteredError, value);
    }
    return promise.resolve(value);
  });
}
