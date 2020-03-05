# TheConfluenceCloudRestApi.TemplateApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesTemplateResourceCreateContentTemplatePost**](TemplateApi.md#comAtlassianConfluencePluginsRestapiResourcesTemplateResourceCreateContentTemplatePost) | **POST** /api/template | Create content template
[**comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetBlueprintTemplatesGet**](TemplateApi.md#comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetBlueprintTemplatesGet) | **GET** /api/template/blueprint | Get blueprint templates
[**comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplateGet**](TemplateApi.md#comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplateGet) | **GET** /api/template/{contentTemplateId} | Get content template
[**comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplatesGet**](TemplateApi.md#comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplatesGet) | **GET** /api/template/page | Get content templates
[**comAtlassianConfluencePluginsRestapiResourcesTemplateResourceRemoveTemplateDelete**](TemplateApi.md#comAtlassianConfluencePluginsRestapiResourcesTemplateResourceRemoveTemplateDelete) | **DELETE** /api/template/{contentTemplateId} | Remove template
[**comAtlassianConfluencePluginsRestapiResourcesTemplateResourceUpdateContentTemplatePut**](TemplateApi.md#comAtlassianConfluencePluginsRestapiResourcesTemplateResourceUpdateContentTemplatePut) | **PUT** /api/template | Update content template

<a name="comAtlassianConfluencePluginsRestapiResourcesTemplateResourceCreateContentTemplatePost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesTemplateResourceCreateContentTemplatePost**
> ContentTemplate comAtlassianConfluencePluginsRestapiResourcesTemplateResourceCreateContentTemplatePost(body)

Create content template

Creates a new content template. Note, blueprint templates cannot be created via the REST API.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space to create a space template or &#x27;Confluence Administrator&#x27; global permission to create a global template.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.TemplateApi();
let body = new TheConfluenceCloudRestApi.ContentTemplateCreate(); // ContentTemplateCreate | The content template to be created.
The content body must be in 'storage' format.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesTemplateResourceCreateContentTemplatePost(body, (error, data, response) => {
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
 **body** | [**ContentTemplateCreate**](ContentTemplateCreate.md)| The content template to be created.
The content body must be in &#x27;storage&#x27; format. | 

### Return type

[**ContentTemplate**](ContentTemplate.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetBlueprintTemplatesGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetBlueprintTemplatesGet**
> BlueprintTemplateArray comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetBlueprintTemplatesGet(opts)

Get blueprint templates

Returns all templates provided by blueprints. Use this method to retrieve all global blueprint templates or all blueprint templates in a space.  Note, all global blueprints are inherited by each space. Space blueprints can be customised without affecting the global blueprints.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.TemplateApi();
let opts = { 
  'spaceKey': "spaceKey_example", // String | The key of the space to be queried for templates. If the `spaceKey` is not specified, global blueprint templates will be returned.
  'start': 56, // Number | The starting index of the returned templates.
  'limit': 56, // Number | The maximum number of templates to return per page. Note, this may be restricted by fixed system limits.
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the template to expand.  - `body` returns the content of the template in storage format.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetBlueprintTemplatesGet(opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to be queried for templates. If the &#x60;spaceKey&#x60; is not specified, global blueprint templates will be returned. | [optional] 
 **start** | **Number**| The starting index of the returned templates. | [optional] 
 **limit** | **Number**| The maximum number of templates to return per page. Note, this may be restricted by fixed system limits. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the template to expand.  - &#x60;body&#x60; returns the content of the template in storage format. | [optional] 

### Return type

[**BlueprintTemplateArray**](BlueprintTemplateArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplateGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplateGet**
> ContentTemplate comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplateGet(contentTemplateId)

Get content template

Returns a content template. This includes information about template, like the name, the space or blueprint that the template is in, the body of the template, and more.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space to view space templates and &#x27;Confluence Administrator&#x27; global permission to view global templates.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.TemplateApi();
let contentTemplateId = "contentTemplateId_example"; // String | The ID of the content template to be returned.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplateGet(contentTemplateId, (error, data, response) => {
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
 **contentTemplateId** | **String**| The ID of the content template to be returned. | 

### Return type

[**ContentTemplate**](ContentTemplate.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplatesGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplatesGet**
> ContentTemplateArray comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplatesGet(opts)

Get content templates

Returns all content templates. Use this method to retrieve all global content templates or all content templates in a space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space to view space templates and &#x27;Confluence Administrator&#x27; global permission to view global templates.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.TemplateApi();
let opts = { 
  'spaceKey': "spaceKey_example", // String | The key of the space to be queried for templates. If the `spaceKey` is not specified, global templates will be returned.
  'start': 56, // Number | The starting index of the returned templates.
  'limit': 56, // Number | The maximum number of templates to return per page. Note, this may be restricted by fixed system limits.
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the template to expand.  - `body` returns the content of the template in storage format.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesTemplateResourceGetContentTemplatesGet(opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to be queried for templates. If the &#x60;spaceKey&#x60; is not specified, global templates will be returned. | [optional] 
 **start** | **Number**| The starting index of the returned templates. | [optional] 
 **limit** | **Number**| The maximum number of templates to return per page. Note, this may be restricted by fixed system limits. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the template to expand.  - &#x60;body&#x60; returns the content of the template in storage format. | [optional] 

### Return type

[**ContentTemplateArray**](ContentTemplateArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesTemplateResourceRemoveTemplateDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesTemplateResourceRemoveTemplateDelete**
> comAtlassianConfluencePluginsRestapiResourcesTemplateResourceRemoveTemplateDelete(contentTemplateId)

Remove template

Deletes a template. This results in different actions depending on the type of template:  - If the template is a content template, it is deleted. - If the template is a modified space-level blueprint template, it reverts to the template inherited from the global-level blueprint template. - If the template is a modified global-level blueprint template, it reverts to the default global-level blueprint template.   Note, unmodified blueprint templates cannot be deleted.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.TemplateApi();
let contentTemplateId = "contentTemplateId_example"; // String | The ID of the template to be deleted.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesTemplateResourceRemoveTemplateDelete(contentTemplateId, (error, data, response) => {
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
 **contentTemplateId** | **String**| The ID of the template to be deleted. | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesTemplateResourceUpdateContentTemplatePut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesTemplateResourceUpdateContentTemplatePut**
> ContentTemplate comAtlassianConfluencePluginsRestapiResourcesTemplateResourceUpdateContentTemplatePut(body)

Update content template

Updates a content template. Note, blueprint templates cannot be updated via the REST API.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space to create a space template or &#x27;Confluence Administrator&#x27; global permission to create a global template.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.TemplateApi();
let body = new TheConfluenceCloudRestApi.ContentTemplateUpdate(); // ContentTemplateUpdate | The updated content template.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesTemplateResourceUpdateContentTemplatePut(body, (error, data, response) => {
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
 **body** | [**ContentTemplateUpdate**](ContentTemplateUpdate.md)| The updated content template. | 

### Return type

[**ContentTemplate**](ContentTemplate.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

