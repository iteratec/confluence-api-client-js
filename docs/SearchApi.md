# TheConfluenceCloudRestApi.SearchApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchGet**](SearchApi.md#comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchGet) | **GET** /api/search | Search
[**comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchUserGet**](SearchApi.md#comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchUserGet) | **GET** /api/search/user | Search

<a name="comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchGet**
> SearchPageResponseSearchResult comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchGet(cql, opts)

Search

Searches for content using the [Confluence Query Language (CQL)](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/)  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the entities. Note, only entities that the user has permission to view will be returned.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SearchApi();
let cql = "cql_example"; // String | The CQL query to be used for the search. See [Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/) for instructions on how to build a CQL query.
let opts = { 
  'cqlcontext': "cqlcontext_example", // String | The space, content, and content status to execute the search against.  - `spaceKey` Key of the space to search against. Optional. - `contentId` ID of the content to search against. Optional. Must be in the space specified by `spaceKey`. - `contentStatuses` Content statuses to search against. Optional.  Specify these values in an object. For example, `cqlcontext={%22spaceKey%22:%22TEST%22, %22contentId%22:%22123%22}`
  'start': 56, // Number | The starting index of the returned content.
  'limit': 56, // Number | The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits.
  'includeArchivedSpaces': true // Boolean | Include content from archived spaces in the results.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchGet(cql, opts, (error, data, response) => {
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
 **cql** | **String**| The CQL query to be used for the search. See [Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/) for instructions on how to build a CQL query. | 
 **cqlcontext** | **String**| The space, content, and content status to execute the search against.  - &#x60;spaceKey&#x60; Key of the space to search against. Optional. - &#x60;contentId&#x60; ID of the content to search against. Optional. Must be in the space specified by &#x60;spaceKey&#x60;. - &#x60;contentStatuses&#x60; Content statuses to search against. Optional.  Specify these values in an object. For example, &#x60;cqlcontext&#x3D;{%22spaceKey%22:%22TEST%22, %22contentId%22:%22123%22}&#x60; | [optional] 
 **start** | **Number**| The starting index of the returned content. | [optional] 
 **limit** | **Number**| The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits. | [optional] 
 **includeArchivedSpaces** | **Boolean**| Include content from archived spaces in the results. | [optional] 

### Return type

[**SearchPageResponseSearchResult**](SearchPageResponseSearchResult.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchUserGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchUserGet**
> SearchPageResponseSearchResult comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchUserGet(cql, opts)

Search

Searches for users using user-specific queries from the [Confluence Query Language (CQL)](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).  Note that some user fields may be set to null depending on the user&#x27;s privacy settings. These are: email, profilePicture, and displayName.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.SearchApi();
let cql = "cql_example"; // String | The CQL query to be used for the search. See [Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/) for instructions on how to build a CQL query.  Example queries:           cql=type=user will return all users           cql=user=“1234” will return user with accountId “1234”           You can also use IN, NOT IN, != operators           cql=user IN (“12”, “34\") will return users with accountids “12” and “34”           cql=user.fullname~jo will return users with nickname/full name starting with “jo”           cql=user.accountid=“123” will return user with accountId “123”
let opts = { 
  'start': 56, // Number | The starting index of the returned users.
  'limit': 56 // Number | The maximum number of user objects to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesSearchResourceSearchUserGet(cql, opts, (error, data, response) => {
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
 **cql** | **String**| The CQL query to be used for the search. See [Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/) for instructions on how to build a CQL query.  Example queries:           cql&#x3D;type&#x3D;user will return all users           cql&#x3D;user&#x3D;“1234” will return user with accountId “1234”           You can also use IN, NOT IN, !&#x3D; operators           cql&#x3D;user IN (“12”, “34\&quot;) will return users with accountids “12” and “34”           cql&#x3D;user.fullname~jo will return users with nickname/full name starting with “jo”           cql&#x3D;user.accountid&#x3D;“123” will return user with accountId “123” | 
 **start** | **Number**| The starting index of the returned users. | [optional] 
 **limit** | **Number**| The maximum number of user objects to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**SearchPageResponseSearchResult**](SearchPageResponseSearchResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

