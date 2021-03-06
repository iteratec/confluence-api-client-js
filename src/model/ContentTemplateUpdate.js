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
import ContentBodyCreate from './ContentBodyCreate';
import ContentTemplateUpdateSpace from './ContentTemplateUpdateSpace';
import Label from './Label';

/**
* The ContentTemplateUpdate model module.
* @module model/ContentTemplateUpdate
* @version 1.0.0
*/
export default class ContentTemplateUpdate {
    /**
    * Constructs a new <code>ContentTemplateUpdate</code>.
    * This object is used to update content templates.
    * @alias module:model/ContentTemplateUpdate
    * @class
    * @param templateId {String} The ID of the template being updated.
    * @param name {String} The name of the template. Set to the current `name` if this field is not being updated.
    * @param templateType {module:model/ContentTemplateUpdate.TemplateTypeEnum} The type of the template. Set to `page`.
    * @param body {module:model/ContentBodyCreate} 
    */

    constructor(templateId, name, templateType, body) {
        
        
        this['templateId'] = templateId;
        this['name'] = name;
        this['templateType'] = templateType;
        this['body'] = body;
        
    }

    /**
    * Constructs a <code>ContentTemplateUpdate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentTemplateUpdate} obj Optional instance to populate.
    * @return {module:model/ContentTemplateUpdate} The populated <code>ContentTemplateUpdate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentTemplateUpdate();
                        
            
            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('templateType')) {
                obj['templateType'] = ApiClient.convertToType(data['templateType'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ContentBodyCreate.constructFromObject(data['body']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], [Label]);
            }
            if (data.hasOwnProperty('space')) {
                obj['space'] = ContentTemplateUpdateSpace.constructFromObject(data['space']);
            }
        }
        return obj;
    }

    /**
    * The ID of the template being updated.
    * @member {String} templateId
    */
    templateId = undefined;
    /**
    * The name of the template. Set to the current `name` if this field is not being updated.
    * @member {String} name
    */
    name = undefined;
    /**
    * The type of the template. Set to `page`.
    * @member {module:model/ContentTemplateUpdate.TemplateTypeEnum} templateType
    */
    templateType = undefined;
    /**
    * @member {module:model/ContentBodyCreate} body
    */
    body = undefined;
    /**
    * A description of the template.
    * @member {String} description
    */
    description = undefined;
    /**
    * Labels for the template.
    * @member {Array.<module:model/Label>} labels
    */
    labels = undefined;
    /**
    * @member {module:model/ContentTemplateUpdateSpace} space
    */
    space = undefined;



    /**
    * Allowed values for the <code>templateType</code> property.
    * @enum {String}
    * @readonly
    */
    static TemplateTypeEnum = {
        /**
         * value: "page"
         * @const
         */
        "page": "page"    };

}
