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
* The LookAndFeelHeadings model module.
* @module model/LookAndFeelHeadings
* @version 1.0.0
*/
export default class LookAndFeelHeadings {
    /**
    * Constructs a new <code>LookAndFeelHeadings</code>.
    * @alias module:model/LookAndFeelHeadings
    * @class
    * @param color {String} 
    */

    constructor(color) {
        
        
        this['color'] = color;
        
    }

    /**
    * Constructs a <code>LookAndFeelHeadings</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LookAndFeelHeadings} obj Optional instance to populate.
    * @return {module:model/LookAndFeelHeadings} The populated <code>LookAndFeelHeadings</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LookAndFeelHeadings();
                        
            
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} color
    */
    color = undefined;




}
