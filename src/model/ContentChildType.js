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
import ContentChildTypeAttachment from './ContentChildTypeAttachment';
import ContentChildTypeExpandable from './ContentChildTypeExpandable';

/**
* The ContentChildType model module.
* @module model/ContentChildType
* @version 1.0.0
*/
export default class ContentChildType {
    /**
    * Constructs a new <code>ContentChildType</code>.
    * Shows whether a piece of content has attachments, comments, or child pages. Note, this doesn&#x27;t actually contain the child objects.
    * @alias module:model/ContentChildType
    * @class
    * @param expandable {module:model/ContentChildTypeExpandable} 
    */

    constructor(expandable) {
        
        
        this['_expandable'] = expandable;
        
    }

    /**
    * Constructs a <code>ContentChildType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentChildType} obj Optional instance to populate.
    * @return {module:model/ContentChildType} The populated <code>ContentChildType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentChildType();
                        
            
            if (data.hasOwnProperty('attachment')) {
                obj['attachment'] = ContentChildTypeAttachment.constructFromObject(data['attachment']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ContentChildTypeAttachment.constructFromObject(data['comment']);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ContentChildTypeAttachment.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_expandable')) {
                obj['_expandable'] = ContentChildTypeExpandable.constructFromObject(data['_expandable']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ContentChildTypeAttachment} attachment
    */
    attachment = undefined;
    /**
    * @member {module:model/ContentChildTypeAttachment} comment
    */
    comment = undefined;
    /**
    * @member {module:model/ContentChildTypeAttachment} page
    */
    page = undefined;
    /**
    * @member {module:model/ContentChildTypeExpandable} _expandable
    */
    _expandable = undefined;




}
