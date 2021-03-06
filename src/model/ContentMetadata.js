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
import ContentMetadataCurrentuser from './ContentMetadataCurrentuser';
import GenericLinks from './GenericLinks';
import LabelArray from './LabelArray';

/**
* The ContentMetadata model module.
* @module model/ContentMetadata
* @version 1.0.0
*/
export default class ContentMetadata {
    /**
    * Constructs a new <code>ContentMetadata</code>.
    * Metadata object for page, blogpost, comment content
    * @alias module:model/ContentMetadata
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ContentMetadata</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentMetadata} obj Optional instance to populate.
    * @return {module:model/ContentMetadata} The populated <code>ContentMetadata</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentMetadata();
                        
            
            if (data.hasOwnProperty('currentuser')) {
                obj['currentuser'] = ContentMetadataCurrentuser.constructFromObject(data['currentuser']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = GenericLinks.constructFromObject(data['properties']);
            }
            if (data.hasOwnProperty('frontend')) {
                obj['frontend'] = ApiClient.convertToType(data['frontend'], Object);
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = LabelArray.constructFromObject(data['labels']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ContentMetadataCurrentuser} currentuser
    */
    currentuser = undefined;
    /**
    * @member {module:model/GenericLinks} properties
    */
    properties = undefined;
    /**
    * @member {Object} frontend
    */
    frontend = undefined;
    /**
    * @member {module:model/LabelArray} labels
    */
    labels = undefined;




}
