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
import SpaceDescriptionCreatePlain from './SpaceDescriptionCreatePlain';

/**
* The SpaceDescriptionCreate model module.
* @module model/SpaceDescriptionCreate
* @version 1.0.0
*/
export default class SpaceDescriptionCreate {
    /**
    * Constructs a new <code>SpaceDescriptionCreate</code>.
    * The description of the new/updated space. Note, only the &#x27;plain&#x27; representation can be used for the description when creating or updating a space.
    * @alias module:model/SpaceDescriptionCreate
    * @class
    * @param plain {module:model/SpaceDescriptionCreatePlain} 
    */

    constructor(plain) {
        
        
        this['plain'] = plain;
        
    }

    /**
    * Constructs a <code>SpaceDescriptionCreate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SpaceDescriptionCreate} obj Optional instance to populate.
    * @return {module:model/SpaceDescriptionCreate} The populated <code>SpaceDescriptionCreate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpaceDescriptionCreate();
                        
            
            if (data.hasOwnProperty('plain')) {
                obj['plain'] = SpaceDescriptionCreatePlain.constructFromObject(data['plain']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/SpaceDescriptionCreatePlain} plain
    */
    plain = undefined;




}