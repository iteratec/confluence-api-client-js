# TheConfluenceCloudRestApi.RelationApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut**](RelationApi.md#comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut) | **PUT** /api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey} | Create relationship
[**comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete**](RelationApi.md#comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete) | **DELETE** /api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey} | Delete
[**comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet**](RelationApi.md#comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet) | **GET** /api/relation/{relationName}/to/{targetType}/{targetKey}/from/{sourceType} | Find target entities related to a source entity
[**comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet**](RelationApi.md#comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet) | **GET** /api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType} | Find target entities related to a source entity
[**comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet**](RelationApi.md#comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet) | **GET** /api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey} | Find relationship from source to target

<a name="comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut**
> Relation comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut(relationName, sourceType, sourceKey, targetType, targetKey, opts)

Create relationship

Creates a relationship between two entities (user, space, content). The &#x27;favourite&#x27; relationship is supported by default, but you can use this method to create any type of relationship between two entities.  For example, the following method creates a &#x27;sibling&#x27; relationship between two pieces of content: &#x60;GET https://your-domain.atlassian.net/wiki/rest/api/relation/sibling/from/content/123/to/content/456&#x60;  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.RelationApi();
let relationName = "relationName_example"; // String | The name of the relationship. This method supports the 'favourite' (i.e. 'save for later') relationship. You can also specify any other value for this parameter to create a custom relationship type.
let sourceType = "sourceType_example"; // String | The source entity type of the relationship. This must be 'user', if the `relationName` is 'favourite'.
let sourceKey = "sourceKey_example"; // String | - The identifier for the source entity:  - If `sourceType` is 'user', then specify either 'current' (logged-in   user) or the user key. - If `sourceType` is 'content', then specify the content ID. - If `sourceType` is 'space', then specify the space key.
let targetType = "targetType_example"; // String | The target entity type of the relationship. This must be 'space' or 'content', if the `relationName` is 'favourite'.
let targetKey = "targetKey_example"; // String | - The identifier for the target entity:  - If `sourceType` is 'user', then specify either 'current' (logged-in   user) or the user key. - If `sourceType` is 'content', then specify the content ID. - If `sourceType` is 'space', then specify the space key.
let opts = { 
  'sourceStatus': "sourceStatus_example", // String | The status of the source. This parameter is only used when the `sourceType` is 'content'.
  'targetStatus': "targetStatus_example", // String | The status of the target. This parameter is only used when the `targetType` is 'content'.
  'sourceVersion': 56, // Number | The version of the source. This parameter is only used when the `sourceType` is 'content' and the `sourceStatus` is 'historical'.
  'targetVersion': 56 // Number | The version of the target. This parameter is only used when the `targetType` is 'content' and the `targetStatus` is 'historical'.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesRelationResourceCreateRelationshipPut(relationName, sourceType, sourceKey, targetType, targetKey, opts, (error, data, response) => {
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
 **relationName** | **String**| The name of the relationship. This method supports the &#x27;favourite&#x27; (i.e. &#x27;save for later&#x27;) relationship. You can also specify any other value for this parameter to create a custom relationship type. | 
 **sourceType** | **String**| The source entity type of the relationship. This must be &#x27;user&#x27;, if the &#x60;relationName&#x60; is &#x27;favourite&#x27;. | 
 **sourceKey** | **String**| - The identifier for the source entity:  - If &#x60;sourceType&#x60; is &#x27;user&#x27;, then specify either &#x27;current&#x27; (logged-in   user) or the user key. - If &#x60;sourceType&#x60; is &#x27;content&#x27;, then specify the content ID. - If &#x60;sourceType&#x60; is &#x27;space&#x27;, then specify the space key. | 
 **targetType** | **String**| The target entity type of the relationship. This must be &#x27;space&#x27; or &#x27;content&#x27;, if the &#x60;relationName&#x60; is &#x27;favourite&#x27;. | 
 **targetKey** | **String**| - The identifier for the target entity:  - If &#x60;sourceType&#x60; is &#x27;user&#x27;, then specify either &#x27;current&#x27; (logged-in   user) or the user key. - If &#x60;sourceType&#x60; is &#x27;content&#x27;, then specify the content ID. - If &#x60;sourceType&#x60; is &#x27;space&#x27;, then specify the space key. | 
 **sourceStatus** | **String**| The status of the source. This parameter is only used when the &#x60;sourceType&#x60; is &#x27;content&#x27;. | [optional] 
 **targetStatus** | **String**| The status of the target. This parameter is only used when the &#x60;targetType&#x60; is &#x27;content&#x27;. | [optional] 
 **sourceVersion** | **Number**| The version of the source. This parameter is only used when the &#x60;sourceType&#x60; is &#x27;content&#x27; and the &#x60;sourceStatus&#x60; is &#x27;historical&#x27;. | [optional] 
 **targetVersion** | **Number**| The version of the target. This parameter is only used when the &#x60;targetType&#x60; is &#x27;content&#x27; and the &#x60;targetStatus&#x60; is &#x27;historical&#x27;. | [optional] 

### Return type

[**Relation**](Relation.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete**
> comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete(relationName, sourceType, sourceKey, targetType, targetKey, opts)

Delete

Deletes a relationship between two entities (user, space, content).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission). For favourite relationships, the current user can only delete their own favourite relationships. A space administrator can delete favourite relationships for any user.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.RelationApi();
let relationName = "relationName_example"; // String | The name of the relationship.
let sourceType = "sourceType_example"; // String | The source entity type of the relationship. This must be 'user', if the `relationName` is 'favourite'.
let sourceKey = "sourceKey_example"; // String | - The identifier for the source entity:  - If `sourceType` is 'user', then specify either 'current' (logged-in   user) or the user key. - If `sourceType` is 'content', then specify the content ID. - If `sourceType` is 'space', then specify the space key.
let targetType = "targetType_example"; // String | The target entity type of the relationship. This must be 'space' or 'content', if the `relationName` is 'favourite'.
let targetKey = "targetKey_example"; // String | - The identifier for the target entity:  - If `sourceType` is 'user', then specify either 'current' (logged-in   user) or the user key. - If `sourceType` is 'content', then specify the content ID. - If `sourceType` is 'space', then specify the space key.
let opts = { 
  'sourceStatus': "sourceStatus_example", // String | The status of the source. This parameter is only used when the `sourceType` is 'content'.
  'targetStatus': "targetStatus_example", // String | The status of the target. This parameter is only used when the `targetType` is 'content'.
  'sourceVersion': 56, // Number | The version of the source. This parameter is only used when the `sourceType` is 'content' and the `sourceStatus` is 'historical'.
  'targetVersion': 56 // Number | The version of the target. This parameter is only used when the `targetType` is 'content' and the `targetStatus` is 'historical'.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesRelationResourceDeleteDelete(relationName, sourceType, sourceKey, targetType, targetKey, opts, (error, data, response) => {
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
 **relationName** | **String**| The name of the relationship. | 
 **sourceType** | **String**| The source entity type of the relationship. This must be &#x27;user&#x27;, if the &#x60;relationName&#x60; is &#x27;favourite&#x27;. | 
 **sourceKey** | **String**| - The identifier for the source entity:  - If &#x60;sourceType&#x60; is &#x27;user&#x27;, then specify either &#x27;current&#x27; (logged-in   user) or the user key. - If &#x60;sourceType&#x60; is &#x27;content&#x27;, then specify the content ID. - If &#x60;sourceType&#x60; is &#x27;space&#x27;, then specify the space key. | 
 **targetType** | **String**| The target entity type of the relationship. This must be &#x27;space&#x27; or &#x27;content&#x27;, if the &#x60;relationName&#x60; is &#x27;favourite&#x27;. | 
 **targetKey** | **String**| - The identifier for the target entity:  - If &#x60;sourceType&#x60; is &#x27;user&#x27;, then specify either &#x27;current&#x27; (logged-in   user) or the user key. - If &#x60;sourceType&#x60; is &#x27;content&#x27;, then specify the content ID. - If &#x60;sourceType&#x60; is &#x27;space&#x27;, then specify the space key. | 
 **sourceStatus** | **String**| The status of the source. This parameter is only used when the &#x60;sourceType&#x60; is &#x27;content&#x27;. | [optional] 
 **targetStatus** | **String**| The status of the target. This parameter is only used when the &#x60;targetType&#x60; is &#x27;content&#x27;. | [optional] 
 **sourceVersion** | **Number**| The version of the source. This parameter is only used when the &#x60;sourceType&#x60; is &#x27;content&#x27; and the &#x60;sourceStatus&#x60; is &#x27;historical&#x27;. | [optional] 
 **targetVersion** | **Number**| The version of the target. This parameter is only used when the &#x60;targetType&#x60; is &#x27;content&#x27; and the &#x60;targetStatus&#x60; is &#x27;historical&#x27;. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet**
> RelationArray comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet(relationName, sourceType, targetType, targetKey, opts)

Find target entities related to a source entity

Returns all target entities that have a particular relationship to the source entity. Note, relationships are one way.  For example, the following method finds all users that have a &#x27;collaborator&#x27; relationship to a piece of content with an ID of &#x27;1234&#x27;: &#x60;GET https://your-domain.atlassian.net/wiki/rest/api/relation/collaborator/to/content/1234/from/user&#x60; Note, &#x27;collaborator&#x27; is an example custom relationship type.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view both the target entity and source entity.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.RelationApi();
let relationName = "relationName_example"; // String | The name of the relationship. This method supports relationships created via [Create relationship](#api-relation-relationName-from-sourceType-sourceKey-to-targetType-targetKey-put). Note, this method does not support 'favourite' relationships.
let sourceType = "sourceType_example"; // String | The source entity type of the relationship.
let targetType = "targetType_example"; // String | The target entity type of the relationship.
let targetKey = "targetKey_example"; // String | The identifier for the target entity:  - If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `targetType` is 'content', then specify the content ID. - If `targetType` is 'space', then specify the space key.
let opts = { 
  'sourceStatus': "sourceStatus_example", // String | The status of the source. This parameter is only used when the `sourceType` is 'content'.
  'targetStatus': "targetStatus_example", // String | The status of the target. This parameter is only used when the `targetType` is 'content'.
  'sourceVersion': 56, // Number | The version of the source. This parameter is only used when the `sourceType` is 'content' and the `sourceStatus` is 'historical'.
  'targetVersion': 56, // Number | The version of the target. This parameter is only used when the `targetType` is 'content' and the `targetStatus` is 'historical'.
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the response object to expand.  - `relationData` returns information about the relationship, such as who created it and when it was created. - `source` returns the source entity. - `target` returns the target entity.
  'start': 56, // Number | The starting index of the returned relationships.
  'limit': 56 // Number | The maximum number of relationships to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindSourcesForTargetGet(relationName, sourceType, targetType, targetKey, opts, (error, data, response) => {
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
 **relationName** | **String**| The name of the relationship. This method supports relationships created via [Create relationship](#api-relation-relationName-from-sourceType-sourceKey-to-targetType-targetKey-put). Note, this method does not support &#x27;favourite&#x27; relationships. | 
 **sourceType** | **String**| The source entity type of the relationship. | 
 **targetType** | **String**| The target entity type of the relationship. | 
 **targetKey** | **String**| The identifier for the target entity:  - If &#x60;targetType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;targetType&#x60; is &#x27;content&#x27;, then specify the content ID. - If &#x60;targetType&#x60; is &#x27;space&#x27;, then specify the space key. | 
 **sourceStatus** | **String**| The status of the source. This parameter is only used when the &#x60;sourceType&#x60; is &#x27;content&#x27;. | [optional] 
 **targetStatus** | **String**| The status of the target. This parameter is only used when the &#x60;targetType&#x60; is &#x27;content&#x27;. | [optional] 
 **sourceVersion** | **Number**| The version of the source. This parameter is only used when the &#x60;sourceType&#x60; is &#x27;content&#x27; and the &#x60;sourceStatus&#x60; is &#x27;historical&#x27;. | [optional] 
 **targetVersion** | **Number**| The version of the target. This parameter is only used when the &#x60;targetType&#x60; is &#x27;content&#x27; and the &#x60;targetStatus&#x60; is &#x27;historical&#x27;. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the response object to expand.  - &#x60;relationData&#x60; returns information about the relationship, such as who created it and when it was created. - &#x60;source&#x60; returns the source entity. - &#x60;target&#x60; returns the target entity. | [optional] 
 **start** | **Number**| The starting index of the returned relationships. | [optional] 
 **limit** | **Number**| The maximum number of relationships to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**RelationArray**](RelationArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet**
> RelationArray comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet(relationName, sourceType, sourceKey, targetType, opts)

Find target entities related to a source entity

Returns all target entities that have a particular relationship to the source entity. Note, relationships are one way.  For example, the following method finds all content that the current user has an &#x27;ignore&#x27; relationship with: &#x60;GET https://your-domain.atlassian.net/wiki/rest/api/relation/ignore/from/user/current/to/content&#x60; Note, &#x27;ignore&#x27; is an example custom relationship type.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view both the target entity and source entity.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.RelationApi();
let relationName = "relationName_example"; // String | The name of the relationship. This method supports relationships created via [Create relationship](#api-relation-relationName-from-sourceType-sourceKey-to-targetType-targetKey-put). Note, this method does not support 'favourite' relationships.
let sourceType = "sourceType_example"; // String | The source entity type of the relationship.
let sourceKey = "sourceKey_example"; // String | The identifier for the source entity:  - If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `sourceType` is 'content', then specify the content ID. - If `sourceType` is 'space', then specify the space key.
let targetType = "targetType_example"; // String | The target entity type of the relationship.
let opts = { 
  'sourceStatus': "sourceStatus_example", // String | The status of the source. This parameter is only used when the `sourceType` is 'content'.
  'targetStatus': "targetStatus_example", // String | The status of the target. This parameter is only used when the `targetType` is 'content'.
  'sourceVersion': 56, // Number | The version of the source. This parameter is only used when the `sourceType` is 'content' and the `sourceStatus` is 'historical'.
  'targetVersion': 56, // Number | The version of the target. This parameter is only used when the `targetType` is 'content' and the `targetStatus` is 'historical'.
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the response object to expand.  - `relationData` returns information about the relationship, such as who created it and when it was created. - `source` returns the source entity. - `target` returns the target entity.
  'start': 56, // Number | The starting index of the returned relationships.
  'limit': 56 // Number | The maximum number of relationships to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesRelationResourceFindTargetFromSourceGet(relationName, sourceType, sourceKey, targetType, opts, (error, data, response) => {
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
 **relationName** | **String**| The name of the relationship. This method supports relationships created via [Create relationship](#api-relation-relationName-from-sourceType-sourceKey-to-targetType-targetKey-put). Note, this method does not support &#x27;favourite&#x27; relationships. | 
 **sourceType** | **String**| The source entity type of the relationship. | 
 **sourceKey** | **String**| The identifier for the source entity:  - If &#x60;sourceType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;sourceType&#x60; is &#x27;content&#x27;, then specify the content ID. - If &#x60;sourceType&#x60; is &#x27;space&#x27;, then specify the space key. | 
 **targetType** | **String**| The target entity type of the relationship. | 
 **sourceStatus** | **String**| The status of the source. This parameter is only used when the &#x60;sourceType&#x60; is &#x27;content&#x27;. | [optional] 
 **targetStatus** | **String**| The status of the target. This parameter is only used when the &#x60;targetType&#x60; is &#x27;content&#x27;. | [optional] 
 **sourceVersion** | **Number**| The version of the source. This parameter is only used when the &#x60;sourceType&#x60; is &#x27;content&#x27; and the &#x60;sourceStatus&#x60; is &#x27;historical&#x27;. | [optional] 
 **targetVersion** | **Number**| The version of the target. This parameter is only used when the &#x60;targetType&#x60; is &#x27;content&#x27; and the &#x60;targetStatus&#x60; is &#x27;historical&#x27;. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the response object to expand.  - &#x60;relationData&#x60; returns information about the relationship, such as who created it and when it was created. - &#x60;source&#x60; returns the source entity. - &#x60;target&#x60; returns the target entity. | [optional] 
 **start** | **Number**| The starting index of the returned relationships. | [optional] 
 **limit** | **Number**| The maximum number of relationships to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**RelationArray**](RelationArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet**
> Relation comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet(relationName, sourceType, sourceKey, targetType, targetKey, opts)

Find relationship from source to target

Find whether a particular type of relationship exists from a source entity to a target entity. Note, relationships are one way.  For example, you can use this method to find whether the current user has selected a particular page as a favorite (i.e. &#x27;save for later&#x27;): &#x60;GET https://your-domain.atlassian.net/wiki/rest/api/relation/favourite/from/user/current/to/content/123&#x60;  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view both the target entity and source entity.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.RelationApi();
let relationName = "relationName_example"; // String | The name of the relationship. This method supports the 'favourite' (i.e. 'save for later') relationship as well as any other relationship types created via [Create relationship](#api-relation-relationName-from-sourceType-sourceKey-to-targetType-targetKey-put).
let sourceType = "sourceType_example"; // String | The source entity type of the relationship. This must be 'user', if the `relationName` is 'favourite'.
let sourceKey = "sourceKey_example"; // String | - The identifier for the source entity:  - If `sourceType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `sourceType` is 'content', then specify the content ID. - If `sourceType` is 'space', then specify the space key.
let targetType = "targetType_example"; // String | The target entity type of the relationship. This must be 'space' or 'content', if the `relationName` is 'favourite'.
let targetKey = "targetKey_example"; // String | The identifier for the target entity:  - If `targetType` is `user`, then specify either `current` (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If `targetType` is 'content', then specify the content ID. - If `targetType` is 'space', then specify the space key.
let opts = { 
  'sourceStatus': "sourceStatus_example", // String | The status of the source. This parameter is only used when the `sourceType` is 'content'.
  'targetStatus': "targetStatus_example", // String | The status of the target. This parameter is only used when the `targetType` is 'content'.
  'sourceVersion': 56, // Number | The version of the source. This parameter is only used when the `sourceType` is 'content' and the `sourceStatus` is 'historical'.
  'targetVersion': 56, // Number | The version of the target. This parameter is only used when the `targetType` is 'content' and the `targetStatus` is 'historical'.
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the response object to expand.  - `relationData` returns information about the relationship, such as who created it and when it was created. - `source` returns the source entity. - `target` returns the target entity.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesRelationResourceGetRelationshipGet(relationName, sourceType, sourceKey, targetType, targetKey, opts, (error, data, response) => {
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
 **relationName** | **String**| The name of the relationship. This method supports the &#x27;favourite&#x27; (i.e. &#x27;save for later&#x27;) relationship as well as any other relationship types created via [Create relationship](#api-relation-relationName-from-sourceType-sourceKey-to-targetType-targetKey-put). | 
 **sourceType** | **String**| The source entity type of the relationship. This must be &#x27;user&#x27;, if the &#x60;relationName&#x60; is &#x27;favourite&#x27;. | 
 **sourceKey** | **String**| - The identifier for the source entity:  - If &#x60;sourceType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;sourceType&#x60; is &#x27;content&#x27;, then specify the content ID. - If &#x60;sourceType&#x60; is &#x27;space&#x27;, then specify the space key. | 
 **targetType** | **String**| The target entity type of the relationship. This must be &#x27;space&#x27; or &#x27;content&#x27;, if the &#x60;relationName&#x60; is &#x27;favourite&#x27;. | 
 **targetKey** | **String**| The identifier for the target entity:  - If &#x60;targetType&#x60; is &#x60;user&#x60;, then specify either &#x60;current&#x60; (logged-in user), the user key of the user, or the account ID of the user. Note that the user key has been deprecated in favor of the account ID for this parameter. See the [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. - If &#x60;targetType&#x60; is &#x27;content&#x27;, then specify the content ID. - If &#x60;targetType&#x60; is &#x27;space&#x27;, then specify the space key. | 
 **sourceStatus** | **String**| The status of the source. This parameter is only used when the &#x60;sourceType&#x60; is &#x27;content&#x27;. | [optional] 
 **targetStatus** | **String**| The status of the target. This parameter is only used when the &#x60;targetType&#x60; is &#x27;content&#x27;. | [optional] 
 **sourceVersion** | **Number**| The version of the source. This parameter is only used when the &#x60;sourceType&#x60; is &#x27;content&#x27; and the &#x60;sourceStatus&#x60; is &#x27;historical&#x27;. | [optional] 
 **targetVersion** | **Number**| The version of the target. This parameter is only used when the &#x60;targetType&#x60; is &#x27;content&#x27; and the &#x60;targetStatus&#x60; is &#x27;historical&#x27;. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the response object to expand.  - &#x60;relationData&#x60; returns information about the relationship, such as who created it and when it was created. - &#x60;source&#x60; returns the source entity. - &#x60;target&#x60; returns the target entity. | [optional] 

### Return type

[**Relation**](Relation.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

