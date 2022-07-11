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
 * The CreateCredentialsRequest model module.
 * @module model/CreateCredentialsRequest
 * @version 1.0.0
 */
class CreateCredentialsRequest {
    /**
     * Constructs a new <code>CreateCredentialsRequest</code>.
     * @alias module:model/CreateCredentialsRequest
     */
    constructor() { 
        
        CreateCredentialsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCredentialsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCredentialsRequest} obj Optional instance to populate.
     * @return {module:model/CreateCredentialsRequest} The populated <code>CreateCredentialsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCredentialsRequest();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} user_id
 */
CreateCredentialsRequest.prototype['user_id'] = undefined;

/**
 * @member {String} username
 */
CreateCredentialsRequest.prototype['username'] = undefined;

/**
 * @member {String} password
 */
CreateCredentialsRequest.prototype['password'] = undefined;






export default CreateCredentialsRequest;

