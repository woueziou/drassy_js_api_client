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
    instance = new DrassybackendServerApiDoc.InvestSubscribeResponse();
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

  describe('InvestSubscribeResponse', function() {
    it('should create an instance of InvestSubscribeResponse', function() {
      // uncomment below and update the code to test InvestSubscribeResponse
      //var instance = new DrassybackendServerApiDoc.InvestSubscribeResponse();
      //expect(instance).to.be.a(DrassybackendServerApiDoc.InvestSubscribeResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DrassybackendServerApiDoc.InvestSubscribeResponse();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new DrassybackendServerApiDoc.InvestSubscribeResponse();
      //expect(instance).to.be();
    });

    it('should have the property investment (base name: "investment")', function() {
      // uncomment below and update the code to test the property investment
      //var instance = new DrassybackendServerApiDoc.InvestSubscribeResponse();
      //expect(instance).to.be();
    });

  });

}));