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
import LookAndFeel from './LookAndFeel';

/**
* The LookAndFeelType model module.
* @module model/LookAndFeelType
* @version 1.0.0
*/
export default class LookAndFeelType {
    /**
    * Constructs a new <code>LookAndFeelType</code>.
    * The object for choosing the look and feel settings for the site or a space.
    * @alias module:model/LookAndFeelType
    * @class
    * @param selected {module:model/LookAndFeelType.SelectedEnum} The look and feel scheme. If you set this to `global`, you must specify the current global look and feel settings as a `global` object in this request. Similarly, if you set this to `custom`, you must specify the current custom look and feel settings as a `custom` object in this request.
    */

    constructor(selected) {
        
        
        this['selected'] = selected;
        
    }

    /**
    * Constructs a <code>LookAndFeelType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LookAndFeelType} obj Optional instance to populate.
    * @return {module:model/LookAndFeelType} The populated <code>LookAndFeelType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LookAndFeelType();
                        
            
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'String');
            }
            if (data.hasOwnProperty('global')) {
                obj['global'] = LookAndFeel.constructFromObject(data['global']);
            }
            if (data.hasOwnProperty('custom')) {
                obj['custom'] = LookAndFeel.constructFromObject(data['custom']);
            }
        }
        return obj;
    }

    /**
    * The look and feel scheme. If you set this to `global`, you must specify the current global look and feel settings as a `global` object in this request. Similarly, if you set this to `custom`, you must specify the current custom look and feel settings as a `custom` object in this request.
    * @member {module:model/LookAndFeelType.SelectedEnum} selected
    */
    selected = undefined;
    /**
    * @member {module:model/LookAndFeel} global
    */
    global = undefined;
    /**
    * @member {module:model/LookAndFeel} custom
    */
    custom = undefined;



    /**
    * Allowed values for the <code>selected</code> property.
    * @enum {String}
    * @readonly
    */
    static SelectedEnum = {
        /**
         * value: "global"
         * @const
         */
        "global": "global",
        /**
         * value: "custom"
         * @const
         */
        "custom": "custom"    };

}
