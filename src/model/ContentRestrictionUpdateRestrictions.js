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
import ContentRestrictionUpdateRestrictionsGroup from './ContentRestrictionUpdateRestrictionsGroup';
import ContentRestrictionUpdateRestrictionsUser from './ContentRestrictionUpdateRestrictionsUser';

/**
* The ContentRestrictionUpdateRestrictions model module.
* @module model/ContentRestrictionUpdateRestrictions
* @version 1.0.0
*/
export default class ContentRestrictionUpdateRestrictions {
    /**
    * Constructs a new <code>ContentRestrictionUpdateRestrictions</code>.
    * The users/groups that the restrictions will be applied to. At least one of &#x60;user&#x60; or &#x60;group&#x60; must be specified for this object.
    * @alias module:model/ContentRestrictionUpdateRestrictions
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ContentRestrictionUpdateRestrictions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentRestrictionUpdateRestrictions} obj Optional instance to populate.
    * @return {module:model/ContentRestrictionUpdateRestrictions} The populated <code>ContentRestrictionUpdateRestrictions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentRestrictionUpdateRestrictions();
                        
            
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], [ContentRestrictionUpdateRestrictionsUser]);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], [ContentRestrictionUpdateRestrictionsGroup]);
            }
        }
        return obj;
    }

    /**
    * The users that the restrictions will be applied to. This array must have at least one item, otherwise it should be omitted.
    * @member {Array.<module:model/ContentRestrictionUpdateRestrictionsUser>} user
    */
    user = undefined;
    /**
    * The groups that the restrictions will be applied to. This array must have at least one item, otherwise it should be omitted.
    * @member {Array.<module:model/ContentRestrictionUpdateRestrictionsGroup>} group
    */
    group = undefined;




}
