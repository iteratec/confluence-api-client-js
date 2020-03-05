# TheConfluenceCloudRestApi.LongtaskApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTaskGet**](LongtaskApi.md#comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTaskGet) | **GET** /api/longtask/{id} | Get long-running task
[**comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTasksGet**](LongtaskApi.md#comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTasksGet) | **GET** /api/longtask | Get long-running tasks

<a name="comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTaskGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTaskGet**
> LongTaskStatusWithLinks comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTaskGet(id)

Get long-running task

Returns information about an active long-running task (e.g. space export), such as how long it has been running and the percentage of the task that has completed.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.LongtaskApi();
let id = "id_example"; // String | The ID of the task.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTaskGet(id, (error, data, response) => {
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
 **id** | **String**| The ID of the task. | 

### Return type

[**LongTaskStatusWithLinks**](LongTaskStatusWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTasksGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTasksGet**
> LongTaskStatusArray comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTasksGet(opts)

Get long-running tasks

Returns information about all active long-running tasks (e.g. space export), such as how long each task has been running and the percentage of each task that has completed.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.LongtaskApi();
let opts = { 
  'start': 56, // Number | The starting index of the returned tasks.
  'limit': 56 // Number | The maximum number of tasks to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesLongTaskResourceGetTasksGet(opts, (error, data, response) => {
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
 **start** | **Number**| The starting index of the returned tasks. | [optional] 
 **limit** | **Number**| The maximum number of tasks to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**LongTaskStatusArray**](LongTaskStatusArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

