# TheConfluenceCloudRestApi.ExperimentalApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesExperimentalCQLResourceCqlPDCleanerPost**](ExperimentalApi.md#comAtlassianConfluencePluginsRestapiResourcesExperimentalCQLResourceCqlPDCleanerPost) | **POST** /api/experimental/cql/pdcleaner | Convert user identifiers to account IDs in CQL queries
[**comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceAddPermission**](ExperimentalApi.md#comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceAddPermission) | **POST** /api/space/{spaceKey}/permission | Add new permission to space
[**comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceRemovePermission**](ExperimentalApi.md#comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceRemovePermission) | **DELETE** /api/space/{spaceKey}/permission/{id} | Remove a space permission

<a name="comAtlassianConfluencePluginsRestapiResourcesExperimentalCQLResourceCqlPDCleanerPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesExperimentalCQLResourceCqlPDCleanerPost**
> CQLPersonalDataConvertedQueries comAtlassianConfluencePluginsRestapiResourcesExperimentalCQLResourceCqlPDCleanerPost(body)

Convert user identifiers to account IDs in CQL queries

Converts one or more CQL queries with user identifiers (username or user key) to equivalent CQL queries with account IDs.  You may wish to use this operation if your system stores CQL queries and you want to make them GDPR-compliant. For more information about GDPR-related changes, see the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.ExperimentalApi();
let body = new TheConfluenceCloudRestApi.CQLPersonalDataMigrationRequest(); // CQLPersonalDataMigrationRequest | The CQL queries to convert.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesExperimentalCQLResourceCqlPDCleanerPost(body, (error, data, response) => {
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
 **body** | [**CQLPersonalDataMigrationRequest**](CQLPersonalDataMigrationRequest.md)| The CQL queries to convert. | 

### Return type

[**CQLPersonalDataConvertedQueries**](CQLPersonalDataConvertedQueries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceAddPermission"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceAddPermission**
> SpacePermissionV2 comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceAddPermission(bodyspaceKey)

Add new permission to space

Adds new permission to space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.ExperimentalApi();
let body = new TheConfluenceCloudRestApi.SpacePermissionV2(); // SpacePermissionV2 | The permission to be created.
let spaceKey = "spaceKey_example"; // String | The key of the space to be queried for its content.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceAddPermission(bodyspaceKey, (error, data, response) => {
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
 **body** | [**SpacePermissionV2**](SpacePermissionV2.md)| The permission to be created. | 
 **spaceKey** | **String**| The key of the space to be queried for its content. | 

### Return type

[**SpacePermissionV2**](SpacePermissionV2.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceRemovePermission"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceRemovePermission**
> comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceRemovePermission(spaceKey, id)

Remove a space permission

Removes a space permission. Note that removing Read Space permission for a user or group will remove all the space permissions for that user or group.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.ExperimentalApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to be queried for its content.
let id = 56; // Number | Id of the permission to be deleted.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesSpacePermissionResourceRemovePermission(spaceKey, id, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to be queried for its content. | 
 **id** | **Number**| Id of the permission to be deleted. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

