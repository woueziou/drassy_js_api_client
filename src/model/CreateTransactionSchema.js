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
 * The CreateTransactionSchema model module.
 * @module model/CreateTransactionSchema
 * @version 1.0.0
 */
class CreateTransactionSchema {
    /**
     * Constructs a new <code>CreateTransactionSchema</code>.
     * @alias module:model/CreateTransactionSchema
     */
    constructor() { 
        
        CreateTransactionSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateTransactionSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransactionSchema} obj Optional instance to populate.
     * @return {module:model/CreateTransactionSchema} The populated <code>CreateTransactionSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTransactionSchema();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('type_transaction_id')) {
                obj['type_transaction_id'] = ApiClient.convertToType(data['type_transaction_id'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} amount
 */
CreateTransactionSchema.prototype['amount'] = undefined;

/**
 * @member {String} type_transaction_id
 */
CreateTransactionSchema.prototype['type_transaction_id'] = undefined;

/**
 * @member {String} note
 */
CreateTransactionSchema.prototype['note'] = undefined;






export default CreateTransactionSchema;

