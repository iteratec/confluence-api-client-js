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
import Content from './Content';
import ContentPropertyVersion from './ContentPropertyVersion';
import GenericLinks from './GenericLinks';

/**
* The ContentProperty model module.
* @module model/ContentProperty
* @version 1.0.0
*/
export default class ContentProperty {
    /**
    * Constructs a new <code>ContentProperty</code>.
    * @alias module:model/ContentProperty
    * @class
    * @param id {Number} 
    * @param key {String} 
    * @param value {Object.<String, Object>} The value of the content property. This can be empty or a complex object.
    * @param links {module:model/GenericLinks} 
    */

    constructor(id, key, value, links) {
        
        
        this['id'] = id;
        this['key'] = key;
        this['value'] = value;
        this['_links'] = links;
        
    }

    /**
    * Constructs a <code>ContentProperty</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentProperty} obj Optional instance to populate.
    * @return {module:model/ContentProperty} The populated <code>ContentProperty</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentProperty();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], {'String': Object});
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ContentPropertyVersion.constructFromObject(data['version']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = Content.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = GenericLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} key
    */
    key = undefined;
    /**
    * The value of the content property. This can be empty or a complex object.
    * @member {Object.<String, Object>} value
    */
    value = undefined;
    /**
    * @member {module:model/ContentPropertyVersion} version
    */
    version = undefined;
    /**
    * @member {module:model/Content} content
    */
    content = undefined;
    /**
    * @member {module:model/GenericLinks} _links
    */
    _links = undefined;




}
