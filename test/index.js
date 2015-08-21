'use strict';


var chai = require('chai');
var schema = require('./test-schema');

var expect = chai.expect;


describe('regressions', function(){
  var legit;
  beforeEach(function(){
    legit = require('../');
  });

  describe('registration', function(){
    describe('register', function(){
      it('registers a schema without throwing errors', function(){
          expect(function(){
            legit.register('test', schema);
          }).to.not.throw();
      });

      it('throws assertion error on name when no input is entered', function(){
        expect(function(){
          legit.register(undefined, schema);
        }).to.throw(/name/);
      });

      it('should throw an assertion error on schema if none is provided', function(){
        expect(function(){
          legit.register('something', undefined);
        }).to.throw(/schema/);
      })
    });

    describe('', function(){
      it('registers all schemas with the provided name', function(){
        legit.registerAll({
          'hello': {},
          'goodbye': {}
        });
        expect(legit.getSchema('hello')).to.be.ok;
      });
    });
  });

  describe('validation', function(){
    beforeEach(function(){
      legit.register('test', schema);
    });

    it('validates a test schema without errors', function(){
      expect(function(){
        legit.validate('test', { name: 'hello', description: 'goodbye' });
      }).to.not.throw;
    });

    it('returns the valid object', function(done){
      var testObj = { name: 'hello', description: 'goodbye' };
      legit.validate('test', testObj)
        .then(function(obj){
          expect(obj).to.deep.equal(testObj);
          done();
        }).error(done).catch(done);
    });

    it('throws exception if schemaName is not provided', function(){
      expect(function(){
        legit.validate();
      }).to.throw(/schemaName/);
    });

    it('returns an error if the object is not to schema spec', function(done){
      legit.validate('test', { description: 'I broken' })
        .error(function(error){
          expect(error).to.be.ok;
          done();
        }).catch(done);
    });
  });
});
