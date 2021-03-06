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
import TransactionType from './TransactionType';

/**
 * The FixedLoadResponse model module.
 * @module model/FixedLoadResponse
 * @version 1.0.0
 */
class FixedLoadResponse {
    /**
     * Constructs a new <code>FixedLoadResponse</code>.
     * @alias module:model/FixedLoadResponse
     */
    constructor() { 
        
        FixedLoadResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FixedLoadResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FixedLoadResponse} obj Optional instance to populate.
     * @return {module:model/FixedLoadResponse} The populated <code>FixedLoadResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FixedLoadResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('dateLoop')) {
                obj['dateLoop'] = ApiClient.convertToType(data['dateLoop'], 'Number');
            }
            if (data.hasOwnProperty('dateCreated')) {
                obj['dateCreated'] = ApiClient.convertToType(data['dateCreated'], 'Number');
            }
            if (data.hasOwnProperty('transaction_type')) {
                obj['transaction_type'] = TransactionType.constructFromObject(data['transaction_type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
FixedLoadResponse.prototype['id'] = undefined;

/**
 * @member {Number} amount
 */
FixedLoadResponse.prototype['amount'] = undefined;

/**
 * @member {Number} dateLoop
 */
FixedLoadResponse.prototype['dateLoop'] = undefined;

/**
 * @member {Number} dateCreated
 */
FixedLoadResponse.prototype['dateCreated'] = undefined;

/**
 * @member {module:model/TransactionType} transaction_type
 */
FixedLoadResponse.prototype['transaction_type'] = undefined;






export default FixedLoadResponse;

