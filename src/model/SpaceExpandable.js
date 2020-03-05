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
* The SpaceExpandable model module.
* @module model/SpaceExpandable
* @version 1.0.0
*/
export default class SpaceExpandable {
    /**
    * Constructs a new <code>SpaceExpandable</code>.
    * @alias module:model/SpaceExpandable
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SpaceExpandable</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SpaceExpandable} obj Optional instance to populate.
    * @return {module:model/SpaceExpandable} The populated <code>SpaceExpandable</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpaceExpandable();
                        
            
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], 'String');
            }
            if (data.hasOwnProperty('lookAndFeel')) {
                obj['lookAndFeel'] = ApiClient.convertToType(data['lookAndFeel'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('theme')) {
                obj['theme'] = ApiClient.convertToType(data['theme'], 'String');
            }
            if (data.hasOwnProperty('history')) {
                obj['history'] = ApiClient.convertToType(data['history'], 'String');
            }
            if (data.hasOwnProperty('homepage')) {
                obj['homepage'] = ApiClient.convertToType(data['homepage'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} settings
    */
    settings = undefined;
    /**
    * @member {String} metadata
    */
    metadata = undefined;
    /**
    * @member {String} operations
    */
    operations = undefined;
    /**
    * @member {String} lookAndFeel
    */
    lookAndFeel = undefined;
    /**
    * @member {String} permissions
    */
    permissions = undefined;
    /**
    * @member {String} icon
    */
    icon = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} theme
    */
    theme = undefined;
    /**
    * @member {String} history
    */
    history = undefined;
    /**
    * @member {String} homepage
    */
    homepage = undefined;




}