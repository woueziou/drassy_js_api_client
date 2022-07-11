# Drassyapp.AuthApi

All URIs are relative to *http://localhost:2330*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthWhoami**](AuthApi.md#getAuthWhoami) | **GET** /auth/whoami | User Info
[**postAuthChangepassword**](AuthApi.md#postAuthChangepassword) | **POST** /auth/changepassword | User Info
[**postAuthCreateCredential**](AuthApi.md#postAuthCreateCredential) | **POST** /auth/create_credential | Create user credential
[**postAuthLogin**](AuthApi.md#postAuthLogin) | **POST** /auth/login | Login user
[**postAuthRegister**](AuthApi.md#postAuthRegister) | **POST** /auth/register | Create user
[**postAuthReinitpassword**](AuthApi.md#postAuthReinitpassword) | **POST** /auth/reinitpassword | User Info
[**postAuthRenew**](AuthApi.md#postAuthRenew) | **POST** /auth/renew | User Info
[**postAuthRequestpin**](AuthApi.md#postAuthRequestpin) | **POST** /auth/request-pin | User Info
[**postAuthVerifypin**](AuthApi.md#postAuthVerifypin) | **POST** /auth/verify-pin | User Info



## getAuthWhoami

> UserInfoResponse getAuthWhoami()

User Info

Return User info

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.AuthApi();
apiInstance.getAuthWhoami((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserInfoResponse**](UserInfoResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postAuthChangepassword

> String postAuthChangepassword(opts)

User Info

Return User info

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.AuthApi();
let opts = {
  'body': new Drassyapp.NewPasswordModel() // NewPasswordModel | 
};
apiInstance.postAuthChangepassword(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewPasswordModel**](NewPasswordModel.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postAuthCreateCredential

> String postAuthCreateCredential(opts)

Create user credential

Return String

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.AuthApi();
let opts = {
  'body': new Drassyapp.CreateCredentialsRequest() // CreateCredentialsRequest | 
};
apiInstance.postAuthCreateCredential(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateCredentialsRequest**](CreateCredentialsRequest.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postAuthLogin

> String postAuthLogin(opts)

Login user

Return String

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.AuthApi();
let opts = {
  'body': new Drassyapp.LoginModel() // LoginModel | 
};
apiInstance.postAuthLogin(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginModel**](LoginModel.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postAuthRegister

> RegisterResponse postAuthRegister(opts)

Create user

Return String

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.AuthApi();
let opts = {
  'body': new Drassyapp.RegisterModel() // RegisterModel | 
};
apiInstance.postAuthRegister(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegisterModel**](RegisterModel.md)|  | [optional] 

### Return type

[**RegisterResponse**](RegisterResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postAuthReinitpassword

> String postAuthReinitpassword(opts)

User Info

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.AuthApi();
let opts = {
  'body': new Drassyapp.RenewPasswordModel() // RenewPasswordModel | 
};
apiInstance.postAuthReinitpassword(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RenewPasswordModel**](RenewPasswordModel.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postAuthRenew

> String postAuthRenew(opts)

User Info

Return User info

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.AuthApi();
let opts = {
  'body': new Drassyapp.RenewToken() // RenewToken | 
};
apiInstance.postAuthRenew(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RenewToken**](RenewToken.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postAuthRequestpin

> String postAuthRequestpin(opts)

User Info

Return User info

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.AuthApi();
let opts = {
  'body': new Drassyapp.PinRequest() // PinRequest | 
};
apiInstance.postAuthRequestpin(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PinRequest**](PinRequest.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postAuthVerifypin

> String postAuthVerifypin(opts)

User Info

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.AuthApi();
let opts = {
  'body': new Drassyapp.VerifyPinModel() // VerifyPinModel | 
};
apiInstance.postAuthVerifypin(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**VerifyPinModel**](VerifyPinModel.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

