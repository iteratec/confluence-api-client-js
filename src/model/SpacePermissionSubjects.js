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
import ContentRestrictionRestrictionsExpandable from './ContentRestrictionRestrictionsExpandable';
import SpacePermissionSubjectsGroup from './SpacePermissionSubjectsGroup';
import SpacePermissionSubjectsUser from './SpacePermissionSubjectsUser';

/**
* The SpacePermissionSubjects model module.
* @module model/SpacePermissionSubjects
* @version 1.0.0
*/
export default class SpacePermissionSubjects {
    /**
    * Constructs a new <code>SpacePermissionSubjects</code>.
    * The users and/or groups that the permission applies to.
    * @alias module:model/SpacePermissionSubjects
    * @class
    * @param expandable {module:model/ContentRestrictionRestrictionsExpandable} 
    */

    constructor(expandable) {
        
        
        this['_expandable'] = expandable;
        
    }

    /**
    * Constructs a <code>SpacePermissionSubjects</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SpacePermissionSubjects} obj Optional instance to populate.
    * @return {module:model/SpacePermissionSubjects} The populated <code>SpacePermissionSubjects</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpacePermissionSubjects();
                        
            
            if (data.hasOwnProperty('user')) {
                obj['user'] = SpacePermissionSubjectsUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = SpacePermissionSubjectsGroup.constructFromObject(data['group']);
            }
            if (data.hasOwnProperty('_expandable')) {
                obj['_expandable'] = ContentRestrictionRestrictionsExpandable.constructFromObject(data['_expandable']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/SpacePermissionSubjectsUser} user
    */
    user = undefined;
    /**
    * @member {module:model/SpacePermissionSubjectsGroup} group
    */
    group = undefined;
    /**
    * @member {module:model/ContentRestrictionRestrictionsExpandable} _expandable
    */
    _expandable = undefined;




}
