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
 * The RenewToken model module.
 * @module model/RenewToken
 * @version 1.0.0
 */
class RenewToken {
    /**
     * Constructs a new <code>RenewToken</code>.
     * @alias module:model/RenewToken
     */
    constructor() { 
        
        RenewToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewToken} obj Optional instance to populate.
     * @return {module:model/RenewToken} The populated <code>RenewToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewToken();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
RenewToken.prototype['token'] = undefined;






export default RenewToken;

