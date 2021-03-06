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
* The OperationCheckResult model module.
* @module model/OperationCheckResult
* @version 1.0.0
*/
export default class OperationCheckResult {
    /**
    * Constructs a new <code>OperationCheckResult</code>.
    * An operation and the target entity that it applies to, e.g. create page.
    * @alias module:model/OperationCheckResult
    * @class
    * @param operation {module:model/OperationCheckResult.OperationEnum} The operation itself.
    * @param targetType {module:model/OperationCheckResult.TargetTypeEnum} The space or content type that the operation applies to.
    */

    constructor(operation, targetType) {
        
        
        this['operation'] = operation;
        this['targetType'] = targetType;
        
    }

    /**
    * Constructs a <code>OperationCheckResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OperationCheckResult} obj Optional instance to populate.
    * @return {module:model/OperationCheckResult} The populated <code>OperationCheckResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationCheckResult();
                        
            
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('targetType')) {
                obj['targetType'] = ApiClient.convertToType(data['targetType'], 'String');
            }
        }
        return obj;
    }

    /**
    * The operation itself.
    * @member {module:model/OperationCheckResult.OperationEnum} operation
    */
    operation = undefined;
    /**
    * The space or content type that the operation applies to.
    * @member {module:model/OperationCheckResult.TargetTypeEnum} targetType
    */
    targetType = undefined;



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
    /**
    * Allowed values for the <code>targetType</code> property.
    * @enum {String}
    * @readonly
    */
    static TargetTypeEnum = {
        /**
         * value: "page"
         * @const
         */
        "page": "page",
        /**
         * value: "blogpost"
         * @const
         */
        "blogpost": "blogpost",
        /**
         * value: "comment"
         * @const
         */
        "comment": "comment",
        /**
         * value: "attachment"
         * @const
         */
        "attachment": "attachment",
        /**
         * value: "space"
         * @const
         */
        "space": "space"    };

}
