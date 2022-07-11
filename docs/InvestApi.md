# Drassyapp.InvestApi

All URIs are relative to *http://localhost:2330*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvestList**](InvestApi.md#getInvestList) | **GET** /invest/list |  list invest option list
[**postInvestSubscribe**](InvestApi.md#postInvestSubscribe) | **POST** /invest/subscribe | Subscribe to invest



## getInvestList

> [InvestOptionResponse] getInvestList()

 list invest option list

Return invest option list

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.InvestApi();
apiInstance.getInvestList((error, data, response) => {
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

[**[InvestOptionResponse]**](InvestOptionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## postInvestSubscribe

> InvestSubscribeResponse postInvestSubscribe(opts)

Subscribe to invest

Return fixed laod

### Example

```javascript
import Drassyapp from 'drassyapp';
let defaultClient = Drassyapp.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Drassyapp.InvestApi();
let opts = {
  'body': new Drassyapp.InvestSubscribeModel() // InvestSubscribeModel | 
};
apiInstance.postInvestSubscribe(opts, (error, data, response) => {
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
 **body** | [**InvestSubscribeModel**](InvestSubscribeModel.md)|  | [optional] 

### Return type

[**InvestSubscribeResponse**](InvestSubscribeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

