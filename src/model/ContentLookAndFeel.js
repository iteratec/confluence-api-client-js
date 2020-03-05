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
import ContainerLookAndFeel from './ContainerLookAndFeel';
import ScreenLookAndFeel from './ScreenLookAndFeel';

/**
* The ContentLookAndFeel model module.
* @module model/ContentLookAndFeel
* @version 1.0.0
*/
export default class ContentLookAndFeel {
    /**
    * Constructs a new <code>ContentLookAndFeel</code>.
    * @alias module:model/ContentLookAndFeel
    * @class
    * @param screen {module:model/ScreenLookAndFeel} 
    * @param container {module:model/ContainerLookAndFeel} 
    * @param header {module:model/ContainerLookAndFeel} 
    * @param body {module:model/ContainerLookAndFeel} 
    */

    constructor(screen, container, header, body) {
        
        
        this['screen'] = screen;
        this['container'] = container;
        this['header'] = header;
        this['body'] = body;
        
    }

    /**
    * Constructs a <code>ContentLookAndFeel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContentLookAndFeel} obj Optional instance to populate.
    * @return {module:model/ContentLookAndFeel} The populated <code>ContentLookAndFeel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentLookAndFeel();
                        
            
            if (data.hasOwnProperty('screen')) {
                obj['screen'] = ScreenLookAndFeel.constructFromObject(data['screen']);
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ContainerLookAndFeel.constructFromObject(data['container']);
            }
            if (data.hasOwnProperty('header')) {
                obj['header'] = ContainerLookAndFeel.constructFromObject(data['header']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ContainerLookAndFeel.constructFromObject(data['body']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ScreenLookAndFeel} screen
    */
    screen = undefined;
    /**
    * @member {module:model/ContainerLookAndFeel} container
    */
    container = undefined;
    /**
    * @member {module:model/ContainerLookAndFeel} header
    */
    header = undefined;
    /**
    * @member {module:model/ContainerLookAndFeel} body
    */
    body = undefined;




}
