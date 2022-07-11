# DrassybackendServerApiDoc.ParamsApi

All URIs are relative to *http://localhost:2330*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteParamsProfessionDeleteId**](ParamsApi.md#deleteParamsProfessionDeleteId) | **DELETE** /params/profession/delete/{id} | Create Revenue
[**deleteParamsRevenueDeleteId**](ParamsApi.md#deleteParamsRevenueDeleteId) | **DELETE** /params/revenue/delete/{id} | Create Revenue
[**deleteParamsWagesDeleteId**](ParamsApi.md#deleteParamsWagesDeleteId) | **DELETE** /params/wages/delete/{id} | Create wages
[**getParamsBusinesslineList**](ParamsApi.md#getParamsBusinesslineList) | **GET** /params/businessline/list | profession List 
[**getParamsFinancialsituation**](ParamsApi.md#getParamsFinancialsituation) | **GET** /params/financialsituation |  list Transaction Type
[**getParamsListcountries**](ParamsApi.md#getParamsListcountries) | **GET** /params/listcountries | Country List 
[**getParamsMatrimonials**](ParamsApi.md#getParamsMatrimonials) | **GET** /params/matrimonials | Matrimonials list
[**getParamsOperation**](ParamsApi.md#getParamsOperation) | **GET** /params/operation | Operation list
[**getParamsProfessionList**](ParamsApi.md#getParamsProfessionList) | **GET** /params/profession/list | profession List 
[**getParamsRevenueList**](ParamsApi.md#getParamsRevenueList) | **GET** /params/revenue/list | Revenu List 
[**getParamsTransactiontype**](ParamsApi.md#getParamsTransactiontype) | **GET** /params/transactiontype |  list Transaction Type
[**getParamsWagesList**](ParamsApi.md#getParamsWagesList) | **GET** /params/wages/list | Wages List 
[**postParamsBusinesslineNew**](ParamsApi.md#postParamsBusinesslineNew) | **POST** /params/businessline/new | Create profession
[**postParamsProfessionNew**](ParamsApi.md#postParamsProfessionNew) | **POST** /params/profession/new | Create profession
[**postParamsRevenueNew**](ParamsApi.md#postParamsRevenueNew) | **POST** /params/revenue/new | Create Revenue
[**postParamsWagesNew**](ParamsApi.md#postParamsWagesNew) | **POST** /params/wages/new | Create wages



## deleteParamsProfessionDeleteId

> String deleteParamsProfessionDeleteId(id)

Create Revenue

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
let id = 3.4; // Number | 
apiInstance.deleteParamsProfessionDeleteId(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteParamsRevenueDeleteId

> String deleteParamsRevenueDeleteId(id)

Create Revenue

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
let id = 3.4; // Number | 
apiInstance.deleteParamsRevenueDeleteId(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## deleteParamsWagesDeleteId

> String deleteParamsWagesDeleteId(id)

Create wages

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
let id = 3.4; // Number | 
apiInstance.deleteParamsWagesDeleteId(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getParamsBusinesslineList

> [BusinessLineResponse] getParamsBusinesslineList()

profession List 

Return profession list

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
apiInstance.getParamsBusinesslineList((error, data, response) => {
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

[**[BusinessLineResponse]**](BusinessLineResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getParamsFinancialsituation

> [String] getParamsFinancialsituation()

 list Transaction Type

Return Transaction Type list

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
apiInstance.getParamsFinancialsituation((error, data, response) => {
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

**[String]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getParamsListcountries

> [String] getParamsListcountries()

Country List 

Return Country list

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
apiInstance.getParamsListcountries((error, data, response) => {
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

**[String]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getParamsMatrimonials

> [String] getParamsMatrimonials()

Matrimonials list

Return operation list

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
apiInstance.getParamsMatrimonials((error, data, response) => {
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

**[String]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getParamsOperation

> [String] getParamsOperation()

Operation list

Return operation list

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
apiInstance.getParamsOperation((error, data, response) => {
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

**[String]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getParamsProfessionList

> String getParamsProfessionList()

profession List 

Return profession list

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
apiInstance.getParamsProfessionList((error, data, response) => {
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

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getParamsRevenueList

> String getParamsRevenueList()

Revenu List 

Return Revenue list

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
apiInstance.getParamsRevenueList((error, data, response) => {
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

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getParamsTransactiontype

> [String] getParamsTransactiontype()

 list Transaction Type

Return Transaction Type list

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
apiInstance.getParamsTransactiontype((error, data, response) => {
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

**[String]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getParamsWagesList

> [FinancialSituationResponse] getParamsWagesList()

Wages List 

Return Wages list

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
apiInstance.getParamsWagesList((error, data, response) => {
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

[**[FinancialSituationResponse]**](FinancialSituationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postParamsBusinesslineNew

> BusinessLineResponse postParamsBusinesslineNew(opts)

Create profession

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
let opts = {
  'body': new DrassybackendServerApiDoc.BusinessLineRequest() // BusinessLineRequest | 
};
apiInstance.postParamsBusinesslineNew(opts, (error, data, response) => {
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
 **body** | [**BusinessLineRequest**](BusinessLineRequest.md)|  | [optional] 

### Return type

[**BusinessLineResponse**](BusinessLineResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postParamsProfessionNew

> String postParamsProfessionNew(opts)

Create profession

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
let opts = {
  'body': new DrassybackendServerApiDoc.BusinessLineRequest() // BusinessLineRequest | 
};
apiInstance.postParamsProfessionNew(opts, (error, data, response) => {
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
 **body** | [**BusinessLineRequest**](BusinessLineRequest.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postParamsRevenueNew

> String postParamsRevenueNew(opts)

Create Revenue

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
let opts = {
  'body': new DrassybackendServerApiDoc.BusinessLineRequest() // BusinessLineRequest | 
};
apiInstance.postParamsRevenueNew(opts, (error, data, response) => {
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
 **body** | [**BusinessLineRequest**](BusinessLineRequest.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postParamsWagesNew

> String postParamsWagesNew(opts)

Create wages

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.ParamsApi();
let opts = {
  'body': new DrassybackendServerApiDoc.BusinessLineRequest() // BusinessLineRequest | 
};
apiInstance.postParamsWagesNew(opts, (error, data, response) => {
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
 **body** | [**BusinessLineRequest**](BusinessLineRequest.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

