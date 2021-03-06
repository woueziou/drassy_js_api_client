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
    instance = new DrassybackendServerApiDoc.RegisterModel();
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

  describe('RegisterModel', function() {
    it('should create an instance of RegisterModel', function() {
      // uncomment below and update the code to test RegisterModel
      //var instance = new DrassybackendServerApiDoc.RegisterModel();
      //expect(instance).to.be.a(DrassybackendServerApiDoc.RegisterModel);
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new DrassybackendServerApiDoc.RegisterModel();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new DrassybackendServerApiDoc.RegisterModel();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new DrassybackendServerApiDoc.RegisterModel();
      //expect(instance).to.be();
    });

    it('should have the property countryId (base name: "country_id")', function() {
      // uncomment below and update the code to test the property countryId
      //var instance = new DrassybackendServerApiDoc.RegisterModel();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new DrassybackendServerApiDoc.RegisterModel();
      //expect(instance).to.be();
    });

    it('should have the property sex (base name: "sex")', function() {
      // uncomment below and update the code to test the property sex
      //var instance = new DrassybackendServerApiDoc.RegisterModel();
      //expect(instance).to.be();
    });

  });

}));
