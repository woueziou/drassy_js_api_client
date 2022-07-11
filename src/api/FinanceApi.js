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


import ApiClient from "../ApiClient";
import FinancialInfoResponse from '../model/FinancialInfoResponse';
import FinancialInfoUpdateModel from '../model/FinancialInfoUpdateModel';
import NewFinancialInfoModel from '../model/NewFinancialInfoModel';

/**
* Finance service.
* @module api/FinanceApi
* @version 1.0.0
*/
export default class FinanceApi {

    /**
    * Constructs a new FinanceApi. 
    * @alias module:api/FinanceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getFinancialProfile operation.
     * @callback module:api/FinanceApi~getFinancialProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FinancialInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Client financial profile
     * @param {module:api/FinanceApi~getFinancialProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FinancialInfoResponse}
     */
    getFinancialProfile(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = FinancialInfoResponse;
      return this.apiClient.callApi(
        '/financial/profile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchFinancialUpdate operation.
     * @callback module:api/FinanceApi~patchFinancialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FinancialInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update finance
     * @param {Object} opts Optional parameters
     * @param {module:model/FinancialInfoUpdateModel} opts.body 
     * @param {module:api/FinanceApi~patchFinancialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FinancialInfoResponse}
     */
    patchFinancialUpdate(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = FinancialInfoResponse;
      return this.apiClient.callApi(
        '/financial/update', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postFinancialCreate operation.
     * @callback module:api/FinanceApi~postFinancialCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FinancialInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Finance
     * @param {Object} opts Optional parameters
     * @param {module:model/NewFinancialInfoModel} opts.body 
     * @param {module:api/FinanceApi~postFinancialCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FinancialInfoResponse}
     */
    postFinancialCreate(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = FinancialInfoResponse;
      return this.apiClient.callApi(
        '/financial/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
