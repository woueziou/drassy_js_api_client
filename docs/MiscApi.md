# DrassybackendServerApiDoc.MiscApi

All URIs are relative to *http://localhost:2330*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postMiscPhone**](MiscApi.md#postMiscPhone) | **POST** /misc/phone | Auth Phone Device



## postMiscPhone

> String postMiscPhone(opts)

Auth Phone Device

### Example

```javascript
import DrassybackendServerApiDoc from 'drassybackend_server_api_doc';
let defaultClient = DrassybackendServerApiDoc.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new DrassybackendServerApiDoc.MiscApi();
let opts = {
  'body': new DrassybackendServerApiDoc.PhoneVerificationModel() // PhoneVerificationModel | 
};
apiInstance.postMiscPhone(opts, (error, data, response) => {
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
 **body** | [**PhoneVerificationModel**](PhoneVerificationModel.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

