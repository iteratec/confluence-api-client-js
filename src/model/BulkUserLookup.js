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
import BulkUserLookupExpandable from './BulkUserLookupExpandable';
import GenericLinks from './GenericLinks';
import Icon from './Icon';
import OperationCheckResult from './OperationCheckResult';
import Space from './Space';
import UserDetails from './UserDetails';

/**
* The BulkUserLookup model module.
* @module model/BulkUserLookup
* @version 1.0.0
*/
export default class BulkUserLookup {
    /**
    * Constructs a new <code>BulkUserLookup</code>.
    * @alias module:model/BulkUserLookup
    * @class
    * @param type {module:model/BulkUserLookup.TypeEnum} 
    * @param accountId {String} The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
    * @param accountType {String} The account type of the user, may return empty string if unavailable.
    * @param email {String} The email address of the user. Depending on the user's privacy setting, this may return an empty string.
    * @param publicName {String} The public name or nickname of the user. Will always contain a value.
    * @param profilePicture {module:model/Icon} 
    * @param displayName {String} The display name of the user. Depending on the user's privacy setting, this may be the same as publicName.
    * @param expandable {module:model/BulkUserLookupExpandable} 
    * @param links {module:model/GenericLinks} 
    */

    constructor(type, accountId, accountType, email, publicName, profilePicture, displayName, expandable, links) {
        
        
        this['type'] = type;
        this['accountId'] = accountId;
        this['accountType'] = accountType;
        this['email'] = email;
        this['publicName'] = publicName;
        this['profilePicture'] = profilePicture;
        this['displayName'] = displayName;
        this['_expandable'] = expandable;
        this['_links'] = links;
        
    }

    /**
    * Constructs a <code>BulkUserLookup</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BulkUserLookup} obj Optional instance to populate.
    * @return {module:model/BulkUserLookup} The populated <code>BulkUserLookup</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkUserLookup();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('userKey')) {
                obj['userKey'] = ApiClient.convertToType(data['userKey'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('publicName')) {
                obj['publicName'] = ApiClient.convertToType(data['publicName'], 'String');
            }
            if (data.hasOwnProperty('profilePicture')) {
                obj['profilePicture'] = Icon.constructFromObject(data['profilePicture']);
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [OperationCheckResult]);
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = UserDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('personalSpace')) {
                obj['personalSpace'] = Space.constructFromObject(data['personalSpace']);
            }
            if (data.hasOwnProperty('_expandable')) {
                obj['_expandable'] = BulkUserLookupExpandable.constructFromObject(data['_expandable']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = GenericLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/BulkUserLookup.TypeEnum} type
    */
    type = undefined;
    /**
    * This property is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * @member {String} username
    */
    username = undefined;
    /**
    * This property is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
    * @member {String} userKey
    */
    userKey = undefined;
    /**
    * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
    * @member {String} accountId
    */
    accountId = undefined;
    /**
    * The account type of the user, may return empty string if unavailable.
    * @member {String} accountType
    */
    accountType = undefined;
    /**
    * The email address of the user. Depending on the user's privacy setting, this may return an empty string.
    * @member {String} email
    */
    email = undefined;
    /**
    * The public name or nickname of the user. Will always contain a value.
    * @member {String} publicName
    */
    publicName = undefined;
    /**
    * @member {module:model/Icon} profilePicture
    */
    profilePicture = undefined;
    /**
    * The display name of the user. Depending on the user's privacy setting, this may be the same as publicName.
    * @member {String} displayName
    */
    displayName = undefined;
    /**
    * @member {Array.<module:model/OperationCheckResult>} operations
    */
    operations = undefined;
    /**
    * @member {module:model/UserDetails} details
    */
    details = undefined;
    /**
    * @member {module:model/Space} personalSpace
    */
    personalSpace = undefined;
    /**
    * @member {module:model/BulkUserLookupExpandable} _expandable
    */
    _expandable = undefined;
    /**
    * @member {module:model/GenericLinks} _links
    */
    _links = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "known"
         * @const
         */
        "known": "known",
        /**
         * value: "unknown"
         * @const
         */
        "unknown": "unknown",
        /**
         * value: "anonymous"
         * @const
         */
        "anonymous": "anonymous",
        /**
         * value: "user"
         * @const
         */
        "user": "user"    };

}
