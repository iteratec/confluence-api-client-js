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

/**
* The SpaceSettingsUpdate model module.
* @module model/SpaceSettingsUpdate
* @version 1.0.0
*/
export default class SpaceSettingsUpdate {
    /**
    * Constructs a new <code>SpaceSettingsUpdate</code>.
    * @alias module:model/SpaceSettingsUpdate
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SpaceSettingsUpdate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SpaceSettingsUpdate} obj Optional instance to populate.
    * @return {module:model/SpaceSettingsUpdate} The populated <code>SpaceSettingsUpdate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpaceSettingsUpdate();
                        
            
            if (data.hasOwnProperty('routeOverrideEnabled')) {
                obj['routeOverrideEnabled'] = ApiClient.convertToType(data['routeOverrideEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Defines whether an override for the space home should be used. This is used in conjunction with a space theme provided by an app. For example, if this property is set to true, a theme can display a page other than the space homepage when users visit the root URL for a space. This property allows apps to provide content-only theming without overriding the space home.
    * @member {Boolean} routeOverrideEnabled
    */
    routeOverrideEnabled = undefined;




}
