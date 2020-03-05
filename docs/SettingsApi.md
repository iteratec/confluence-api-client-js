# TheConfluenceCloudRestApi.SettingsApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceGetLookAndFeelSettingsGet**](SettingsApi.md#comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceGetLookAndFeelSettingsGet) | **GET** /api/settings/lookandfeel | Get look and feel settings
[**comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceResetLookAndFeelSettingsDelete**](SettingsApi.md#comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceResetLookAndFeelSettingsDelete) | **DELETE** /api/settings/lookandfeel/custom | Reset look and feel settings
[**comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceSetLookAndFeelSettingsPut**](SettingsApi.md#comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceSetLookAndFeelSettingsPut) | **PUT** /api/settings/lookandfeel/selected | Set look and feel settings
[**comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceUpdateLookAndFeelSettingsPost**](SettingsApi.md#comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceUpdateLookAndFeelSettingsPost) | **POST** /api/settings/lookandfeel/custom | Update look and feel settings
[**comAtlassianConfluencePluginsRestapiResourcesSystemInfoResourceGetSystemInfoGet**](SettingsApi.md#comAtlassianConfluencePluginsRestapiResourcesSystemInfoResourceGetSystemInfoGet) | **GET** /api/settings/systemInfo | Get system info
[**comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetGlobalThemeGet**](SettingsApi.md#comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetGlobalThemeGet) | **GET** /api/settings/theme/selected | Get global theme
[**comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemeGet**](SettingsApi.md#comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemeGet) | **GET** /api/settings/theme/{themeKey} | Get theme
[**comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemesGet**](SettingsApi.md#comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemesGet) | **GET** /api/settings/theme | Get themes

<a name="comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceGetLookAndFeelSettingsGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceGetLookAndFeelSettingsGet**
> LookAndFeelSettings comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceGetLookAndFeelSettingsGet(opts)

Get look and feel settings

Returns the look and feel settings for the site or a single space. This includes attributes such as the color scheme, padding, and border radius.  The look and feel settings for a space can be inherited from the global look and feel settings or provided by a theme.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SettingsApi();
let opts = { 
  'spaceKey': "spaceKey_example" // String | The key of the space for which the look and feel settings will be returned. If this is not set, only the global look and feel settings are returned.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceGetLookAndFeelSettingsGet(opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space for which the look and feel settings will be returned. If this is not set, only the global look and feel settings are returned. | [optional] 

### Return type

[**LookAndFeelSettings**](LookAndFeelSettings.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceResetLookAndFeelSettingsDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceResetLookAndFeelSettingsDelete**
> comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceResetLookAndFeelSettingsDelete(opts)

Reset look and feel settings

Resets the custom look and feel settings for the site or a single space. This changes the values of the custom settings to be the same as the default settings. It does not change which settings (default or custom) are selected. Note, the default space settings are inherited from the current global settings.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SettingsApi();
let opts = { 
  'spaceKey': "spaceKey_example" // String | The key of the space for which the look and feel settings will be reset. If this is not set, the global look and feel settings will be reset.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceResetLookAndFeelSettingsDelete(opts, (error, data, response) => {
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
 **spaceKey** | **String**| The key of the space for which the look and feel settings will be reset. If this is not set, the global look and feel settings will be reset. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceSetLookAndFeelSettingsPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceSetLookAndFeelSettingsPut**
> LookAndFeelSettings comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceSetLookAndFeelSettingsPut(body, opts)

Set look and feel settings

Sets the look and feel settings to either the default settings or the custom settings, for the site or a single space. Note, the default space settings are inherited from the current global settings.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SettingsApi();
let body = new TheConfluenceCloudRestApi.LookAndFeelType(); // LookAndFeelType | The look and feel settings to be set.
let opts = { 
  'spaceKey': "spaceKey_example" // String | The key of the space for which the look and feel settings will be set. If this is not set, the global look and feel settings will be set.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceSetLookAndFeelSettingsPut(body, opts, (error, data, response) => {
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
 **body** | [**LookAndFeelType**](LookAndFeelType.md)| The look and feel settings to be set. | 
 **spaceKey** | **String**| The key of the space for which the look and feel settings will be set. If this is not set, the global look and feel settings will be set. | [optional] 

### Return type

[**LookAndFeelSettings**](LookAndFeelSettings.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceUpdateLookAndFeelSettingsPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceUpdateLookAndFeelSettingsPost**
> LookAndFeelUpdated comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceUpdateLookAndFeelSettingsPost(body, opts)

Update look and feel settings

Updates the look and feel settings for the site or for a single space. If custom settings exist, they are updated. If no custom settings exist, then a set of custom settings is created.  Note, if a theme is selected for a space, the space look and feel settings are provided by the theme and cannot be overridden.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Admin&#x27; permission for the space.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SettingsApi();
let body = new TheConfluenceCloudRestApi.LookAndFeel(); // LookAndFeel | The updated settings. All values for the settings must be included,
regardless of whether they are being changed.

One way to create the request body is to copy the settings from the
response body of [Get look and feel settings](#api-settings-lookandfeel-get)
and modify it as needed.
let opts = { 
  'spaceKey': "spaceKey_example" // String | The key of the space for which the look and feel settings will be updated. If this is not set, the global look and feel settings will be updated.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesLookAndFeelResourceUpdateLookAndFeelSettingsPost(body, opts, (error, data, response) => {
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
 **body** | [**LookAndFeel**](LookAndFeel.md)| The updated settings. All values for the settings must be included,
regardless of whether they are being changed.

One way to create the request body is to copy the settings from the
response body of [Get look and feel settings](#api-settings-lookandfeel-get)
and modify it as needed. | 
 **spaceKey** | **String**| The key of the space for which the look and feel settings will be updated. If this is not set, the global look and feel settings will be updated. | [optional] 

### Return type

[**LookAndFeelUpdated**](LookAndFeelUpdated.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesSystemInfoResourceGetSystemInfoGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesSystemInfoResourceGetSystemInfoGet**
> SystemInfoEntity comAtlassianConfluencePluginsRestapiResourcesSystemInfoResourceGetSystemInfoGet()

Get system info

Returns the system information for the Confluence Cloud tenant. This information is used by Atlassian.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SettingsApi();
apiInstance.comAtlassianConfluencePluginsRestapiResourcesSystemInfoResourceGetSystemInfoGet((error, data, response) => {
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

[**SystemInfoEntity**](SystemInfoEntity.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetGlobalThemeGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetGlobalThemeGet**
> Theme comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetGlobalThemeGet()

Get global theme

Returns the globally assigned theme.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SettingsApi();
apiInstance.comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetGlobalThemeGet((error, data, response) => {
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

[**Theme**](Theme.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemeGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemeGet**
> Theme comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemeGet(themeKey)

Get theme

Returns a theme. This includes information about the theme name, description, and icon.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SettingsApi();
let themeKey = "themeKey_example"; // String | The key of the theme to be returned.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemeGet(themeKey, (error, data, response) => {
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
 **themeKey** | **String**| The key of the theme to be returned. | 

### Return type

[**Theme**](Theme.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemesGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemesGet**
> ThemeArray comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemesGet(opts)

Get themes

Returns all themes, not including the default theme.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.SettingsApi();
let opts = { 
  'start': 56, // Number | The starting index of the returned themes.
  'limit': 56 // Number | The maximum number of themes to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesThemeResourceGetThemesGet(opts, (error, data, response) => {
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
 **start** | **Number**| The starting index of the returned themes. | [optional] 
 **limit** | **Number**| The maximum number of themes to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**ThemeArray**](ThemeArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

