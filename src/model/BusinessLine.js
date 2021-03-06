/**
 * DRASSYAPP
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: taasekpaye@outlook.fr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BusinessLine model module.
 * @module model/BusinessLine
 * @version 1.0.0
 */
class BusinessLine {
    /**
     * Constructs a new <code>BusinessLine</code>.
     * @alias module:model/BusinessLine
     */
    constructor() { 
        
        BusinessLine.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BusinessLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BusinessLine} obj Optional instance to populate.
     * @return {module:model/BusinessLine} The populated <code>BusinessLine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BusinessLine();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
BusinessLine.prototype['id'] = undefined;

/**
 * @member {String} name
 */
BusinessLine.prototype['name'] = undefined;






export default BusinessLine;

