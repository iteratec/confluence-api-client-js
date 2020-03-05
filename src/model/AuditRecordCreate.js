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
import AffectedObject from './AffectedObject';
import AuditRecordCreateAuthor from './AuditRecordCreateAuthor';
import ChangedValue from './ChangedValue';

/**
* The AuditRecordCreate model module.
* @module model/AuditRecordCreate
* @version 1.0.0
*/
export default class AuditRecordCreate {
    /**
    * Constructs a new <code>AuditRecordCreate</code>.
    * @alias module:model/AuditRecordCreate
    * @class
    * @param remoteAddress {String} The IP address of the computer where the event was initiated from.
    */

    constructor(remoteAddress) {
        
        
        this['remoteAddress'] = remoteAddress;
        
    }

    /**
    * Constructs a <code>AuditRecordCreate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AuditRecordCreate} obj Optional instance to populate.
    * @return {module:model/AuditRecordCreate} The populated <code>AuditRecordCreate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuditRecordCreate();
                        
            
            if (data.hasOwnProperty('author')) {
                obj['author'] = AuditRecordCreateAuthor.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('remoteAddress')) {
                obj['remoteAddress'] = ApiClient.convertToType(data['remoteAddress'], 'String');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Number');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('sysAdmin')) {
                obj['sysAdmin'] = ApiClient.convertToType(data['sysAdmin'], 'Boolean');
            }
            if (data.hasOwnProperty('affectedObject')) {
                obj['affectedObject'] = AffectedObject.constructFromObject(data['affectedObject']);
            }
            if (data.hasOwnProperty('changedValues')) {
                obj['changedValues'] = ApiClient.convertToType(data['changedValues'], [ChangedValue]);
            }
            if (data.hasOwnProperty('associatedObjects')) {
                obj['associatedObjects'] = ApiClient.convertToType(data['associatedObjects'], [AffectedObject]);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/AuditRecordCreateAuthor} author
    */
    author = undefined;
    /**
    * The IP address of the computer where the event was initiated from.
    * @member {String} remoteAddress
    */
    remoteAddress = undefined;
    /**
    * The creation date-time of the audit record, as a timestamp. This is converted to a date-time display in the Confluence UI. If the `creationDate` is not specified, then it will be set to the timestamp for the current date-time.
    * @member {Number} creationDate
    */
    creationDate = undefined;
    /**
    * The summary of the event, which is displayed in the 'Change' column on the audit log in the Confluence UI.
    * @member {String} summary
    */
    summary = undefined;
    /**
    * A long description of the event, which is displayed in the 'Description' field on the audit log in the Confluence UI.
    * @member {String} description
    */
    description = undefined;
    /**
    * The category of the event, which is displayed in the 'Event type' column on the audit log in the Confluence UI.
    * @member {String} category
    */
    category = undefined;
    /**
    * Indicates whether the event was actioned by a system administrator.
    * @member {Boolean} sysAdmin
    * @default false
    */
    sysAdmin = false;
    /**
    * @member {module:model/AffectedObject} affectedObject
    */
    affectedObject = undefined;
    /**
    * The values that were changed in the event.
    * @member {Array.<module:model/ChangedValue>} changedValues
    */
    changedValues = undefined;
    /**
    * Objects that were associated with the event. For example, if the event was a space permission change then the associated object would be the space.
    * @member {Array.<module:model/AffectedObject>} associatedObjects
    */
    associatedObjects = undefined;




}