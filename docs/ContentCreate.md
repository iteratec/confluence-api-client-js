# TheConfluenceCloudRestApi.ContentCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the draft content. Required when publishing a draft. | [optional] 
**title** | **String** |  | 
**type** | **String** | The type of the new content. Custom content types defined by apps are also supported. | 
**space** | [**ContentCreateSpace**](ContentCreateSpace.md) |  | 
**status** | **String** | The status of the new content. | [optional] [default to &#x27;current&#x27;]
**ancestors** | [**[ContentCreateAncestors]**](ContentCreateAncestors.md) | The parent content of the new content. Only one parent content &#x60;id&#x60; can be specified. | [optional] 
**body** | [**ContentCreateBody**](ContentCreateBody.md) |  | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `page` (value: `"page"`)
* `blogpost` (value: `"blogpost"`)
* `comment` (value: `"comment"`)
* `attachment` (value: `"attachment"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `current` (value: `"current"`)
* `trashed` (value: `"trashed"`)
* `historical` (value: `"historical"`)
* `draft` (value: `"draft"`)

