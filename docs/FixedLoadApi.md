# DrassybackendServerApiDoc.FixedLoadApi

All URIs are relative to *http://localhost:2330*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFixedloadId**](FixedLoadApi.md#deleteFixedloadId) | **DELETE** /fixedload/{id} | Delete load
[**getFixedload**](FixedLoadApi.md#getFixedload) | **GET** /fixedload | User fixed Load list
[**postFixedloadCreate**](FixedLoadApi.md#postFixedloadCreate) | **POST** /fixedload/create | Create a fixed load



## deleteFixedloadId

> String deleteFixedloadId(id)

Delete load

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

let apiInstance = new DrassybackendServerApiDoc.FixedLoadApi();
let id = "id_example"; // String | 
apiInstance.deleteFixedloadId(id, (error, data, response) => {
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

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getFixedload

> [FixedLoadResponse] getFixedload()

User fixed Load list

List user fixed Load

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.FixedLoadApi();
apiInstance.getFixedload((error, data, response) => {
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

[**[FixedLoadResponse]**](FixedLoadResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postFixedloadCreate

> FixedLoadResponse postFixedloadCreate(opts)

Create a fixed load

Return fixed laod

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.FixedLoadApi();
let opts = {
  'body': new DrassybackendServerApiDoc.FixedLoadModelRequest() // FixedLoadModelRequest | 
};
apiInstance.postFixedloadCreate(opts, (error, data, response) => {
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
 **body** | [**FixedLoadModelRequest**](FixedLoadModelRequest.md)|  | [optional] 

### Return type

[**FixedLoadResponse**](FixedLoadResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

