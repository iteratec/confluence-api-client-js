# TheConfluenceCloudRestApi.SpaceApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyForKeyPost**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyForKeyPost) | **POST** /api/space/{spaceKey}/property/{key} | Create space property for key
[**comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyPost**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyPost) | **POST** /api/space/{spaceKey}/property | Create space property
[**comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceDeleteSpacePropertyDelete**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceDeleteSpacePropertyDelete) | **DELETE** /api/space/{spaceKey}/property/{key} | Delete space property
[**comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertiesGet**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertiesGet) | **GET** /api/space/{spaceKey}/property | Get space properties
[**comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertyGet**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertyGet) | **GET** /api/space/{spaceKey}/property/{key} | Get space property
[**comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceUpdateSpacePropertyPut**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceUpdateSpacePropertyPut) | **PUT** /api/space/{spaceKey}/property/{key} | Update space property
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreatePrivateSpacePost**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreatePrivateSpacePost) | **POST** /api/space/_private | Create private space
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreateSpacePost**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreateSpacePost) | **POST** /api/space | Create space
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceDeleteSpaceDelete**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceDeleteSpaceDelete) | **DELETE** /api/space/{spaceKey} | Delete space
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentByTypeForSpaceGet**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentByTypeForSpaceGet) | **GET** /api/space/{spaceKey}/content/{type} | Get content by type for space
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentForSpaceGet**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentForSpaceGet) | **GET** /api/space/{spaceKey}/content | Get content for space
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceGet**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceGet) | **GET** /api/space/{spaceKey} | Get space
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceSettingsGet**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceSettingsGet) | **GET** /api/space/{spaceKey}/settings | Get space settings
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpacesGet**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpacesGet) | **GET** /api/space | Get spaces
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetWatchersForSpaceGet**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetWatchersForSpaceGet) | **GET** /api/space/{spaceKey}/watch | Returns a list of watchers of a space
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpacePut**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpacePut) | **PUT** /api/space/{spaceKey} | Update space
[**comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpaceSettingsPut**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpaceSettingsPut) | **PUT** /api/space/{spaceKey}/settings | Update space settings
[**comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceGetSpaceThemeGet**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceGetSpaceThemeGet) | **GET** /api/space/{spaceKey}/theme | Get space theme
[**comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceResetSpaceThemeDelete**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceResetSpaceThemeDelete) | **DELETE** /api/space/{spaceKey}/theme | Reset space theme
[**comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceSetSpaceThemePut**](SpaceApi.md#comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceSetSpaceThemePut) | **PUT** /api/space/{spaceKey}/theme | Set space theme

<a name="comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyForKeyPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyForKeyPost**
> SpaceProperty comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyForKeyPost(bodyspaceKeykey)

Create space property for key

Creates a new space property. This is the same as &#x60;POST /api/space/{spaceKey}/property&#x60; but the key for the property is passed as a path parameter, rather than in the request body.  **[Permissions required](https://confluence.atlassian.com/x/_AozKw)**: ‘Admin’ permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let body = new TheConfluenceCloudRestApi.SpacePropertyCreateNoKey(); // SpacePropertyCreateNoKey | The space property to be created.
let spaceKey = "spaceKey_example"; // String | The key of the space that the property will be created in.
let key = "key_example"; // String | The key of the property to be created.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyForKeyPost(bodyspaceKeykey, (error, data, response) => {
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
 **body** | [**SpacePropertyCreateNoKey**](SpacePropertyCreateNoKey.md)| The space property to be created. | 
 **spaceKey** | **String**| The key of the space that the property will be created in. | 
 **key** | **String**| The key of the property to be created. | 

### Return type

[**SpaceProperty**](SpaceProperty.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyPost**
> SpaceProperty comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyPost(bodyspaceKey)

Create space property

Creates a new space property.  **[Permissions required](https://confluence.atlassian.com/x/_AozKw)**: ‘Admin’ permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let body = new TheConfluenceCloudRestApi.SpacePropertyCreate(); // SpacePropertyCreate | The space property to be created.
let spaceKey = "spaceKey_example"; // String | The key of the space that the property will be created in.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceCreateSpacePropertyPost(bodyspaceKey, (error, data, response) => {
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
 **body** | [**SpacePropertyCreate**](SpacePropertyCreate.md)| The space property to be created. | 
 **spaceKey** | **String**| The key of the space that the property will be created in. | 

### Return type

[**SpaceProperty**](SpaceProperty.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceDeleteSpacePropertyDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceDeleteSpacePropertyDelete**
> comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceDeleteSpacePropertyDelete(spaceKey, key)

Delete space property

Deletes a space property.  **[Permissions required](https://confluence.atlassian.com/x/_AozKw)**: ‘Admin’ permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space that the property is in.
let key = "key_example"; // String | The key of the property to be deleted.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceDeleteSpacePropertyDelete(spaceKey, key, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space that the property is in. | 
 **key** | **String**| The key of the property to be deleted. | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertiesGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertiesGet**
> SpacePropertyArray comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertiesGet(spaceKey, opts)

Get space properties

Returns all properties for the given space. Space properties are a key-value storage associated with a space.  **[Permissions required](https://confluence.atlassian.com/x/_AozKw)**: ‘View’ permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to be queried for its properties.
let opts = { 
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the space property to expand. By default, the `version` object is expanded.  - `version` returns information about the version of the content. - `space` returns the space that the properties are in.
  'start': 56, // Number | The starting index of the returned objects.
  'limit': 56 // Number | The maximum number of properties to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertiesGet(spaceKey, opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to be queried for its properties. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the space property to expand. By default, the &#x60;version&#x60; object is expanded.  - &#x60;version&#x60; returns information about the version of the content. - &#x60;space&#x60; returns the space that the properties are in. | [optional] 
 **start** | **Number**| The starting index of the returned objects. | [optional] 
 **limit** | **Number**| The maximum number of properties to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**SpacePropertyArray**](SpacePropertyArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertyGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertyGet**
> SpaceProperty comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertyGet(spaceKey, key, opts)

Get space property

Returns a space property.  **[Permissions required](https://confluence.atlassian.com/x/_AozKw)**: ‘View’ permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space that the property is in.
let key = "key_example"; // String | The key of the space property.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the space property to expand. By default, the `version` object is expanded.  - `version` returns information about the version of the content. - `space` returns the space that the properties are in.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceGetSpacePropertyGet(spaceKey, key, opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space that the property is in. | 
 **key** | **String**| The key of the space property. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the space property to expand. By default, the &#x60;version&#x60; object is expanded.  - &#x60;version&#x60; returns information about the version of the content. - &#x60;space&#x60; returns the space that the properties are in. | [optional] 

### Return type

[**SpaceProperty**](SpaceProperty.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceUpdateSpacePropertyPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceUpdateSpacePropertyPut**
> SpaceProperty comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceUpdateSpacePropertyPut(bodyspaceKeykey)

Update space property

Updates a space property. Note, you cannot update the key of a space property, only the value.  **[Permissions required](https://confluence.atlassian.com/x/_AozKw)**: ‘Admin’ permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let body = new TheConfluenceCloudRestApi.SpacePropertyUpdate(); // SpacePropertyUpdate | The space property being updated.
let spaceKey = "spaceKey_example"; // String | The key of the space that the property is in.
let key = "key_example"; // String | The key of the property to be updated.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpacePropertyResourceUpdateSpacePropertyPut(bodyspaceKeykey, (error, data, response) => {
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
 **body** | [**SpacePropertyUpdate**](SpacePropertyUpdate.md)| The space property being updated. | 
 **spaceKey** | **String**| The key of the space that the property is in. | 
 **key** | **String**| The key of the property to be updated. | 

### Return type

[**SpaceProperty**](SpaceProperty.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreatePrivateSpacePost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreatePrivateSpacePost**
> Space comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreatePrivateSpacePost(body)

Create private space

Creates a new space that is only visible to the creator. This method is the same as the [Create space](#api-space-post) method with permissions set to the current user only. Note, currently you cannot set space labels when creating a space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Create Space(s)&#x27; global permission.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let body = new TheConfluenceCloudRestApi.SpacePrivateCreate(); // SpacePrivateCreate | The space to be created.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreatePrivateSpacePost(body, (error, data, response) => {
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
 **body** | [**SpacePrivateCreate**](SpacePrivateCreate.md)| The space to be created. | 

### Return type

[**Space**](Space.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreateSpacePost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreateSpacePost**
> Space comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreateSpacePost(body)

Create space

Creates a new space. Note, currently you cannot set space labels when creating a space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Create Space(s)&#x27; global permission.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let body = new TheConfluenceCloudRestApi.SpaceCreate(); // SpaceCreate | The space to be created.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceCreateSpacePost(body, (error, data, response) => {
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
 **body** | [**SpaceCreate**](SpaceCreate.md)| The space to be created. | 

### Return type

[**Space**](Space.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceDeleteSpaceDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceDeleteSpaceDelete**
> comAtlassianConfluencePluginsRestapiResourcesSpaceResourceDeleteSpaceDelete(spaceKey)

Delete space

Deletes a space. Note, the space will be deleted in a long running task. Therefore, the space may not be deleted yet when this method has returned. Clients should poll the status link that is returned in the response until the task completes.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to delete.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceDeleteSpaceDelete(spaceKey, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to delete. | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentByTypeForSpaceGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentByTypeForSpaceGet**
> ContentArray comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentByTypeForSpaceGet(spaceKey, type, opts)

Get content by type for space

Returns all content of a given type, in a space. The returned content is ordered by content ID in ascending order.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space. Note, the returned list will only contain content that the current user has permission to view.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to be queried for its content.
let type = "type_example"; // String | The type of content to return.
let opts = { 
  'depth': "depth_example", // String | Filter the results to content at the root level of the space or all content.
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
  'start': 56, // Number | The starting index of the returned content.
  'limit': 56 // Number | The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentByTypeForSpaceGet(spaceKey, type, opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to be queried for its content. | 
 **type** | **String**| The type of content to return. | 
 **depth** | **String**| Filter the results to content at the root level of the space or all content. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 
 **start** | **Number**| The starting index of the returned content. | [optional] 
 **limit** | **Number**| The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentForSpaceGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentForSpaceGet**
> ContentArray comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentForSpaceGet(spaceKey, opts)

Get content for space

Returns all content in a space. The returned content is grouped by type (pages then blogposts), then ordered by content ID in ascending order.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space. Note, the returned list will only contain content that the current user has permission to view.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to be queried for its content.
let opts = { 
  'depth': "depth_example", // String | Filter the results to content at the root level of the space or all content.
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
  'start': 56, // Number | The starting index of the returned content.
  'limit': 56 // Number | The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetContentForSpaceGet(spaceKey, opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to be queried for its content. | 
 **depth** | **String**| Filter the results to content at the root level of the space or all content. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 
 **start** | **Number**| The starting index of the returned content. | [optional] 
 **limit** | **Number**| The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceGet**
> Space comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceGet(spaceKey, opts)

Get space

Returns a space. This includes information like the name, description, and permissions, but not the content in the space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to be returned.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the spaces to expand, where:    - `settings` returns the settings for the space, similar to [Get space settings](#api-space-spaceKey-settings-get).   - `metadata.labels` returns the space labels, which are used to categorize the space.   - `operations` returns the operations for a space, which are used when setting permissions.   - `lookAndFeel` returns information about the look and feel of the space, including the color scheme.   - `permissions` returns the permissions for the space. Note that this may return permissions for deleted groups,   because deleting a group doesn't remove associated space permissions.   - `icon` returns information about space icon.   - `description.plain` returns the description of the space.   - `description.view` returns the description of the space.   - `theme` returns information about the space theme.   - `homepage` returns information about the space homepage.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceGet(spaceKey, opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to be returned. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the spaces to expand, where:    - &#x60;settings&#x60; returns the settings for the space, similar to [Get space settings](#api-space-spaceKey-settings-get).   - &#x60;metadata.labels&#x60; returns the space labels, which are used to categorize the space.   - &#x60;operations&#x60; returns the operations for a space, which are used when setting permissions.   - &#x60;lookAndFeel&#x60; returns information about the look and feel of the space, including the color scheme.   - &#x60;permissions&#x60; returns the permissions for the space. Note that this may return permissions for deleted groups,   because deleting a group doesn&#x27;t remove associated space permissions.   - &#x60;icon&#x60; returns information about space icon.   - &#x60;description.plain&#x60; returns the description of the space.   - &#x60;description.view&#x60; returns the description of the space.   - &#x60;theme&#x60; returns information about the space theme.   - &#x60;homepage&#x60; returns information about the space homepage. | [optional] 

### Return type

[**Space**](Space.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceSettingsGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceSettingsGet**
> SpaceSettings comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceSettingsGet(spaceKey)

Get space settings

Returns the settings of a space. Currently only the &#x60;routeOverrideEnabled&#x60; setting can be returned.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to be queried for its settings.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpaceSettingsGet(spaceKey, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to be queried for its settings. | 

### Return type

[**SpaceSettings**](SpaceSettings.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpacesGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpacesGet**
> SpaceArray comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpacesGet(opts)

Get spaces

Returns all spaces. The returned spaces are ordered alphabetically in ascending order by space key.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission). Note, the returned list will only contain spaces that the current user has permission to view.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let opts = { 
  'spaceKey': ["spaceKey_example"], // [String] | The key of the space to be returned. To return multiple spaces, specify this parameter multiple times with different values.
  'spaceId': [3.4], // [Number] | The id of the space to be returned. To return multiple spaces, specify this parameter multiple times with different values.
  'type': "type_example", // String | Filter the results to spaces based on their type.
  'status': "status_example", // String | Filter the results to spaces based on their status.
  'label': ["label_example"], // [String] | Filter the results to spaces based on their label.
  'favourite': true, // Boolean | Filter the results to the favourite spaces of the user specified by `favouriteUserKey`. Note, 'favourite' spaces are also known as 'saved for later' spaces.
  'favouriteUserKey': "favouriteUserKey_example", // String | The userKey of the user, whose favourite spaces are used to filter the results when using the `favourite` parameter.  Leave blank for the current user. Use [Get user](#api-user-get) to get the userKey for a user.
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the spaces to expand, where:    - `settings` returns the settings for the space, similar to [Get space settings](#api-space-spaceKey-settings-get).   - `metadata.labels` returns the space labels, which are used to categorize the space.   - `operations` returns the operations for a space, which are used when setting permissions.   - `lookAndFeel` returns information about the look and feel of the space, including the color scheme.   - `permissions` returns the permissions for the space. Note that this may return permissions for deleted groups,   because deleting a group doesn't remove associated space permissions.   - `icon` returns information about space icon.   - `description.plain` returns the description of the space.   - `description.view` returns the description of the space.   - `theme` returns information about the space theme.   - `homepage` returns information about the space homepage.
  'start': 56, // Number | The starting index of the returned spaces.
  'limit': 56 // Number | The maximum number of spaces to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetSpacesGet(opts, (error, data, response) => {
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
 **spaceKey** | [**[String]**](String.md)| The key of the space to be returned. To return multiple spaces, specify this parameter multiple times with different values. | [optional] 
 **spaceId** | [**[Number]**](Number.md)| The id of the space to be returned. To return multiple spaces, specify this parameter multiple times with different values. | [optional] 
 **type** | **String**| Filter the results to spaces based on their type. | [optional] 
 **status** | **String**| Filter the results to spaces based on their status. | [optional] 
 **label** | [**[String]**](String.md)| Filter the results to spaces based on their label. | [optional] 
 **favourite** | **Boolean**| Filter the results to the favourite spaces of the user specified by &#x60;favouriteUserKey&#x60;. Note, &#x27;favourite&#x27; spaces are also known as &#x27;saved for later&#x27; spaces. | [optional] 
 **favouriteUserKey** | **String**| The userKey of the user, whose favourite spaces are used to filter the results when using the &#x60;favourite&#x60; parameter.  Leave blank for the current user. Use [Get user](#api-user-get) to get the userKey for a user. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the spaces to expand, where:    - &#x60;settings&#x60; returns the settings for the space, similar to [Get space settings](#api-space-spaceKey-settings-get).   - &#x60;metadata.labels&#x60; returns the space labels, which are used to categorize the space.   - &#x60;operations&#x60; returns the operations for a space, which are used when setting permissions.   - &#x60;lookAndFeel&#x60; returns information about the look and feel of the space, including the color scheme.   - &#x60;permissions&#x60; returns the permissions for the space. Note that this may return permissions for deleted groups,   because deleting a group doesn&#x27;t remove associated space permissions.   - &#x60;icon&#x60; returns information about space icon.   - &#x60;description.plain&#x60; returns the description of the space.   - &#x60;description.view&#x60; returns the description of the space.   - &#x60;theme&#x60; returns information about the space theme.   - &#x60;homepage&#x60; returns information about the space homepage. | [optional] 
 **start** | **Number**| The starting index of the returned spaces. | [optional] 
 **limit** | **Number**| The maximum number of spaces to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**SpaceArray**](SpaceArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetWatchersForSpaceGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetWatchersForSpaceGet**
> SpaceWatchArray comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetWatchersForSpaceGet(spaceKey, opts)

Returns a list of watchers of a space

Returns a list of watchers of a space

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to get watchers.
let opts = { 
  'start': "start_example", // String | The start point of the collection to return.
  'limit': "limit_example" // String | The limit of the number of items to return, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceGetWatchersForSpaceGet(spaceKey, opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to get watchers. | 
 **start** | **String**| The start point of the collection to return. | [optional] 
 **limit** | **String**| The limit of the number of items to return, this may be restricted by fixed system limits. | [optional] 

### Return type

[**SpaceWatchArray**](SpaceWatchArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpacePut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpacePut**
> Space comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpacePut(bodyspaceKey)

Update space

Updates the name, description, or homepage of a space.  -   For security reasons, permissions cannot be updated via the API and must be changed via the user interface instead. -   Currently you cannot set space labels when updating a space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let body = new TheConfluenceCloudRestApi.SpaceUpdate(); // SpaceUpdate | The updated space.
let spaceKey = "spaceKey_example"; // String | The key of the space to update.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpacePut(bodyspaceKey, (error, data, response) => {
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
 **body** | [**SpaceUpdate**](SpaceUpdate.md)| The updated space. | 
 **spaceKey** | **String**| The key of the space to update. | 

### Return type

[**Space**](Space.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpaceSettingsPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpaceSettingsPut**
> SpaceSettings comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpaceSettingsPut(bodyspaceKey)

Update space settings

Updates the settings for a space. Currently only the &#x60;routeOverrideEnabled&#x60; setting can be updated.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let body = new TheConfluenceCloudRestApi.SpaceSettingsUpdate(); // SpaceSettingsUpdate | The space settings to update.
let spaceKey = "spaceKey_example"; // String | The key of the space whose settings will be updated.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceResourceUpdateSpaceSettingsPut(bodyspaceKey, (error, data, response) => {
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
 **body** | [**SpaceSettingsUpdate**](SpaceSettingsUpdate.md)| The space settings to update. | 
 **spaceKey** | **String**| The key of the space whose settings will be updated. | 

### Return type

[**SpaceSettings**](SpaceSettings.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceGetSpaceThemeGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceGetSpaceThemeGet**
> Theme comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceGetSpaceThemeGet(spaceKey)

Get space theme

Returns the theme selected for a space, if one is set. If no space theme is set, this means that the space is inheriting the global look and feel settings.  **[Permissions required](https://confluence.atlassian.com/x/_AozKw)**: ‘View’ permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to be queried for its theme.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceGetSpaceThemeGet(spaceKey, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to be queried for its theme. | 

### Return type

[**Theme**](Theme.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceResetSpaceThemeDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceResetSpaceThemeDelete**
> comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceResetSpaceThemeDelete(spaceKey)

Reset space theme

Resets the space theme. This means that the space will inherit the global look and feel settings  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to reset the theme for.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceResetSpaceThemeDelete(spaceKey, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to reset the theme for. | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceSetSpaceThemePut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceSetSpaceThemePut**
> Theme comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceSetSpaceThemePut(bodyspaceKey)

Set space theme

Sets the theme for a space. Note, if you want to reset the space theme to the default Confluence theme, use the &#x27;Reset space theme&#x27; method instead of this method.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SpaceApi();
let body = new TheConfluenceCloudRestApi.ThemeUpdate(); // ThemeUpdate | 
let spaceKey = "spaceKey_example"; // String | The key of the space to set the theme for.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpaceThemeResourceSetSpaceThemePut(bodyspaceKey, (error, data, response) => {
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
 **body** | [**ThemeUpdate**](ThemeUpdate.md)|  | 
 **spaceKey** | **String**| The key of the space to set the theme for. | 

### Return type

[**Theme**](Theme.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

