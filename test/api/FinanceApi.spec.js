/**
 * DRASSYBACKEND Server api doc
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: taasekpaye@outlook.fr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DrassybackendServerApiDoc);
  }
}(this, function(expect, DrassybackendServerApiDoc) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DrassybackendServerApiDoc.FinanceApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FinanceApi', function() {
    describe('getFinancialProfile', function() {
      it('should call getFinancialProfile successfully', function(done) {
        //uncomment below and update the code to test getFinancialProfile
        //instance.getFinancialProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchFinancialUpdate', function() {
      it('should call patchFinancialUpdate successfully', function(done) {
        //uncomment below and update the code to test patchFinancialUpdate
        //instance.patchFinancialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postFinancialCreate', function() {
      it('should call postFinancialCreate successfully', function(done) {
        //uncomment below and update the code to test postFinancialCreate
        //instance.postFinancialCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
