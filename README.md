# legitify
[![Build Status](https://travis-ci.org/rizowski/legitify.svg)](https://travis-ci.org/rizowski/legitify)


Legitify uses Joi schemas to do its validation. Legitify is a wrapper around joi's validation function. It gives the user the functionality of the promise workflow.

## Prereqs
You must have joi installed on your project in order to use this library.
```
"joi" : ">=6.0.0 <7.0.0"
```

## Getting started
```
npm install --save legitify
```

## Code

### Schema definition
Schema definitions are Joi schemas. You can find more information on that here: [joi npm](https://www.npmjs.com/package/joi). Here is an example:
```
// schema/fruit/apple.js
var joi = require('joi');

module.exports = {
  'name': joi.string().required(),
  'description': joi.string()
};
```

#### register
```
  var legit = require('legitify');
  var appleSchema = require('./schema/fruit/apple');

  legit.register('apple', appleSchema);

  legit.validate('apple', objectToValidate)
    .then(function(validatedObject){
      // proceed to use validatedObject
    })
    .error(function(error){
      // determine what to do
    });
```

#### registerAll
Schemas index file must export some object with a name and the joi schema object.
```
// schemas/index.js
module.exports = {
  'apple': require('./fruit/apple'),
  'pizza': required('./vegitable/pizza')
};
```

Require in the schemas index file to have it register all of the schemas.
```
legit.registerAll(require('./schemas'));
```
