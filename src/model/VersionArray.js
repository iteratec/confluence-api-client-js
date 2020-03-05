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
import Version from './Version';

/**
* The VersionArray model module.
* @module model/VersionArray
* @version 1.0.0
*/
export default class VersionArray {
    /**
    * Constructs a new <code>VersionArray</code>.
    * @alias module:model/VersionArray
    * @class
    * @param results {Array.<module:model/Version>} 
    * @param start {Number} 
    * @param limit {Number} 
    * @param size {Number} 
    * @param links {module:model/GenericLinks} 
    */

    constructor(results, start, limit, size, links) {
        
        
        this['results'] = results;
        this['start'] = start;
        this['limit'] = limit;
        this['size'] = size;
        this['_links'] = links;
        
    }

    /**
    * Constructs a <code>VersionArray</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VersionArray} obj Optional instance to populate.
    * @return {module:model/VersionArray} The populated <code>VersionArray</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionArray();
                        
            
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Version]);
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = GenericLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/Version>} results
    */
    results = undefined;
    /**
    * @member {Number} start
    */
    start = undefined;
    /**
    * @member {Number} limit
    */
    limit = undefined;
    /**
    * @member {Number} size
    */
    size = undefined;
    /**
    * @member {module:model/GenericLinks} _links
    */
    _links = undefined;




}
