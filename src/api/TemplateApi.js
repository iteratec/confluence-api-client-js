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
import BlueprintTemplateArray from '../model/BlueprintTemplateArray';
import ContentTemplate from '../model/ContentTemplate';
import ContentTemplateArray from '../model/ContentTemplateArray';
import ContentTemplateCreate from '../model/ContentTemplateCreate';
import ContentTemplateUpdate from '../model/ContentTemplateUpdate';

/**
* Template service.
* @module api/TemplateApi
* @version 1.0.0
*/
export default class TemplateApi {

    /**
    * Constructs a new TemplateApi. 
    * @alias module:api/TemplateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesTemplateResourceCreateContentTemplatePost operation.
     * @callback module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceCreateContentTemplatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create content template
     * Creates a new content template. Note, blueprint templates cannot be created via the REST API.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space to create a space template or &#x27;Confluence Administrator&#x27; global permission to create a global template.
     * @param {module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceCreateContentTemplatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentTemplate}
     */
    comAtlassianConfluencePluginsRestapiResourcesTemplateResourceCreateContentTemplatePost(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ContentTemplate;

      return this.apiClient.callApi(
        '/api/template', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetBlueprintTemplatesGet operation.
     * @callback module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetBlueprintTemplatesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlueprintTemplateArray} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get blueprint templates
     * Returns all templates provided by blueprints. Use this method to retrieve all global blueprint templates or all blueprint templates in a space.  Note, all global blueprints are inherited by each space. Space blueprints can be customised without affecting the global blueprints.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).
     * @param {Object} opts Optional parameters
     * @param {module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetBlueprintTemplatesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlueprintTemplateArray}
     */
    comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetBlueprintTemplatesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'spaceKey': opts['spaceKey'],
        'start': opts['start'],
        'limit': opts['limit'],
        'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BlueprintTemplateArray;

      return this.apiClient.callApi(
        '/api/template/blueprint', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplateGet operation.
     * @callback module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplateGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get content template
     * Returns a content template. This includes information about template, like the name, the space or blueprint that the template is in, the body of the template, and more.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space to view space templates and &#x27;Confluence Administrator&#x27; global permission to view global templates.
     * @param {module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplateGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentTemplate}
     */
    comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplateGet(contentTemplateId, callback) {
      let postBody = null;

      let pathParams = {
        'contentTemplateId': contentTemplateId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ContentTemplate;

      return this.apiClient.callApi(
        '/api/template/{contentTemplateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplatesGet operation.
     * @callback module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplatesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentTemplateArray} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get content templates
     * Returns all content templates. Use this method to retrieve all global content templates or all content templates in a space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space to view space templates and &#x27;Confluence Administrator&#x27; global permission to view global templates.
     * @param {Object} opts Optional parameters
     * @param {module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplatesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentTemplateArray}
     */
    comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplatesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'spaceKey': opts['spaceKey'],
        'start': opts['start'],
        'limit': opts['limit'],
        'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ContentTemplateArray;

      return this.apiClient.callApi(
        '/api/template/page', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesTemplateResourceRemoveTemplateDelete operation.
     * @callback module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceRemoveTemplateDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove template
     * Deletes a template. This results in different actions depending on the type of template:  - If the template is a content template, it is deleted. - If the template is a modified space-level blueprint template, it reverts to the template inherited from the global-level blueprint template. - If the template is a modified global-level blueprint template, it reverts to the default global-level blueprint template.   Note, unmodified blueprint templates cannot be deleted.
     * @param {module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceRemoveTemplateDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    comAtlassianConfluencePluginsRestapiResourcesTemplateResourceRemoveTemplateDelete(contentTemplateId, callback) {
      let postBody = null;

      let pathParams = {
        'contentTemplateId': contentTemplateId
      };
      let queryParams = {
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
        '/api/template/{contentTemplateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesTemplateResourceUpdateContentTemplatePut operation.
     * @callback module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceUpdateContentTemplatePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update content template
     * Updates a content template. Note, blueprint templates cannot be updated via the REST API.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space to create a space template or &#x27;Confluence Administrator&#x27; global permission to create a global template.
     * @param {module:api/TemplateApi~comAtlassianConfluencePluginsRestapiResourcesTemplateResourceUpdateContentTemplatePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentTemplate}
     */
    comAtlassianConfluencePluginsRestapiResourcesTemplateResourceUpdateContentTemplatePut(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuthDefinitions'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ContentTemplate;

      return this.apiClient.callApi(
        '/api/template', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
