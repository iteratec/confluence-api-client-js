# TheConfluenceCloudRestApi.ContentRestrictionUpdateRestrictionsUser

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Set to &#x27;known&#x27;. | 
**username** | **String** | This property is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
**userKey** | **String** | This property is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
**accountId** | **String** | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `known` (value: `"known"`)
* `unknown` (value: `"unknown"`)
* `anonymous` (value: `"anonymous"`)
* `user` (value: `"user"`)

