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
import ButtonLookAndFeel from './ButtonLookAndFeel';
import NavigationLookAndFeel from './NavigationLookAndFeel';
import SearchFieldLookAndFeel from './SearchFieldLookAndFeel';

/**
* The HeaderLookAndFeel model module.
* @module model/HeaderLookAndFeel
* @version 1.0.0
*/
export default class HeaderLookAndFeel {
    /**
    * Constructs a new <code>HeaderLookAndFeel</code>.
    * @alias module:model/HeaderLookAndFeel
    * @class
    * @param backgroundColor {String} 
    * @param button {module:model/ButtonLookAndFeel} 
    * @param primaryNavigation {module:model/NavigationLookAndFeel} 
    * @param secondaryNavigation {module:model/NavigationLookAndFeel} 
    * @param search {module:model/SearchFieldLookAndFeel} 
    */

    constructor(backgroundColor, button, primaryNavigation, secondaryNavigation, search) {
        
        
        this['backgroundColor'] = backgroundColor;
        this['button'] = button;
        this['primaryNavigation'] = primaryNavigation;
        this['secondaryNavigation'] = secondaryNavigation;
        this['search'] = search;
        
    }

    /**
    * Constructs a <code>HeaderLookAndFeel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/HeaderLookAndFeel} obj Optional instance to populate.
    * @return {module:model/HeaderLookAndFeel} The populated <code>HeaderLookAndFeel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HeaderLookAndFeel();
                        
            
            if (data.hasOwnProperty('backgroundColor')) {
                obj['backgroundColor'] = ApiClient.convertToType(data['backgroundColor'], 'String');
            }
            if (data.hasOwnProperty('button')) {
                obj['button'] = ButtonLookAndFeel.constructFromObject(data['button']);
            }
            if (data.hasOwnProperty('primaryNavigation')) {
                obj['primaryNavigation'] = NavigationLookAndFeel.constructFromObject(data['primaryNavigation']);
            }
            if (data.hasOwnProperty('secondaryNavigation')) {
                obj['secondaryNavigation'] = NavigationLookAndFeel.constructFromObject(data['secondaryNavigation']);
            }
            if (data.hasOwnProperty('search')) {
                obj['search'] = SearchFieldLookAndFeel.constructFromObject(data['search']);
            }
        }
        return obj;
    }

    /**
    * @member {String} backgroundColor
    */
    backgroundColor = undefined;
    /**
    * @member {module:model/ButtonLookAndFeel} button
    */
    button = undefined;
    /**
    * @member {module:model/NavigationLookAndFeel} primaryNavigation
    */
    primaryNavigation = undefined;
    /**
    * @member {module:model/NavigationLookAndFeel} secondaryNavigation
    */
    secondaryNavigation = undefined;
    /**
    * @member {module:model/SearchFieldLookAndFeel} search
    */
    search = undefined;




}
