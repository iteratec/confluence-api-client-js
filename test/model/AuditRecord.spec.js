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
    instance = new TheConfluenceCloudRestApi.AuditRecord();
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

  describe('AuditRecord', function() {
    it('should create an instance of AuditRecord', function() {
      // uncomment below and update the code to test AuditRecord
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be.a(TheConfluenceCloudRestApi.AuditRecord);
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be();
    });

    it('should have the property remoteAddress (base name: "remoteAddress")', function() {
      // uncomment below and update the code to test the property remoteAddress
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be();
    });

    it('should have the property sysAdmin (base name: "sysAdmin")', function() {
      // uncomment below and update the code to test the property sysAdmin
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be();
    });

    it('should have the property affectedObject (base name: "affectedObject")', function() {
      // uncomment below and update the code to test the property affectedObject
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be();
    });

    it('should have the property changedValues (base name: "changedValues")', function() {
      // uncomment below and update the code to test the property changedValues
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be();
    });

    it('should have the property associatedObjects (base name: "associatedObjects")', function() {
      // uncomment below and update the code to test the property associatedObjects
      //var instane = new TheConfluenceCloudRestApi.AuditRecord();
      //expect(instance).to.be();
    });

  });

}));
