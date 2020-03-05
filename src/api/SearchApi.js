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
import SearchPageResponseSearchResult from '../model/SearchPageResponseSearchResult';

/**
* Search service.
* @module api/SearchApi
* @version 1.0.0
*/
export default class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchGet operation.
     * @callback module:api/SearchApi~comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchPageResponseSearchResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search
     * Searches for content using the [Confluence Query Language (CQL)](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/)  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the entities. Note, only entities that the user has permission to view will be returned.
     * @param {Object} opts Optional parameters
     * @param {module:api/SearchApi~comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchPageResponseSearchResult}
     */
    comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchGet(cql, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'cql': cql,
        'cqlcontext': opts['cqlcontext'],
        'start': opts['start'],
        'limit': opts['limit'],
        'includeArchivedSpaces': opts['includeArchivedSpaces']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SearchPageResponseSearchResult;

      return this.apiClient.callApi(
        '/api/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchUserGet operation.
     * @callback module:api/SearchApi~comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchUserGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchPageResponseSearchResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search
     * Searches for users using user-specific queries from the [Confluence Query Language (CQL)](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).  Note that some user fields may be set to null depending on the user&#x27;s privacy settings. These are: email, profilePicture, and displayName.
     * @param {Object} opts Optional parameters
     * @param {module:api/SearchApi~comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchUserGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchPageResponseSearchResult}
     */
    comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchUserGet(cql, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'cql': cql,
        'start': opts['start'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SearchPageResponseSearchResult;

      return this.apiClient.callApi(
        '/api/search/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}