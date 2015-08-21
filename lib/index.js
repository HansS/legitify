'use strict';

var registry = require('./registry');
module.exports = {
  register: registry.register,
  registerAll: registry.registerAll,
  getSchema: registry.getSchema,
  validate: require('./validation')
};
