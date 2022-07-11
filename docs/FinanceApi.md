# DrassybackendServerApiDoc.FinanceApi

All URIs are relative to *http://localhost:2330*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFinancialProfile**](FinanceApi.md#getFinancialProfile) | **GET** /financial/profile | Get Client financial profile
[**patchFinancialUpdate**](FinanceApi.md#patchFinancialUpdate) | **PATCH** /financial/update | Update finance
[**postFinancialCreate**](FinanceApi.md#postFinancialCreate) | **POST** /financial/create | Create Finance



## getFinancialProfile

> FinancialInfoResponse getFinancialProfile()

Get Client financial profile

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.FinanceApi();
apiInstance.getFinancialProfile((error, data, response) => {
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

[**FinancialInfoResponse**](FinancialInfoResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## patchFinancialUpdate

> FinancialInfoResponse patchFinancialUpdate(opts)

Update finance

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.FinanceApi();
let opts = {
  'body': new DrassybackendServerApiDoc.FinancialInfoUpdateModel() // FinancialInfoUpdateModel | 
};
apiInstance.patchFinancialUpdate(opts, (error, data, response) => {
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
 **body** | [**FinancialInfoUpdateModel**](FinancialInfoUpdateModel.md)|  | [optional] 

### Return type

[**FinancialInfoResponse**](FinancialInfoResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postFinancialCreate

> FinancialInfoResponse postFinancialCreate(opts)

Create Finance

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.FinanceApi();
let opts = {
  'body': new DrassybackendServerApiDoc.NewFinancialInfoModel() // NewFinancialInfoModel | 
};
apiInstance.postFinancialCreate(opts, (error, data, response) => {
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
 **body** | [**NewFinancialInfoModel**](NewFinancialInfoModel.md)|  | [optional] 

### Return type

[**FinancialInfoResponse**](FinancialInfoResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

