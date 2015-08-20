'use strict';

var promise = require('bluebird');
var joi = require('joi');

module.exports = function(schema, object, options){
  return joi.validate(object, schema, options, function(err, value){
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
