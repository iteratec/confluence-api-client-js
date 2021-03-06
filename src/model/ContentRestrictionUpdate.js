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
import ContentRestrictionUpdateRestrictions from './ContentRestrictionUpdateRestrictions';

/**
* The ContentRestrictionUpdate model module.
* @module model/ContentRestrictionUpdate
* @version 1.0.0
*/
export default class ContentRestrictionUpdate {
    /**
    * Constructs a new <code>ContentRestrictionUpdate</code>.
    * @alias module:model/ContentRestrictionUpdate
    * @class
    * @param operation {module:model/ContentRestrictionUpdate.OperationEnum} The restriction operation applied to content.
    * @param restrictions {module:model/ContentRestrictionUpdateRestrictions} 
    */

    constructor(operation, restrictions) {
        
        
        this['operation'] = operation;
        this['restrictions'] = restrictions;
        
    }

    /**
    * Constructs a <code>ContentRestrictionUpdate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentRestrictionUpdate} obj Optional instance to populate.
    * @return {module:model/ContentRestrictionUpdate} The populated <code>ContentRestrictionUpdate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentRestrictionUpdate();
                        
            
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('restrictions')) {
                obj['restrictions'] = ContentRestrictionUpdateRestrictions.constructFromObject(data['restrictions']);
            }
        }
        return obj;
    }

    /**
    * The restriction operation applied to content.
    * @member {module:model/ContentRestrictionUpdate.OperationEnum} operation
    */
    operation = undefined;
    /**
    * @member {module:model/ContentRestrictionUpdateRestrictions} restrictions
    */
    restrictions = undefined;



    /**
    * Allowed values for the <code>operation</code> property.
    * @enum {String}
    * @readonly
    */
    static OperationEnum = {
        /**
         * value: "administer"
         * @const
         */
        "administer": "administer",
        /**
         * value: "copy"
         * @const
         */
        "copy": "copy",
        /**
         * value: "create"
         * @const
         */
        "create": "create",
        /**
         * value: "delete"
         * @const
         */
        "delete": "delete",
        /**
         * value: "export"
         * @const
         */
        "export": "export",
        /**
         * value: "move"
         * @const
         */
        "move": "move",
        /**
         * value: "purge"
         * @const
         */
        "purge": "purge",
        /**
         * value: "purge_version"
         * @const
         */
        "purge_version": "purge_version",
        /**
         * value: "read"
         * @const
         */
        "read": "read",
        /**
         * value: "restore"
         * @const
         */
        "restore": "restore",
        /**
         * value: "update"
         * @const
         */
        "update": "update",
        /**
         * value: "use"
         * @const
         */
        "use": "use"    };

}
