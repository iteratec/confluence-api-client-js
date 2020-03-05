# TheConfluenceCloudRestApi.GroupApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupGet**](GroupApi.md#comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupGet) | **GET** /api/group/{groupName} | Get group
[**comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupMembersGet**](GroupApi.md#comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupMembersGet) | **GET** /api/group/{groupName}/member | Get group members
[**comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupsGet**](GroupApi.md#comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupsGet) | **GET** /api/group | Get groups

<a name="comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupGet**
> Group comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupGet(groupName)

Get group

Returns a user group for a given group name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.GroupApi();
let groupName = "groupName_example"; // String | The name of the group. This is the same as the group name shown in the Confluence administration console.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupGet(groupName, (error, data, response) => {
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
 **groupName** | **String**| The name of the group. This is the same as the group name shown in the Confluence administration console. | 

### Return type

[**Group**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupMembersGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupMembersGet**
> UserArrayWithLinks comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupMembersGet(groupName, opts)

Get group members

Returns the users that are members of a group.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.GroupApi();
let groupName = "groupName_example"; // String | The name of the group to be queried for its members.
let opts = { 
  'start': 56, // Number | The starting index of the returned users.
  'limit': 56 // Number | The maximum number of users to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupMembersGet(groupName, opts, (error, data, response) => {
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
 **groupName** | **String**| The name of the group to be queried for its members. | 
 **start** | **Number**| The starting index of the returned users. | [optional] 
 **limit** | **Number**| The maximum number of users to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**UserArrayWithLinks**](UserArrayWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupsGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupsGet**
> GroupArrayWithLinks comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupsGet(opts)

Get groups

Returns all user groups. The returned groups are ordered alphabetically in ascending order by group name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.GroupApi();
let opts = { 
  'start': 56, // Number | The starting index of the returned groups.
  'limit': 56 // Number | The maximum number of groups to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesGroupResourceGetGroupsGet(opts, (error, data, response) => {
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
 **start** | **Number**| The starting index of the returned groups. | [optional] 
 **limit** | **Number**| The maximum number of groups to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**GroupArrayWithLinks**](GroupArrayWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

