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
* The LabelCreate model module.
* @module model/LabelCreate
* @version 1.0.0
*/
export default class LabelCreate {
    /**
    * Constructs a new <code>LabelCreate</code>.
    * @alias module:model/LabelCreate
    * @class
    * @param prefix {module:model/LabelCreate.PrefixEnum} The prefix for the label.
    * @param name {String} The name of the label, which will be shown in the UI.
    */

    constructor(prefix, name) {
        
        
        this['prefix'] = prefix;
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>LabelCreate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LabelCreate} obj Optional instance to populate.
    * @return {module:model/LabelCreate} The populated <code>LabelCreate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LabelCreate();
                        
            
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * The prefix for the label.
    * @member {module:model/LabelCreate.PrefixEnum} prefix
    */
    prefix = undefined;
    /**
    * The name of the label, which will be shown in the UI.
    * @member {String} name
    */
    name = undefined;



    /**
    * Allowed values for the <code>prefix</code> property.
    * @enum {String}
    * @readonly
    */
    static PrefixEnum = {
        /**
         * value: "global"
         * @const
         */
        "global": "global",
        /**
         * value: "my"
         * @const
         */
        "my": "my",
        /**
         * value: "team"
         * @const
         */
        "team": "team"    };

}