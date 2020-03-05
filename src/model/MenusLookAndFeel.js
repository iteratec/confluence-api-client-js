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
import MenusLookAndFeelHoverOrFocus from './MenusLookAndFeelHoverOrFocus';

/**
* The MenusLookAndFeel model module.
* @module model/MenusLookAndFeel
* @version 1.0.0
*/
export default class MenusLookAndFeel {
    /**
    * Constructs a new <code>MenusLookAndFeel</code>.
    * @alias module:model/MenusLookAndFeel
    * @class
    * @param hoverOrFocus {module:model/MenusLookAndFeelHoverOrFocus} 
    * @param color {String} 
    */

    constructor(hoverOrFocus, color) {
        
        
        this['hoverOrFocus'] = hoverOrFocus;
        this['color'] = color;
        
    }

    /**
    * Constructs a <code>MenusLookAndFeel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MenusLookAndFeel} obj Optional instance to populate.
    * @return {module:model/MenusLookAndFeel} The populated <code>MenusLookAndFeel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MenusLookAndFeel();
                        
            
            if (data.hasOwnProperty('hoverOrFocus')) {
                obj['hoverOrFocus'] = MenusLookAndFeelHoverOrFocus.constructFromObject(data['hoverOrFocus']);
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/MenusLookAndFeelHoverOrFocus} hoverOrFocus
    */
    hoverOrFocus = undefined;
    /**
    * @member {String} color
    */
    color = undefined;




}
