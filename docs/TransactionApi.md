# DrassybackendServerApiDoc.TransactionApi

All URIs are relative to *http://localhost:2330*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTransactionDeleteId**](TransactionApi.md#deleteTransactionDeleteId) | **DELETE** /transaction/delete/{id} | Delete a transaction
[**getTransactionDate**](TransactionApi.md#getTransactionDate) | **GET** /transaction/date | Get transactions of a date
[**getTransactionPeriod**](TransactionApi.md#getTransactionPeriod) | **GET** /transaction/period | Get transaction between two dates
[**getTransactionSearch**](TransactionApi.md#getTransactionSearch) | **GET** /transaction/search | Search transaction
[**postTransactionCreate**](TransactionApi.md#postTransactionCreate) | **POST** /transaction/create | Create Tansaction
[**putTransactionUpdate**](TransactionApi.md#putTransactionUpdate) | **PUT** /transaction/update | Modifiy Tansaction



## deleteTransactionDeleteId

> TransactionResponse deleteTransactionDeleteId(id)

Delete a transaction

Return String

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.TransactionApi();
let id = "id_example"; // String | 
apiInstance.deleteTransactionDeleteId(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getTransactionDate

> [TransactionResponse] getTransactionDate(opts)

Get transactions of a date

Return Transactions

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.TransactionApi();
let opts = {
  'date': 56 // Number | 
};
apiInstance.getTransactionDate(opts, (error, data, response) => {
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
 **date** | **Number**|  | [optional] 

### Return type

[**[TransactionResponse]**](TransactionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getTransactionPeriod

> [TransactionResponse] getTransactionPeriod(opts)

Get transaction between two dates

Return Transactions

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.TransactionApi();
let opts = {
  'start': 56, // Number | 
  'end': 56 // Number | 
};
apiInstance.getTransactionPeriod(opts, (error, data, response) => {
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
 **start** | **Number**|  | [optional] 
 **end** | **Number**|  | [optional] 

### Return type

[**[TransactionResponse]**](TransactionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getTransactionSearch

> [TransactionResponse] getTransactionSearch()

Search transaction

Return User info

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.TransactionApi();
apiInstance.getTransactionSearch((error, data, response) => {
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

[**[TransactionResponse]**](TransactionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postTransactionCreate

> TransactionResponse postTransactionCreate(opts)

Create Tansaction

Create Transaction

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.TransactionApi();
let opts = {
  'body': new DrassybackendServerApiDoc.CreateTransactionSchema() // CreateTransactionSchema | 
};
apiInstance.postTransactionCreate(opts, (error, data, response) => {
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
 **body** | [**CreateTransactionSchema**](CreateTransactionSchema.md)|  | [optional] 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## putTransactionUpdate

> String putTransactionUpdate(opts)

Modifiy Tansaction

Modify Transaction

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.TransactionApi();
let opts = {
  'body': new DrassybackendServerApiDoc.UpdateTransactionSchema() // UpdateTransactionSchema | 
};
apiInstance.putTransactionUpdate(opts, (error, data, response) => {
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
 **body** | [**UpdateTransactionSchema**](UpdateTransactionSchema.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

