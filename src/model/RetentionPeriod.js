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
* The RetentionPeriod model module.
* @module model/RetentionPeriod
* @version 1.0.0
*/
export default class RetentionPeriod {
    /**
    * Constructs a new <code>RetentionPeriod</code>.
    * @alias module:model/RetentionPeriod
    * @class
    * @param _number {Number} The number of units for the retention period.
    * @param units {module:model/RetentionPeriod.UnitsEnum} The unit of time that the retention period is measured in.
    */

    constructor(_number, units) {
        
        
        this['number'] = _number;
        this['units'] = units;
        
    }

    /**
    * Constructs a <code>RetentionPeriod</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RetentionPeriod} obj Optional instance to populate.
    * @return {module:model/RetentionPeriod} The populated <code>RetentionPeriod</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RetentionPeriod();
                        
            
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'String');
            }
        }
        return obj;
    }

    /**
    * The number of units for the retention period.
    * @member {Number} number
    */
    number = undefined;
    /**
    * The unit of time that the retention period is measured in.
    * @member {module:model/RetentionPeriod.UnitsEnum} units
    */
    units = undefined;



    /**
    * Allowed values for the <code>units</code> property.
    * @enum {String}
    * @readonly
    */
    static UnitsEnum = {
        /**
         * value: "NANOS"
         * @const
         */
        "NANOS": "NANOS",
        /**
         * value: "MICROS"
         * @const
         */
        "MICROS": "MICROS",
        /**
         * value: "MILLIS"
         * @const
         */
        "MILLIS": "MILLIS",
        /**
         * value: "SECONDS"
         * @const
         */
        "SECONDS": "SECONDS",
        /**
         * value: "MINUTES"
         * @const
         */
        "MINUTES": "MINUTES",
        /**
         * value: "HOURS"
         * @const
         */
        "HOURS": "HOURS",
        /**
         * value: "HALF_DAYS"
         * @const
         */
        "HALF_DAYS": "HALF_DAYS",
        /**
         * value: "DAYS"
         * @const
         */
        "DAYS": "DAYS",
        /**
         * value: "WEEKS"
         * @const
         */
        "WEEKS": "WEEKS",
        /**
         * value: "MONTHS"
         * @const
         */
        "MONTHS": "MONTHS",
        /**
         * value: "YEARS"
         * @const
         */
        "YEARS": "YEARS",
        /**
         * value: "DECADES"
         * @const
         */
        "DECADES": "DECADES",
        /**
         * value: "CENTURIES"
         * @const
         */
        "CENTURIES": "CENTURIES",
        /**
         * value: "MILLENNIA"
         * @const
         */
        "MILLENNIA": "MILLENNIA",
        /**
         * value: "ERAS"
         * @const
         */
        "ERAS": "ERAS",
        /**
         * value: "FOREVER"
         * @const
         */
        "FOREVER": "FOREVER"    };

}
