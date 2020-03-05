# TheConfluenceCloudRestApi.ContentTemplateUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | **String** | The ID of the template being updated. | 
**name** | **String** | The name of the template. Set to the current &#x60;name&#x60; if this field is not being updated. | 
**templateType** | **String** | The type of the template. Set to &#x60;page&#x60;. | 
**body** | [**ContentBodyCreate**](ContentBodyCreate.md) |  | 
**description** | **String** | A description of the template. | [optional] 
**labels** | [**[Label]**](Label.md) | Labels for the template. | [optional] 
**space** | [**ContentTemplateUpdateSpace**](ContentTemplateUpdateSpace.md) |  | [optional] 

<a name="TemplateTypeEnum"></a>
## Enum: TemplateTypeEnum

* `page` (value: `"page"`)

