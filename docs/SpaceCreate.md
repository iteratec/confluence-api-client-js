# TheConfluenceCloudRestApi.SpaceCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | The key for the new space. Format: See [Space keys](https://confluence.atlassian.com/x/lqNMMQ). | 
**name** | **String** | The name of the new space. | 
**description** | [**SpaceDescriptionCreate**](SpaceDescriptionCreate.md) |  | [optional] 
**permissions** | [**[SpacePermission]**](SpacePermission.md) | The permissions for the new space. If no permissions are provided, the [Confluence default space permissions](https://confluence.atlassian.com/x/UAgzKw#CreateaSpace-Spacepermissions) are applied. Note, for security reasons, permissions cannot be changed via the API after the space has been created, and must be changed via the user interface instead. | [optional] 
