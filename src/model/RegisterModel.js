/**
 * DRASSYBACKEND Server api doc
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
 * The RegisterModel model module.
 * @module model/RegisterModel
 * @version 1.0.0
 */
class RegisterModel {
    /**
     * Constructs a new <code>RegisterModel</code>.
     * @alias module:model/RegisterModel
     */
    constructor() { 
        
        RegisterModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegisterModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterModel} obj Optional instance to populate.
     * @return {module:model/RegisterModel} The populated <code>RegisterModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterModel();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('country_id')) {
                obj['country_id'] = ApiClient.convertToType(data['country_id'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('sex')) {
                obj['sex'] = ApiClient.convertToType(data['sex'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
RegisterModel.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
RegisterModel.prototype['last_name'] = undefined;

/**
 * @member {String} phone
 */
RegisterModel.prototype['phone'] = undefined;

/**
 * @member {String} country_id
 */
RegisterModel.prototype['country_id'] = undefined;

/**
 * @member {String} email
 */
RegisterModel.prototype['email'] = undefined;

/**
 * @member {module:model/RegisterModel.SexEnum} sex
 */
RegisterModel.prototype['sex'] = undefined;





/**
 * Allowed values for the <code>sex</code> property.
 * @enum {String}
 * @readonly
 */
RegisterModel['SexEnum'] = {

    /**
     * value: "M"
     * @const
     */
    "M": "M",

    /**
     * value: "F"
     * @const
     */
    "F": "F"
};



export default RegisterModel;

