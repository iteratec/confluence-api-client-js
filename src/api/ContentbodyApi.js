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
import ContentBody from '../model/ContentBody';
import ContentBodyCreate from '../model/ContentBodyCreate';

/**
* Contentbody service.
* @module api/ContentbodyApi
* @version 1.0.0
*/
export default class ContentbodyApi {

    /**
    * Constructs a new ContentbodyApi.
    * @alias module:api/ContentbodyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the confluenceContentBodyResourceConvertContentBodyPost operation.
     * @callback module:api/ContentbodyApi~confluenceContentBodyResourceConvertContentBodyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert content body
     * Converts a content body from one format to another format.  Supported conversions:  - storage: view, export_view, styled_view, editor - editor: storage - view: none - export_view: none - styled_view: none  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: If request specifies &#x27;contentIdContext&#x27;, &#x27;View&#x27; permission for the space, and permission to view the content.
     * @param {Object} opts Optional parameters
     * @param {module:api/ContentbodyApi~confluenceContentBodyResourceConvertContentBodyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentBody}
     */
    confluenceContentBodyResourceConvertContentBodyPost(body, to, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'to': to
      };
      let queryParams = {
        'expand': this.apiClient.buildCollectionParam(opts.expand, 'multi'),
        'spaceKeyContext': opts.spaceKeyContext,
        'contentIdContext': opts.contentIdContext,
        'embeddedContentRender': opts.embeddedContentRender
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ContentBody;

      return this.apiClient.callApi(
        '/api/contentbody/convert/{to}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
