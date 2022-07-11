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


import ApiClient from "../ApiClient";
import CreateCredentialsRequest from '../model/CreateCredentialsRequest';
import LoginModel from '../model/LoginModel';
import NewPasswordModel from '../model/NewPasswordModel';
import PinRequest from '../model/PinRequest';
import RegisterModel from '../model/RegisterModel';
import RegisterResponse from '../model/RegisterResponse';
import RenewPasswordModel from '../model/RenewPasswordModel';
import RenewToken from '../model/RenewToken';
import UserInfoResponse from '../model/UserInfoResponse';
import VerifyPinModel from '../model/VerifyPinModel';

/**
* Auth service.
* @module api/AuthApi
* @version 1.0.0
*/
export default class AuthApi {

    /**
    * Constructs a new AuthApi. 
    * @alias module:api/AuthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAuthWhoami operation.
     * @callback module:api/AuthApi~getAuthWhoamiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Info
     * Return User info
     * @param {module:api/AuthApi~getAuthWhoamiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInfoResponse}
     */
    getAuthWhoami(callback) {
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
      let returnType = UserInfoResponse;
      return this.apiClient.callApi(
        '/auth/whoami', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAuthChangepassword operation.
     * @callback module:api/AuthApi~postAuthChangepasswordCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Info
     * Return User info
     * @param {Object} opts Optional parameters
     * @param {module:model/NewPasswordModel} opts.body 
     * @param {module:api/AuthApi~postAuthChangepasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postAuthChangepassword(opts, callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/auth/changepassword', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAuthCreateCredential operation.
     * @callback module:api/AuthApi~postAuthCreateCredentialCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create user credential
     * Return String
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCredentialsRequest} opts.body 
     * @param {module:api/AuthApi~postAuthCreateCredentialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postAuthCreateCredential(opts, callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/auth/create_credential', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAuthLogin operation.
     * @callback module:api/AuthApi~postAuthLoginCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login user
     * Return String
     * @param {Object} opts Optional parameters
     * @param {module:model/LoginModel} opts.body 
     * @param {module:api/AuthApi~postAuthLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postAuthLogin(opts, callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAuthRegister operation.
     * @callback module:api/AuthApi~postAuthRegisterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegisterResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create user
     * Return String
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterModel} opts.body 
     * @param {module:api/AuthApi~postAuthRegisterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RegisterResponse}
     */
    postAuthRegister(opts, callback) {
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
      let returnType = RegisterResponse;
      return this.apiClient.callApi(
        '/auth/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAuthReinitpassword operation.
     * @callback module:api/AuthApi~postAuthReinitpasswordCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Info
     * @param {Object} opts Optional parameters
     * @param {module:model/RenewPasswordModel} opts.body 
     * @param {module:api/AuthApi~postAuthReinitpasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postAuthReinitpassword(opts, callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/auth/reinitpassword', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAuthRenew operation.
     * @callback module:api/AuthApi~postAuthRenewCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Info
     * Return User info
     * @param {Object} opts Optional parameters
     * @param {module:model/RenewToken} opts.body 
     * @param {module:api/AuthApi~postAuthRenewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postAuthRenew(opts, callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/auth/renew', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAuthRequestpin operation.
     * @callback module:api/AuthApi~postAuthRequestpinCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Info
     * Return User info
     * @param {Object} opts Optional parameters
     * @param {module:model/PinRequest} opts.body 
     * @param {module:api/AuthApi~postAuthRequestpinCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postAuthRequestpin(opts, callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/auth/request-pin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postAuthVerifypin operation.
     * @callback module:api/AuthApi~postAuthVerifypinCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Info
     * @param {Object} opts Optional parameters
     * @param {module:model/VerifyPinModel} opts.body 
     * @param {module:api/AuthApi~postAuthVerifypinCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    postAuthVerifypin(opts, callback) {
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/auth/verify-pin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
