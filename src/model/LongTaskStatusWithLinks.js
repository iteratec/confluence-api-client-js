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
import LongTaskStatus from './LongTaskStatus';
import LongTaskStatusName from './LongTaskStatusName';
import Message from './Message';

/**
* The LongTaskStatusWithLinks model module.
* @module model/LongTaskStatusWithLinks
* @version 1.0.0
*/
export default class LongTaskStatusWithLinks {
    /**
    * Constructs a new <code>LongTaskStatusWithLinks</code>.
    * Same as LongTaskStatus but with &#x60;_links&#x60; property.
    * @alias module:model/LongTaskStatusWithLinks
    * @class
    * @extends module:model/LongTaskStatus
    * @param id {} 
    * @param name {} 
    * @param elapsedTime {} 
    * @param percentageComplete {} 
    * @param successful {} 
    * @param messages {} 
    * @param links {} 
    */

    constructor(id, name, elapsedTime, percentageComplete, successful, messages, links) {
        LongTaskStatus.call(this, id, name, elapsedTime, percentageComplete, successful, messages);
        
        this['_links'] = links;
        
    }

    /**
    * Constructs a <code>LongTaskStatusWithLinks</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LongTaskStatusWithLinks} obj Optional instance to populate.
    * @return {module:model/LongTaskStatusWithLinks} The populated <code>LongTaskStatusWithLinks</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LongTaskStatusWithLinks();
            
            LongTaskStatus.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = GenericLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/GenericLinks} _links
    */
    _links = undefined;




}
