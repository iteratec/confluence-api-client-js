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
* The ContentUpdateVersion model module.
* @module model/ContentUpdateVersion
* @version 1.0.0
*/
export default class ContentUpdateVersion {
    /**
    * Constructs a new <code>ContentUpdateVersion</code>.
    * The new version for the updated content. Set this to the current version number incremented by one, unless you are changing the status to &#x27;draft&#x27; which must have a version number of 1.  To get the current version number, use [Get content by ID](#api-content-id-get) and retrieve &#x60;version.number&#x60;.
    * @alias module:model/ContentUpdateVersion
    * @class
    * @param _number {Number} The version number.
    */

    constructor(_number) {
        
        
        this['number'] = _number;
        
    }

    /**
    * Constructs a <code>ContentUpdateVersion</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentUpdateVersion} obj Optional instance to populate.
    * @return {module:model/ContentUpdateVersion} The populated <code>ContentUpdateVersion</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentUpdateVersion();
                        
            
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The version number.
    * @member {Number} number
    */
    number = undefined;




}
