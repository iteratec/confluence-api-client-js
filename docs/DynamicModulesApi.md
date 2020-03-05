# TheConfluenceCloudRestApi.DynamicModulesApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dynamicModulesResourceGetModulesGet**](DynamicModulesApi.md#dynamicModulesResourceGetModulesGet) | **GET** /atlassian-connect/1/app/module/dynamic | Get modules
[**dynamicModulesResourceRegisterModulesPost**](DynamicModulesApi.md#dynamicModulesResourceRegisterModulesPost) | **POST** /atlassian-connect/1/app/module/dynamic | Register modules
[**dynamicModulesResourceRemoveModulesDelete**](DynamicModulesApi.md#dynamicModulesResourceRemoveModulesDelete) | **DELETE** /atlassian-connect/1/app/module/dynamic | Remove modules

<a name="dynamicModulesResourceGetModulesGet"></a>
# **dynamicModulesResourceGetModulesGet**
> ConnectModules dynamicModulesResourceGetModulesGet()

Get modules

Returns all modules registered dynamically by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.DynamicModulesApi();
apiInstance.dynamicModulesResourceGetModulesGet((error, data, response) => {
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

[**ConnectModules**](ConnectModules.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, message

<a name="dynamicModulesResourceRegisterModulesPost"></a>
# **dynamicModulesResourceRegisterModulesPost**
> dynamicModulesResourceRegisterModulesPost(body)

Register modules

Registers a list of modules. For the list of modules that support dynamic registration, see [Dynamic modules](https://developer.atlassian.com/cloud/confluence/dynamic-modules/).  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.DynamicModulesApi();
let body = null; // {String: [ConnectModule]} | 

apiInstance.dynamicModulesResourceRegisterModulesPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: [ConnectModule]}**](Object.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, message

<a name="dynamicModulesResourceRemoveModulesDelete"></a>
# **dynamicModulesResourceRemoveModulesDelete**
> dynamicModulesResourceRemoveModulesDelete(opts)

Remove modules

Remove all or a list of modules registered by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.DynamicModulesApi();
let opts = { 
  'moduleKey': ["moduleKey_example"] // [String] | The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`. Nonexistent keys are ignored.
};
apiInstance.dynamicModulesResourceRemoveModulesDelete(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moduleKey** | [**[String]**](String.md)| The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, &#x60;moduleKey&#x3D;dynamic-attachment-entity-property&amp;moduleKey&#x3D;dynamic-select-field&#x60;. Nonexistent keys are ignored. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, message

