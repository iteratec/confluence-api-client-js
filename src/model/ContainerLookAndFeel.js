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
* The ContainerLookAndFeel model module.
* @module model/ContainerLookAndFeel
* @version 1.0.0
*/
export default class ContainerLookAndFeel {
    /**
    * Constructs a new <code>ContainerLookAndFeel</code>.
    * @alias module:model/ContainerLookAndFeel
    * @class
    * @param background {String} 
    * @param backgroundColor {String} 
    * @param backgroundImage {String} 
    * @param backgroundSize {String} 
    * @param padding {String} 
    * @param borderRadius {String} 
    */

    constructor(background, backgroundColor, backgroundImage, backgroundSize, padding, borderRadius) {
        
        
        this['background'] = background;
        this['backgroundColor'] = backgroundColor;
        this['backgroundImage'] = backgroundImage;
        this['backgroundSize'] = backgroundSize;
        this['padding'] = padding;
        this['borderRadius'] = borderRadius;
        
    }

    /**
    * Constructs a <code>ContainerLookAndFeel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContainerLookAndFeel} obj Optional instance to populate.
    * @return {module:model/ContainerLookAndFeel} The populated <code>ContainerLookAndFeel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerLookAndFeel();
                        
            
            if (data.hasOwnProperty('background')) {
                obj['background'] = ApiClient.convertToType(data['background'], 'String');
            }
            if (data.hasOwnProperty('backgroundColor')) {
                obj['backgroundColor'] = ApiClient.convertToType(data['backgroundColor'], 'String');
            }
            if (data.hasOwnProperty('backgroundImage')) {
                obj['backgroundImage'] = ApiClient.convertToType(data['backgroundImage'], 'String');
            }
            if (data.hasOwnProperty('backgroundSize')) {
                obj['backgroundSize'] = ApiClient.convertToType(data['backgroundSize'], 'String');
            }
            if (data.hasOwnProperty('padding')) {
                obj['padding'] = ApiClient.convertToType(data['padding'], 'String');
            }
            if (data.hasOwnProperty('borderRadius')) {
                obj['borderRadius'] = ApiClient.convertToType(data['borderRadius'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} background
    */
    background = undefined;
    /**
    * @member {String} backgroundColor
    */
    backgroundColor = undefined;
    /**
    * @member {String} backgroundImage
    */
    backgroundImage = undefined;
    /**
    * @member {String} backgroundSize
    */
    backgroundSize = undefined;
    /**
    * @member {String} padding
    */
    padding = undefined;
    /**
    * @member {String} borderRadius
    */
    borderRadius = undefined;




}
