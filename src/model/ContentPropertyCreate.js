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
import PropertyValue from './PropertyValue';

/**
* The ContentPropertyCreate model module.
* @module model/ContentPropertyCreate
* @version 1.0.0
*/
export default class ContentPropertyCreate {
    /**
    * Constructs a new <code>ContentPropertyCreate</code>.
    * @alias module:model/ContentPropertyCreate
    * @class
    * @param key {String} The key of the new property.
    * @param value {module:model/PropertyValue} 
    */

    constructor(key, value) {
        
        
        this['key'] = key;
        this['value'] = value;
        
    }

    /**
    * Constructs a <code>ContentPropertyCreate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentPropertyCreate} obj Optional instance to populate.
    * @return {module:model/ContentPropertyCreate} The populated <code>ContentPropertyCreate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentPropertyCreate();
                        
            
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = PropertyValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
    * The key of the new property.
    * @member {String} key
    */
    key = undefined;
    /**
    * @member {module:model/PropertyValue} value
    */
    value = undefined;




}
