/*jshint esversion: 9 */

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

import ApiClient from "../ApiClient";
import Relation from '../model/Relation';
import RelationArray from '../model/RelationArray';

/**
* Relation service.
* @module api/RelationApi
* @version 1.0.0
*/
export default class RelationApi {

    /**
    * Constructs a new RelationApi.
    * @alias module:api/RelationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut operation.
     * @callback module:api/RelationApi~comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Relation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create relationship
     * Creates a relationship between two entities (user, space, content). The &#x27;favourite&#x27; relationship is supported by default, but you can use this method to create any type of relationship between two entities.  For example, the following method creates a &#x27;sibling&#x27; relationship between two pieces of content: &#x60;GET https://your-domain.atlassian.net/wiki/rest/api/relation/sibling/from/content/123/to/content/456&#x60;  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).
     * @param {Object} opts Optional parameters
     * @param {module:api/RelationApi~comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Relation}
     */
    comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut(relationName, sourceType, sourceKey, targetType, targetKey, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'relationName': relationName,
        'sourceType': sourceType,
        'sourceKey': sourceKey,
        'targetType': targetType,
        'targetKey': targetKey
      };
      let queryParams = {
        'sourceStatus': opts.sourceStatus,
        'targetStatus': opts.targetStatus,
        'sourceVersion': opts.sourceVersion,
        'targetVersion': opts.targetVersion
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Relation;

      return this.apiClient.callApi(
        '/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete operation.
     * @callback module:api/RelationApi~comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete
     * Deletes a relationship between two entities (user, space, content).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission). For favourite relationships, the current user can only delete their own favourite relationships. A space administrator can delete favourite relationships for any user.
     * @param {Object} opts Optional parameters
     * @param {module:api/RelationApi~comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete(relationName, sourceType, sourceKey, targetType, targetKey, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'relationName': relationName,
        'sourceType': sourceType,
        'sourceKey': sourceKey,
        'targetType': targetType,
        'targetKey': targetKey
      };
      let queryParams = {
        'sourceStatus': opts.sourceStatus,
        'targetStatus': opts.targetStatus,
        'sourceVersion': opts.sourceVersion,
        'targetVersion': opts.targetVersion
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet operation.
     * @callback module:api/RelationApi~comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationArray} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find target entities related to a source entity
     * Returns all target entities that have a particular relationship to the source entity. Note, relationships are one way.  For example, the following method finds all users that have a &#x27;collaborator&#x27; relationship to a piece of content with an ID of &#x27;1234&#x27;: &#x60;GET https://your-domain.atlassian.net/wiki/rest/api/relation/collaborator/to/content/1234/from/user&#x60; Note, &#x27;collaborator&#x27; is an example custom relationship type.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view both the target entity and source entity.
     * @param {Object} opts Optional parameters
     * @param {module:api/RelationApi~comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationArray}
     */
    comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet(relationName, sourceType, targetType, targetKey, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'relationName': relationName,
        'sourceType': sourceType,
        'targetType': targetType,
        'targetKey': targetKey
      };
      let queryParams = {
        'sourceStatus': opts.sourceStatus,
        'targetStatus': opts.targetStatus,
        'sourceVersion': opts.sourceVersion,
        'targetVersion': opts.targetVersion,
        'expand': this.apiClient.buildCollectionParam(opts.expand, 'multi'),
        'start': opts.start,
        'limit': opts.limit
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RelationArray;

      return this.apiClient.callApi(
        '/api/relation/{relationName}/to/{targetType}/{targetKey}/from/{sourceType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet operation.
     * @callback module:api/RelationApi~comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationArray} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find target entities related to a source entity
     * Returns all target entities that have a particular relationship to the source entity. Note, relationships are one way.  For example, the following method finds all content that the current user has an &#x27;ignore&#x27; relationship with: &#x60;GET https://your-domain.atlassian.net/wiki/rest/api/relation/ignore/from/user/current/to/content&#x60; Note, &#x27;ignore&#x27; is an example custom relationship type.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view both the target entity and source entity.
     * @param {Object} opts Optional parameters
     * @param {module:api/RelationApi~comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationArray}
     */
    comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet(relationName, sourceType, sourceKey, targetType, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'relationName': relationName,
        'sourceType': sourceType,
        'sourceKey': sourceKey,
        'targetType': targetType
      };
      let queryParams = {
        'sourceStatus': opts.sourceStatus,
        'targetStatus': opts.targetStatus,
        'sourceVersion': opts.sourceVersion,
        'targetVersion': opts.targetVersion,
        'expand': this.apiClient.buildCollectionParam(opts.expand, 'multi'),
        'start': opts.start,
        'limit': opts.limit
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RelationArray;

      return this.apiClient.callApi(
        '/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet operation.
     * @callback module:api/RelationApi~comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Relation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find relationship from source to target
     * Find whether a particular type of relationship exists from a source entity to a target entity. Note, relationships are one way.  For example, you can use this method to find whether the current user has selected a particular page as a favorite (i.e. &#x27;save for later&#x27;): &#x60;GET https://your-domain.atlassian.net/wiki/rest/api/relation/favourite/from/user/current/to/content/123&#x60;  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view both the target entity and source entity.
     * @param {Object} opts Optional parameters
     * @param {module:api/RelationApi~comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Relation}
     */
    comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet(relationName, sourceType, sourceKey, targetType, targetKey, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'relationName': relationName,
        'sourceType': sourceType,
        'sourceKey': sourceKey,
        'targetType': targetType,
        'targetKey': targetKey
      };
      let queryParams = {
        'sourceStatus': opts.sourceStatus,
        'targetStatus': opts.targetStatus,
        'sourceVersion': opts.sourceVersion,
        'targetVersion': opts.targetVersion,
        'expand': this.apiClient.buildCollectionParam(opts.expand, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Relation;

      return this.apiClient.callApi(
        '/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
