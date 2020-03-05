# TheConfluenceCloudRestApi.InlineTasksApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesTaskSearchResourceSearchTasksGet**](InlineTasksApi.md#comAtlassianConfluencePluginsRestapiResourcesTaskSearchResourceSearchTasksGet) | **GET** /api/inlinetasks/search | Get inline tasks based on search parameters

<a name="comAtlassianConfluencePluginsRestapiResourcesTaskSearchResourceSearchTasksGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesTaskSearchResourceSearchTasksGet**
> TaskPageResponse comAtlassianConfluencePluginsRestapiResourcesTaskSearchResourceSearchTasksGet(opts)

Get inline tasks based on search parameters

Returns inline tasks based on the search query.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission). Only tasks in contents that the user has permission to view are returned.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.InlineTasksApi();
let opts = { 
  'start': 56, // Number | The starting offset for the results.
  'limit': 56, // Number | The number of results to be returned.
  'spaceKey': "spaceKey_example", // String | The space key of a space. Multiple space keys can be specified.
  'pageId': "pageId_example", // String | The page id of a page. Multiple page ids can be specified.
  'assignee': "assignee_example", // String | Account ID of a user to whom a task is assigned. Multiple users can be specified.
  'creator': "creator_example", // String | Account ID of a user to who created a task. Multiple users can be specified.
  'completedUser': "completedUser_example", // String | Account ID of a user who completed a task. Multiple users can be specified.
  'duedateFrom': 789, // Number | Start of date range based on due dates (inclusive).
  'duedateTo': 789, // Number | End of date range based on due dates (inclusive).
  'createdateFrom': 789, // Number | Start of date range based on create dates (inclusive).
  'createdateTo': 789, // Number | End of date range based on create dates (inclusive).
  'completedateFrom': 789, // Number | Start of date range based on complete dates (inclusive).
  'completedateTo': 789, // Number | End of date range based on complete dates (inclusive).
  'status': "status_example" // String | The status of the task. (checked/unchecked)
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesTaskSearchResourceSearchTasksGet(opts, (error, data, response) => {
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
 **start** | **Number**| The starting offset for the results. | [optional] 
 **limit** | **Number**| The number of results to be returned. | [optional] 
 **spaceKey** | **String**| The space key of a space. Multiple space keys can be specified. | [optional] 
 **pageId** | **String**| The page id of a page. Multiple page ids can be specified. | [optional] 
 **assignee** | **String**| Account ID of a user to whom a task is assigned. Multiple users can be specified. | [optional] 
 **creator** | **String**| Account ID of a user to who created a task. Multiple users can be specified. | [optional] 
 **completedUser** | **String**| Account ID of a user who completed a task. Multiple users can be specified. | [optional] 
 **duedateFrom** | **Number**| Start of date range based on due dates (inclusive). | [optional] 
 **duedateTo** | **Number**| End of date range based on due dates (inclusive). | [optional] 
 **createdateFrom** | **Number**| Start of date range based on create dates (inclusive). | [optional] 
 **createdateTo** | **Number**| End of date range based on create dates (inclusive). | [optional] 
 **completedateFrom** | **Number**| Start of date range based on complete dates (inclusive). | [optional] 
 **completedateTo** | **Number**| End of date range based on complete dates (inclusive). | [optional] 
 **status** | **String**| The status of the task. (checked/unchecked) | [optional] 

### Return type

[**TaskPageResponse**](TaskPageResponse.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

