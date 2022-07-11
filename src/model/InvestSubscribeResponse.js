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
import InvestOptionResponse from './InvestOptionResponse';

/**
 * The InvestSubscribeResponse model module.
 * @module model/InvestSubscribeResponse
 * @version 1.0.0
 */
class InvestSubscribeResponse {
    /**
     * Constructs a new <code>InvestSubscribeResponse</code>.
     * @alias module:model/InvestSubscribeResponse
     */
    constructor() { 
        
        InvestSubscribeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvestSubscribeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvestSubscribeResponse} obj Optional instance to populate.
     * @return {module:model/InvestSubscribeResponse} The populated <code>InvestSubscribeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestSubscribeResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('investment')) {
                obj['investment'] = InvestOptionResponse.constructFromObject(data['investment']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InvestSubscribeResponse.prototype['id'] = undefined;

/**
 * @member {String} comment
 */
InvestSubscribeResponse.prototype['comment'] = undefined;

/**
 * @member {module:model/InvestOptionResponse} investment
 */
InvestSubscribeResponse.prototype['investment'] = undefined;






export default InvestSubscribeResponse;

