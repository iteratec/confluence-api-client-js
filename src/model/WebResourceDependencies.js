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
import SuperBatchWebResources from './SuperBatchWebResources';
import SuperBatchWebResourcesTags from './SuperBatchWebResourcesTags';
import SuperBatchWebResourcesUris from './SuperBatchWebResourcesUris';

/**
* The WebResourceDependencies model module.
* @module model/WebResourceDependencies
* @version 1.0.0
*/
export default class WebResourceDependencies {
    /**
    * Constructs a new <code>WebResourceDependencies</code>.
    * @alias module:model/WebResourceDependencies
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>WebResourceDependencies</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WebResourceDependencies} obj Optional instance to populate.
    * @return {module:model/WebResourceDependencies} The populated <code>WebResourceDependencies</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebResourceDependencies();
                        
            
            if (data.hasOwnProperty('keys')) {
                obj['keys'] = ApiClient.convertToType(data['keys'], ['String']);
            }
            if (data.hasOwnProperty('contexts')) {
                obj['contexts'] = ApiClient.convertToType(data['contexts'], ['String']);
            }
            if (data.hasOwnProperty('uris')) {
                obj['uris'] = SuperBatchWebResourcesUris.constructFromObject(data['uris']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = SuperBatchWebResourcesTags.constructFromObject(data['tags']);
            }
            if (data.hasOwnProperty('superbatch')) {
                obj['superbatch'] = SuperBatchWebResources.constructFromObject(data['superbatch']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<String>} keys
    */
    keys = undefined;
    /**
    * @member {Array.<String>} contexts
    */
    contexts = undefined;
    /**
    * @member {module:model/SuperBatchWebResourcesUris} uris
    */
    uris = undefined;
    /**
    * @member {module:model/SuperBatchWebResourcesTags} tags
    */
    tags = undefined;
    /**
    * @member {module:model/SuperBatchWebResources} superbatch
    */
    superbatch = undefined;




}
