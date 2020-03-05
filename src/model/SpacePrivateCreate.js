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
import SpaceDescriptionCreate from './SpaceDescriptionCreate';

/**
* The SpacePrivateCreate model module.
* @module model/SpacePrivateCreate
* @version 1.0.0
*/
export default class SpacePrivateCreate {
    /**
    * Constructs a new <code>SpacePrivateCreate</code>.
    * This is the request object used when creating a new private space.
    * @alias module:model/SpacePrivateCreate
    * @class
    * @param key {String} The key for the new space. Format: See [Space keys](https://confluence.atlassian.com/x/lqNMMQ).
    * @param name {String} The name of the new space.
    */

    constructor(key, name) {
        
        
        this['key'] = key;
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>SpacePrivateCreate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SpacePrivateCreate} obj Optional instance to populate.
    * @return {module:model/SpacePrivateCreate} The populated <code>SpacePrivateCreate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpacePrivateCreate();
                        
            
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = SpaceDescriptionCreate.constructFromObject(data['description']);
            }
        }
        return obj;
    }

    /**
    * The key for the new space. Format: See [Space keys](https://confluence.atlassian.com/x/lqNMMQ).
    * @member {String} key
    */
    key = undefined;
    /**
    * The name of the new space.
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {module:model/SpaceDescriptionCreate} description
    */
    description = undefined;




}