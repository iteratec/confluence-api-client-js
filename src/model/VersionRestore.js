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
import VersionRestoreParams from './VersionRestoreParams';

/**
* The VersionRestore model module.
* @module model/VersionRestore
* @version 1.0.0
*/
export default class VersionRestore {
    /**
    * Constructs a new <code>VersionRestore</code>.
    * @alias module:model/VersionRestore
    * @class
    * @param operationKey {module:model/VersionRestore.OperationKeyEnum} Set to 'RESTORE'.
    * @param params {module:model/VersionRestoreParams} 
    */

    constructor(operationKey, params) {
        
        
        this['operationKey'] = operationKey;
        this['params'] = params;
        
    }

    /**
    * Constructs a <code>VersionRestore</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VersionRestore} obj Optional instance to populate.
    * @return {module:model/VersionRestore} The populated <code>VersionRestore</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionRestore();
                        
            
            if (data.hasOwnProperty('operationKey')) {
                obj['operationKey'] = ApiClient.convertToType(data['operationKey'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = VersionRestoreParams.constructFromObject(data['params']);
            }
        }
        return obj;
    }

    /**
    * Set to 'RESTORE'.
    * @member {module:model/VersionRestore.OperationKeyEnum} operationKey
    */
    operationKey = undefined;
    /**
    * @member {module:model/VersionRestoreParams} params
    */
    params = undefined;



    /**
    * Allowed values for the <code>operationKey</code> property.
    * @enum {String}
    * @readonly
    */
    static OperationKeyEnum = {
        /**
         * value: "RESTORE"
         * @const
         */
        "RESTORE": "RESTORE"    };

}