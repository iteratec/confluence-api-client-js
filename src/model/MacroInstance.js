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
import GenericLinks from './GenericLinks';

/**
* The MacroInstance model module.
* @module model/MacroInstance
* @version 1.0.0
*/
export default class MacroInstance {
    /**
    * Constructs a new <code>MacroInstance</code>.
    * @alias module:model/MacroInstance
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>MacroInstance</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MacroInstance} obj Optional instance to populate.
    * @return {module:model/MacroInstance} The populated <code>MacroInstance</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MacroInstance();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], {'String': Object});
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = GenericLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} body
    */
    body = undefined;
    /**
    * @member {Object.<String, Object>} parameters
    */
    parameters = undefined;
    /**
    * @member {module:model/GenericLinks} _links
    */
    _links = undefined;




}