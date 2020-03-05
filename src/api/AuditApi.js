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
import AuditRecord from '../model/AuditRecord';
import AuditRecordArray from '../model/AuditRecordArray';
import AuditRecordCreate from '../model/AuditRecordCreate';
import RetentionPeriod from '../model/RetentionPeriod';

/**
* Audit service.
* @module api/AuditApi
* @version 1.0.0
*/
export default class AuditApi {

    /**
    * Constructs a new AuditApi. 
    * @alias module:api/AuditApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesAuditResourceCreateAuditRecordPost operation.
     * @callback module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceCreateAuditRecordPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuditRecord} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create audit record
     * Creates a record in the audit log.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.
     * @param {module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceCreateAuditRecordPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuditRecord}
     */
    comAtlassianConfluencePluginsRestapiResourcesAuditResourceCreateAuditRecordPost(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuditRecord;

      return this.apiClient.callApi(
        '/api/audit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesAuditResourceExportAuditRecordsGet operation.
     * @callback module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceExportAuditRecordsGetCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export audit records
     * Exports audit records as a CSV file or ZIP file.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.
     * @param {Object} opts Optional parameters
     * @param {module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceExportAuditRecordsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    comAtlassianConfluencePluginsRestapiResourcesAuditResourceExportAuditRecordsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'searchString': opts['searchString'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/zip', 'text/csv'];
      let returnType = 'Blob';

      return this.apiClient.callApi(
        '/api/audit/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsForTimePeriodGet operation.
     * @callback module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsForTimePeriodGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuditRecordArray} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get audit records for time period
     * Returns records from the audit log, for a time period back from the current date. For example, you can use this method to get the last 3 months of records.  This contains information about events like space exports, group membership changes, app installations, etc. For more information, see [Audit log](https://confluence.atlassian.com/confcloud/audit-log-802164269.html) in the Confluence administrator&#x27;s guide.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.
     * @param {Object} opts Optional parameters
     * @param {module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsForTimePeriodGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuditRecordArray}
     */
    comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsForTimePeriodGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'number': opts['_number'],
        'units': opts['units'],
        'searchString': opts['searchString'],
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
      let returnType = AuditRecordArray;

      return this.apiClient.callApi(
        '/api/audit/since', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsGet operation.
     * @callback module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuditRecordArray} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get audit records
     * Returns all records in the audit log, optionally for a certain date range. This contains information about events like space exports, group membership changes, app installations, etc. For more information, see [Audit log](https://confluence.atlassian.com/confcloud/audit-log-802164269.html) in the Confluence administrator&#x27;s guide.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.
     * @param {Object} opts Optional parameters
     * @param {module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuditRecordArray}
     */
    comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'searchString': opts['searchString'],
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
      let returnType = AuditRecordArray;

      return this.apiClient.callApi(
        '/api/audit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetRetentionPeriodGet operation.
     * @callback module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetRetentionPeriodGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetentionPeriod} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get retention period
     * Returns the retention period for records in the audit log. The retention period is how long an audit record is kept for, from creation date until it is deleted.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.
     * @param {module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetRetentionPeriodGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RetentionPeriod}
     */
    comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetRetentionPeriodGet(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = RetentionPeriod;

      return this.apiClient.callApi(
        '/api/audit/retention', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the comAtlassianConfluencePluginsRestapiResourcesAuditResourceSetRetentionPeriodPut operation.
     * @callback module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceSetRetentionPeriodPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetentionPeriod} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set retention period
     * Sets the retention period for records in the audit log. The retention period can be set to a maximum of 20 years.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.
     * @param {module:api/AuditApi~comAtlassianConfluencePluginsRestapiResourcesAuditResourceSetRetentionPeriodPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RetentionPeriod}
     */
    comAtlassianConfluencePluginsRestapiResourcesAuditResourceSetRetentionPeriodPut(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RetentionPeriod;

      return this.apiClient.callApi(
        '/api/audit/retention', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}