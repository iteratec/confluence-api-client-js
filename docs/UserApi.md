# TheConfluenceCloudRestApi.UserApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailBulkGet**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailBulkGet) | **GET** /api/user/email/bulk | Bulk fetch of users&#x27; email addresses
[**comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailGet**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailGet) | **GET** /api/user/email | Get a user&#x27;s email
[**comAtlassianConfluencePluginsRestapiResourcesUserResourceGetAnonymousUserGet**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserResourceGetAnonymousUserGet) | **GET** /api/user/anonymous | Get anonymous user
[**comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserLookup**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserLookup) | **GET** /api/user/bulk | Get multiple users using ids
[**comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserMigration**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserMigration) | **GET** /api/user/bulk/migration | Get accountIds for users
[**comAtlassianConfluencePluginsRestapiResourcesUserResourceGetCurrentUserGet**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserResourceGetCurrentUserGet) | **GET** /api/user/current | Get current user
[**comAtlassianConfluencePluginsRestapiResourcesUserResourceGetGroupMembershipsForUserGet**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserResourceGetGroupMembershipsForUserGet) | **GET** /api/user/memberof | Get group memberships for user
[**comAtlassianConfluencePluginsRestapiResourcesUserResourceGetUserGet**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserResourceGetUserGet) | **GET** /api/user | Get user
[**comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddContentWatcherPost**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddContentWatcherPost) | **POST** /api/user/watch/content/{contentId} | Add content watcher
[**comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddLabelWatcherPost**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddLabelWatcherPost) | **POST** /api/user/watch/label/{labelName} | Add label watcher
[**comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddSpaceWatcherPost**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddSpaceWatcherPost) | **POST** /api/user/watch/space/{spaceKey} | Add space watcher
[**comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceGetContentWatchStatusGet**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceGetContentWatchStatusGet) | **GET** /api/user/watch/content/{contentId} | Get content watch status
[**comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingLabelGet**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingLabelGet) | **GET** /api/user/watch/label/{labelName} | Get label watch status
[**comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingSpaceGet**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingSpaceGet) | **GET** /api/user/watch/space/{spaceKey} | Get space watch status
[**comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveContentWatcherDelete**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveContentWatcherDelete) | **DELETE** /api/user/watch/content/{contentId} | Remove content watcher
[**comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveLabelWatcherDelete**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveLabelWatcherDelete) | **DELETE** /api/user/watch/label/{labelName} | Remove label watcher
[**comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveSpaceWatchDelete**](UserApi.md#comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveSpaceWatchDelete) | **DELETE** /api/user/watch/space/{spaceKey} | Remove space watch

<a name="comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailBulkGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailBulkGet**
> AccountIdEmailRecordArray comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailBulkGet(accountId)

Bulk fetch of users&#x27; email addresses

Returns user email addresses for a set of accountIds. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).  Any accounts which are not available will not be included in the result.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let accountId = ["accountId_example"]; // [String] | The account IDs of the users.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailBulkGet(accountId, (error, data, response) => {
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
 **accountId** | [**[String]**](String.md)| The account IDs of the users. | 

### Return type

[**AccountIdEmailRecordArray**](AccountIdEmailRecordArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailGet**
> AccountIdEmailRecord comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailGet(accountId)

Get a user&#x27;s email

Returns a user&#x27;s email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let accountId = "accountId_example"; // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. Required.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserEmailResourceGetPrivacyUnsafeUserEmailGet(accountId, (error, data, response) => {
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
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. Required. | 

### Return type

[**AccountIdEmailRecord**](AccountIdEmailRecord.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserResourceGetAnonymousUserGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserResourceGetAnonymousUserGet**
> UserAnonymous comAtlassianConfluencePluginsRestapiResourcesUserResourceGetAnonymousUserGet(opts)

Get anonymous user

Returns information about how anonymous users are represented, like the profile picture and display name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the user to expand.    - `operations` returns the operations that the user is allowed to do.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserResourceGetAnonymousUserGet(opts, (error, data, response) => {
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
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the user to expand.    - &#x60;operations&#x60; returns the operations that the user is allowed to do. | [optional] 

### Return type

[**UserAnonymous**](UserAnonymous.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserLookup"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserLookup**
> BulkUserLookupArray comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserLookup(accountId, opts)

Get multiple users using ids

Returns user details for the ids provided in request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let accountId = "accountId_example"; // String | A list of accountId's of users to be returned.
let opts = { 
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the user to expand.    - `operations` returns the operations that the user is allowed to do.   - `details.personal` returns the 'Personal' details in the user's profile, like the 'Email' and 'Phone'.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - `details.business` returns the 'Company' details in the user's profile, like the 'Position' and 'Department'.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - personalSpace returns the user's personal space, if it exists.
  'limit': 56 // Number | The maximum number of results returned. Currently API returns 200 results max. If more that 200 ids are passed first 200 will be returned.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserLookup(accountId, opts, (error, data, response) => {
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
 **accountId** | **String**| A list of accountId&#x27;s of users to be returned. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the user to expand.    - &#x60;operations&#x60; returns the operations that the user is allowed to do.   - &#x60;details.personal&#x60; returns the &#x27;Personal&#x27; details in the user&#x27;s profile, like the &#x27;Email&#x27; and &#x27;Phone&#x27;.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - &#x60;details.business&#x60; returns the &#x27;Company&#x27; details in the user&#x27;s profile, like the &#x27;Position&#x27; and &#x27;Department&#x27;.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - personalSpace returns the user&#x27;s personal space, if it exists. | [optional] 
 **limit** | **Number**| The maximum number of results returned. Currently API returns 200 results max. If more that 200 ids are passed first 200 will be returned. | [optional] 

### Return type

[**BulkUserLookupArray**](BulkUserLookupArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserMigration"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserMigration**
> MigratedUserArray comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserMigration(opts)

Get accountIds for users

Returns the accountIds for the users specified in the key or username parameters. Note that multiple key and username parameters can be specified.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let opts = { 
  'key': ["key_example"], // [String] | The key of a user. To specify multiple users, pass multiple key parameters separated by ampersands. For example, key=mia&key=alana. Required if username isn't provided. Cannot be provided if username is present.
  'username': ["username_example"], // [String] | The username of a user. To specify multiple users, pass multiple username parameters separated by ampersands. For example, username=mia&username=alana. Required if key isn't provided. Cannot be provided if key is present.
  'start': 56, // Number | The index of the first item to return in a page of results (page offset).
  'limit': 56 // Number | The maximum number of results to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserResourceGetBulkUserMigration(opts, (error, data, response) => {
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
 **key** | [**[String]**](String.md)| The key of a user. To specify multiple users, pass multiple key parameters separated by ampersands. For example, key&#x3D;mia&amp;key&#x3D;alana. Required if username isn&#x27;t provided. Cannot be provided if username is present. | [optional] 
 **username** | [**[String]**](String.md)| The username of a user. To specify multiple users, pass multiple username parameters separated by ampersands. For example, username&#x3D;mia&amp;username&#x3D;alana. Required if key isn&#x27;t provided. Cannot be provided if key is present. | [optional] 
 **start** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] 
 **limit** | **Number**| The maximum number of results to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**MigratedUserArray**](MigratedUserArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserResourceGetCurrentUserGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserResourceGetCurrentUserGet**
> User comAtlassianConfluencePluginsRestapiResourcesUserResourceGetCurrentUserGet(opts)

Get current user

Returns the currently logged-in user. This includes information about the user, like the display name, userKey, account ID, profile picture, and more.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the user to expand.    - `operations` returns the operations that the user is allowed to do.   - `details.personal` returns the 'Personal' details in the user's profile, like the 'Email' and 'Phone'.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - `details.business` returns the 'Company' details in the user's profile, like the 'Position' and 'Department'.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - personalSpace returns the user's personal space, if it exists.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserResourceGetCurrentUserGet(opts, (error, data, response) => {
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
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the user to expand.    - &#x60;operations&#x60; returns the operations that the user is allowed to do.   - &#x60;details.personal&#x60; returns the &#x27;Personal&#x27; details in the user&#x27;s profile, like the &#x27;Email&#x27; and &#x27;Phone&#x27;.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - &#x60;details.business&#x60; returns the &#x27;Company&#x27; details in the user&#x27;s profile, like the &#x27;Position&#x27; and &#x27;Department&#x27;.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - personalSpace returns the user&#x27;s personal space, if it exists. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserResourceGetGroupMembershipsForUserGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserResourceGetGroupMembershipsForUserGet**
> GroupArray comAtlassianConfluencePluginsRestapiResourcesUserResourceGetGroupMembershipsForUserGet(accountId, opts)

Get group memberships for user

Returns the groups that a user is a member of.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let accountId = "accountId_example"; // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'start': 56, // Number | The starting index of the returned groups.
  'limit': 56 // Number | The maximum number of groups to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserResourceGetGroupMembershipsForUserGet(accountId, opts, (error, data, response) => {
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
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **start** | **Number**| The starting index of the returned groups. | [optional] 
 **limit** | **Number**| The maximum number of groups to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**GroupArray**](GroupArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserResourceGetUserGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserResourceGetUserGet**
> User comAtlassianConfluencePluginsRestapiResourcesUserResourceGetUserGet(accountId, opts)

Get user

Returns a user. This includes information about the user, such as the display name, account ID, profile picture, and more. The information returned may be restricted by the user&#x27;s profile visibility settings.  **Note:** to add, edit, or delete users in your organization, see the [user management REST API](/cloud/admin/user-management/about/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let accountId = "accountId_example"; // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the user to expand.    - `operations` returns the operations that the user is allowed to do.   - `details.personal` returns the 'Personal' details in the user's profile, like the 'Email' and 'Phone'.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - `details.business` returns the 'Company' details in the user's profile, like the 'Position' and 'Department'.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - personalSpace returns the user's personal space, if it exists.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserResourceGetUserGet(accountId, opts, (error, data, response) => {
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
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the user to expand.    - &#x60;operations&#x60; returns the operations that the user is allowed to do.   - &#x60;details.personal&#x60; returns the &#x27;Personal&#x27; details in the user&#x27;s profile, like the &#x27;Email&#x27; and &#x27;Phone&#x27;.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - &#x60;details.business&#x60; returns the &#x27;Company&#x27; details in the user&#x27;s profile, like the &#x27;Position&#x27; and &#x27;Department&#x27;.   Note that these fields have been deprecated due to privacy changes. See the   [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)   for details.   - personalSpace returns the user&#x27;s personal space, if it exists. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddContentWatcherPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddContentWatcherPost**
> comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddContentWatcherPost(contentId, accountId, opts)

Add content watcher

Adds a user as a watcher to a piece of content. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  Note, you must add the &#x60;X-Atlassian-Token: no-check&#x60; header when making a request, as this operation has XSRF protection.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let contentId = "contentId_example"; // String | The ID of the content to add the watcher to.
let accountId = "accountId_example"; // String | The `accountId` of the user to be added as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddContentWatcherPost(contentId, accountId, opts, (error, data, response) => {
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
 **contentId** | **String**| The ID of the content to add the watcher to. | 
 **accountId** | **String**| The &#x60;accountId&#x60; of the user to be added as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddLabelWatcherPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddLabelWatcherPost**
> comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddLabelWatcherPost(labelName, accountId, opts)

Add label watcher

Adds a user as a watcher to a label. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  Note, you must add the &#x60;X-Atlassian-Token: no-check&#x60; header when making a request, as this operation has XSRF protection.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let labelName = "labelName_example"; // String | The name of the label to add the watcher to.
let accountId = "accountId_example"; // String | The `accountId` of the user to be added as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddLabelWatcherPost(labelName, accountId, opts, (error, data, response) => {
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
 **labelName** | **String**| The name of the label to add the watcher to. | 
 **accountId** | **String**| The &#x60;accountId&#x60; of the user to be added as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddSpaceWatcherPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddSpaceWatcherPost**
> comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddSpaceWatcherPost(spaceKey, accountId, opts)

Add space watcher

Adds a user as a watcher to a space. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  Note, you must add the &#x60;X-Atlassian-Token: no-check&#x60; header when making a request, as this operation has XSRF protection.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to add the watcher to.
let accountId = "accountId_example"; // String | The `accountId` of the user to be added as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceAddSpaceWatcherPost(spaceKey, accountId, opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to add the watcher to. | 
 **accountId** | **String**| The &#x60;accountId&#x60; of the user to be added as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceGetContentWatchStatusGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceGetContentWatchStatusGet**
> UserWatch comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceGetContentWatchStatusGet(contentId, accountId, opts)

Get content watch status

Returns whether a user is watching a piece of content. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let contentId = "contentId_example"; // String | The ID of the content to be queried for whether the specified user is watching it.
let accountId = "accountId_example"; // String | The `accountId` of the user to be queried for whether they are watching the content. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceGetContentWatchStatusGet(contentId, accountId, opts, (error, data, response) => {
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
 **contentId** | **String**| The ID of the content to be queried for whether the specified user is watching it. | 
 **accountId** | **String**| The &#x60;accountId&#x60; of the user to be queried for whether they are watching the content. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

[**UserWatch**](UserWatch.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingLabelGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingLabelGet**
> UserWatch comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingLabelGet(labelName, accountId, opts)

Get label watch status

Returns whether a user is watching a label. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let labelName = "labelName_example"; // String | The name of the label to be queried for whether the specified user is watching it.
let accountId = "accountId_example"; // String | The `accountId` of the user to be queried for whether they are watching the label. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingLabelGet(labelName, accountId, opts, (error, data, response) => {
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
 **labelName** | **String**| The name of the label to be queried for whether the specified user is watching it. | 
 **accountId** | **String**| The &#x60;accountId&#x60; of the user to be queried for whether they are watching the label. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

[**UserWatch**](UserWatch.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingSpaceGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingSpaceGet**
> UserWatch comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingSpaceGet(spaceKey, accountId, opts)

Get space watch status

Returns whether a user is watching a space. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to be queried for whether the specified user is watching it.
let accountId = "accountId_example"; // String | The `accountId` of the user to be queried for whether they are watching the space. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceIsWatchingSpaceGet(spaceKey, accountId, opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to be queried for whether the specified user is watching it. | 
 **accountId** | **String**| The &#x60;accountId&#x60; of the user to be queried for whether they are watching the space. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

[**UserWatch**](UserWatch.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveContentWatcherDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveContentWatcherDelete**
> comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveContentWatcherDelete(contentId, accountId, opts)

Remove content watcher

Removes a user as a watcher from a piece of content. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let contentId = "contentId_example"; // String | The ID of the content to remove the watcher from.
let accountId = "accountId_example"; // String | The `accountId` of the user to be removed as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveContentWatcherDelete(contentId, accountId, opts, (error, data, response) => {
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
 **contentId** | **String**| The ID of the content to remove the watcher from. | 
 **accountId** | **String**| The &#x60;accountId&#x60; of the user to be removed as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveLabelWatcherDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveLabelWatcherDelete**
> comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveLabelWatcherDelete(labelName, accountId, opts)

Remove label watcher

Removes a user as a watcher from a label. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let labelName = "labelName_example"; // String | The name of the label to remove the watcher from.
let accountId = "accountId_example"; // String | The `accountId` of the user to be removed as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveLabelWatcherDelete(labelName, accountId, opts, (error, data, response) => {
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
 **labelName** | **String**| The name of the label to remove the watcher from. | 
 **accountId** | **String**| The &#x60;accountId&#x60; of the user to be removed as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveSpaceWatchDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveSpaceWatchDelete**
> comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveSpaceWatchDelete(spaceKey, accountId, opts)

Remove space watch

Removes a user as a watcher from a space. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.UserApi();
let spaceKey = "spaceKey_example"; // String | The key of the space to remove the watcher from.
let accountId = "accountId_example"; // String | The `accountId` of the user to be removed as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesUserWatchResourceRemoveSpaceWatchDelete(spaceKey, accountId, opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space to remove the watcher from. | 
 **accountId** | **String**| The &#x60;accountId&#x60; of the user to be removed as a watcher. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

