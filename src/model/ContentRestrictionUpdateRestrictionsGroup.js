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
* The ContentRestrictionUpdateRestrictionsGroup model module.
* @module model/ContentRestrictionUpdateRestrictionsGroup
* @version 1.0.0
*/
export default class ContentRestrictionUpdateRestrictionsGroup {
    /**
    * Constructs a new <code>ContentRestrictionUpdateRestrictionsGroup</code>.
    * A group that the restriction will be applied to.
    * @alias module:model/ContentRestrictionUpdateRestrictionsGroup
    * @class
    * @param type {module:model/ContentRestrictionUpdateRestrictionsGroup.TypeEnum} Set to 'group'.
    * @param name {String} The name of the group.
    */

    constructor(type, name) {
        
        
        this['type'] = type;
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>ContentRestrictionUpdateRestrictionsGroup</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentRestrictionUpdateRestrictionsGroup} obj Optional instance to populate.
    * @return {module:model/ContentRestrictionUpdateRestrictionsGroup} The populated <code>ContentRestrictionUpdateRestrictionsGroup</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentRestrictionUpdateRestrictionsGroup();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * Set to 'group'.
    * @member {module:model/ContentRestrictionUpdateRestrictionsGroup.TypeEnum} type
    */
    type = undefined;
    /**
    * The name of the group.
    * @member {String} name
    */
    name = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "group"
         * @const
         */
        "group": "group"    };

}
