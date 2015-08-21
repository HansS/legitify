'use strict';

var registry = require('./registry');
module.exports = {
  register: registry.register,
  getSchema: registry.getSchema,
  validate: require('./validation')
};
