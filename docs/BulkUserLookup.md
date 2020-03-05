# TheConfluenceCloudRestApi.BulkUserLookup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**username** | **String** | This property is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
**userKey** | **String** | This property is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
**accountId** | **String** | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
**accountType** | **String** | The account type of the user, may return empty string if unavailable. | 
**email** | **String** | The email address of the user. Depending on the user&#x27;s privacy setting, this may return an empty string. | 
**publicName** | **String** | The public name or nickname of the user. Will always contain a value. | 
**profilePicture** | [**Icon**](Icon.md) |  | 
**displayName** | **String** | The display name of the user. Depending on the user&#x27;s privacy setting, this may be the same as publicName. | 
**operations** | [**[OperationCheckResult]**](OperationCheckResult.md) |  | [optional] 
**details** | [**UserDetails**](UserDetails.md) |  | [optional] 
**personalSpace** | [**Space**](Space.md) |  | [optional] 
**expandable** | [**BulkUserLookupExpandable**](BulkUserLookupExpandable.md) |  | 
**links** | [**GenericLinks**](GenericLinks.md) |  | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `known` (value: `"known"`)
* `unknown` (value: `"unknown"`)
* `anonymous` (value: `"anonymous"`)
* `user` (value: `"user"`)

