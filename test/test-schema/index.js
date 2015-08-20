'use strict';

var joi = require('joi');

module.exports = {
  name: joi.string().required(),
  description: joi.string()
};
