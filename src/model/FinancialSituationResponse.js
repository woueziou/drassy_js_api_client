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
 * The FinancialSituationResponse model module.
 * @module model/FinancialSituationResponse
 * @version 1.0.0
 */
class FinancialSituationResponse {
    /**
     * Constructs a new <code>FinancialSituationResponse</code>.
     * @alias module:model/FinancialSituationResponse
     */
    constructor() { 
        
        FinancialSituationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FinancialSituationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FinancialSituationResponse} obj Optional instance to populate.
     * @return {module:model/FinancialSituationResponse} The populated <code>FinancialSituationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinancialSituationResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
FinancialSituationResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
FinancialSituationResponse.prototype['name'] = undefined;






export default FinancialSituationResponse;

