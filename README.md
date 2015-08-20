# legitify
[![Build Status](https://travis-ci.org/rizowski/legitify.svg)](https://travis-ci.org/rizowski/legitify)


## Usage
```
npm install --save legitify
```

```
  var appleSchema = require('path/to/apple/schema');
  var legit = require('legitify');
  ...
  legit.register('apple', appleSchema);
  ...
  legit.validate('apple', objectToValidate)
    .then(function(value){
      // proceed to use value
    })
    .error(function(error, object){
      // filtered error
      // object passed in
    });
```
