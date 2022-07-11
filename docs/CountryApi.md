# DrassybackendServerApiDoc.CountryApi

All URIs are relative to *http://localhost:2330*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCountryCreate**](CountryApi.md#postCountryCreate) | **POST** /country/create | Create a new country



## postCountryCreate

> CountryResponse postCountryCreate(opts)

Create a new country

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.CountryApi();
let opts = {
  'body': new DrassybackendServerApiDoc.CreateCountryModel() // CreateCountryModel | 
};
apiInstance.postCountryCreate(opts, (error, data, response) => {
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
 **body** | [**CreateCountryModel**](CreateCountryModel.md)|  | [optional] 

### Return type

[**CountryResponse**](CountryResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

