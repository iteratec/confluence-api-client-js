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
import Group from '../model/Group';
import GroupArrayWithLinks from '../model/GroupArrayWithLinks';
import UserArrayWithLinks from '../model/UserArrayWithLinks';

/**
* Group service.
* @module api/GroupApi
* @version 1.0.0
*/
export default class GroupApi {

    /**
    * Constructs a new GroupApi.
    * @alias module:api/GroupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the confluenceGroupResourceGetGroupGet operation.
     * @callback module:api/GroupApi~confluenceGroupResourceGetGroupGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get group
     * Returns a user group for a given group name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).
     * @param {module:api/GroupApi~confluenceGroupResourceGetGroupGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    confluenceGroupResourceGetGroupGet(groupName, callback) {
      let postBody = null;

      let pathParams = {
        'groupName': groupName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Group;

      return this.apiClient.callApi(
        '/api/group/{groupName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the confluenceGroupResourceGetGroupMembersGet operation.
     * @callback module:api/GroupApi~confluenceGroupResourceGetGroupMembersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserArrayWithLinks} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get group members
     * Returns the users that are members of a group.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).
     * @param {Object} opts Optional parameters
     * @param {module:api/GroupApi~confluenceGroupResourceGetGroupMembersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserArrayWithLinks}
     */
    confluenceGroupResourceGetGroupMembersGet(groupName, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'groupName': groupName
      };
      let queryParams = {
        'start': opts.start,
        'limit': opts.limit
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserArrayWithLinks;

      return this.apiClient.callApi(
        '/api/group/{groupName}/member', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the confluenceGroupResourceGetGroupsGet operation.
     * @callback module:api/GroupApi~confluenceGroupResourceGetGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupArrayWithLinks} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get groups
     * Returns all user groups. The returned groups are ordered alphabetically in ascending order by group name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).
     * @param {Object} opts Optional parameters
     * @param {module:api/GroupApi~confluenceGroupResourceGetGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupArrayWithLinks}
     */
    confluenceGroupResourceGetGroupsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'start': opts.start,
        'limit': opts.limit
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupArrayWithLinks;

      return this.apiClient.callApi(
        '/api/group', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
