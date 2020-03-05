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
    instance = new TheConfluenceCloudRestApi.RelationApi();
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

  describe('RelationApi', function() {
    describe('comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut', function() {
      it('should call comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut successfully', function(done) {
        //uncomment below and update the code to test comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut
        //instance.comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete', function() {
      it('should call comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete successfully', function(done) {
        //uncomment below and update the code to test comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete
        //instance.comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet', function() {
      it('should call comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet successfully', function(done) {
        //uncomment below and update the code to test comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet
        //instance.comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet', function() {
      it('should call comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet successfully', function(done) {
        //uncomment below and update the code to test comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet
        //instance.comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet', function() {
      it('should call comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet successfully', function(done) {
        //uncomment below and update the code to test comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet
        //instance.comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));