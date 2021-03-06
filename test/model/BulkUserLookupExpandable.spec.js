/**
 * The Confluence Cloud REST API
 * This document describes the REST API and resources provided by Confluence. The REST APIs are for developers who want to integrate Confluence into their application and for administrators who want to script interactions with the Confluence server.Confluence's REST APIs provide access to resources (data entities) via URI paths. To use a REST API, your application will make an HTTP request and parse the response. The response format is JSON. Your methods will be the standard HTTP methods like GET, PUT, POST and DELETE. Because the REST API is based on open standards, you can use any web development language to access the API.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheConfluenceCloudRestApi);
  }
}(this, function(expect, TheConfluenceCloudRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheConfluenceCloudRestApi.BulkUserLookupExpandable();
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

  describe('BulkUserLookupExpandable', function() {
    it('should create an instance of BulkUserLookupExpandable', function() {
      // uncomment below and update the code to test BulkUserLookupExpandable
      //var instane = new TheConfluenceCloudRestApi.BulkUserLookupExpandable();
      //expect(instance).to.be.a(TheConfluenceCloudRestApi.BulkUserLookupExpandable);
    });

    it('should have the property operations (base name: "operations")', function() {
      // uncomment below and update the code to test the property operations
      //var instane = new TheConfluenceCloudRestApi.BulkUserLookupExpandable();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instane = new TheConfluenceCloudRestApi.BulkUserLookupExpandable();
      //expect(instance).to.be();
    });

    it('should have the property personalSpace (base name: "personalSpace")', function() {
      // uncomment below and update the code to test the property personalSpace
      //var instane = new TheConfluenceCloudRestApi.BulkUserLookupExpandable();
      //expect(instance).to.be();
    });

  });

}));
