# legitify
[![Build Status](https://travis-ci.org/rizowski/legitify.svg)](https://travis-ci.org/rizowski/legitify)


## Usage
```
npm install --save legitify
```

### Code

```
  var legit = require('legitify');
  var appleSchema = require('path/to/apple/schema');

  ...
  // register the schema with legitify
  legit.register('apple', appleSchema);

  ...

  legit.validate('apple', objectToValidate)
    .then(function(value){
      // proceed to use value
    })
    .error(function(error){
      // determine what to do
    });
```
