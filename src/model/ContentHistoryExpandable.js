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

import ApiClient from '../ApiClient';

/**
* The ContentHistoryExpandable model module.
* @module model/ContentHistoryExpandable
* @version 1.0.0
*/
export default class ContentHistoryExpandable {
    /**
    * Constructs a new <code>ContentHistoryExpandable</code>.
    * @alias module:model/ContentHistoryExpandable
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ContentHistoryExpandable</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentHistoryExpandable} obj Optional instance to populate.
    * @return {module:model/ContentHistoryExpandable} The populated <code>ContentHistoryExpandable</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentHistoryExpandable();
                        
            
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'String');
            }
            if (data.hasOwnProperty('previousVersion')) {
                obj['previousVersion'] = ApiClient.convertToType(data['previousVersion'], 'String');
            }
            if (data.hasOwnProperty('contributors')) {
                obj['contributors'] = ApiClient.convertToType(data['contributors'], 'String');
            }
            if (data.hasOwnProperty('nextVersion')) {
                obj['nextVersion'] = ApiClient.convertToType(data['nextVersion'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} lastUpdated
    */
    lastUpdated = undefined;
    /**
    * @member {String} previousVersion
    */
    previousVersion = undefined;
    /**
    * @member {String} contributors
    */
    contributors = undefined;
    /**
    * @member {String} nextVersion
    */
    nextVersion = undefined;




}
