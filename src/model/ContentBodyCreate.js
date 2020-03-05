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
* The ContentBodyCreate model module.
* @module model/ContentBodyCreate
* @version 1.0.0
*/
export default class ContentBodyCreate {
    /**
    * Constructs a new <code>ContentBodyCreate</code>.
    * This object is used when creating or updating content.
    * @alias module:model/ContentBodyCreate
    * @class
    * @param value {String} The body of the content in the relevant format.
    * @param representation {module:model/ContentBodyCreate.RepresentationEnum} The content format type. Set the value of this property to the name of the format being used, e.g. 'storage'.
    */

    constructor(value, representation) {
        
        
        this['value'] = value;
        this['representation'] = representation;
        
    }

    /**
    * Constructs a <code>ContentBodyCreate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentBodyCreate} obj Optional instance to populate.
    * @return {module:model/ContentBodyCreate} The populated <code>ContentBodyCreate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentBodyCreate();
                        
            
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('representation')) {
                obj['representation'] = ApiClient.convertToType(data['representation'], 'String');
            }
        }
        return obj;
    }

    /**
    * The body of the content in the relevant format.
    * @member {String} value
    */
    value = undefined;
    /**
    * The content format type. Set the value of this property to the name of the format being used, e.g. 'storage'.
    * @member {module:model/ContentBodyCreate.RepresentationEnum} representation
    */
    representation = undefined;



    /**
    * Allowed values for the <code>representation</code> property.
    * @enum {String}
    * @readonly
    */
    static RepresentationEnum = {
        /**
         * value: "view"
         * @const
         */
        "view": "view",
        /**
         * value: "export_view"
         * @const
         */
        "export_view": "export_view",
        /**
         * value: "styled_view"
         * @const
         */
        "styled_view": "styled_view",
        /**
         * value: "storage"
         * @const
         */
        "storage": "storage",
        /**
         * value: "editor2"
         * @const
         */
        "editor2": "editor2",
        /**
         * value: "anonymous_export_view"
         * @const
         */
        "anonymous_export_view": "anonymous_export_view"    };

}
