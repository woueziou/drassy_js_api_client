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
 * The NewFinancialInfoModel model module.
 * @module model/NewFinancialInfoModel
 * @version 1.0.0
 */
class NewFinancialInfoModel {
    /**
     * Constructs a new <code>NewFinancialInfoModel</code>.
     * @alias module:model/NewFinancialInfoModel
     */
    constructor() { 
        
        NewFinancialInfoModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewFinancialInfoModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewFinancialInfoModel} obj Optional instance to populate.
     * @return {module:model/NewFinancialInfoModel} The populated <code>NewFinancialInfoModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewFinancialInfoModel();

            if (data.hasOwnProperty('financial_stituation_id')) {
                obj['financial_stituation_id'] = ApiClient.convertToType(data['financial_stituation_id'], 'String');
            }
            if (data.hasOwnProperty('profession')) {
                obj['profession'] = ApiClient.convertToType(data['profession'], 'String');
            }
            if (data.hasOwnProperty('business_lineId')) {
                obj['business_lineId'] = ApiClient.convertToType(data['business_lineId'], 'Number');
            }
            if (data.hasOwnProperty('total_person_at_charge')) {
                obj['total_person_at_charge'] = ApiClient.convertToType(data['total_person_at_charge'], 'Number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('monthly_revenue')) {
                obj['monthly_revenue'] = ApiClient.convertToType(data['monthly_revenue'], 'String');
            }
            if (data.hasOwnProperty('matrimonial_status')) {
                obj['matrimonial_status'] = ApiClient.convertToType(data['matrimonial_status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} financial_stituation_id
 */
NewFinancialInfoModel.prototype['financial_stituation_id'] = undefined;

/**
 * @member {String} profession
 */
NewFinancialInfoModel.prototype['profession'] = undefined;

/**
 * @member {Number} business_lineId
 */
NewFinancialInfoModel.prototype['business_lineId'] = undefined;

/**
 * @member {Number} total_person_at_charge
 */
NewFinancialInfoModel.prototype['total_person_at_charge'] = undefined;

/**
 * @member {Number} balance
 */
NewFinancialInfoModel.prototype['balance'] = undefined;

/**
 * @member {String} monthly_revenue
 */
NewFinancialInfoModel.prototype['monthly_revenue'] = undefined;

/**
 * @member {module:model/NewFinancialInfoModel.MatrimonialStatusEnum} matrimonial_status
 */
NewFinancialInfoModel.prototype['matrimonial_status'] = undefined;





/**
 * Allowed values for the <code>matrimonial_status</code> property.
 * @enum {String}
 * @readonly
 */
NewFinancialInfoModel['MatrimonialStatusEnum'] = {

    /**
     * value: "MARIE"
     * @const
     */
    "MARIE": "MARIE",

    /**
     * value: "CELIBATAIRE"
     * @const
     */
    "CELIBATAIRE": "CELIBATAIRE"
};



export default NewFinancialInfoModel;

