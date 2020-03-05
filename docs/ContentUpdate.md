# TheConfluenceCloudRestApi.ContentUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | [**ContentUpdateVersion**](ContentUpdateVersion.md) |  | 
**title** | **String** | The updated title of the content. If you are not changing this field, set this to the current &#x60;title&#x60;. | 
**type** | **String** | The type of content. Set this to the current type of the content. | 
**status** | **String** | The updated status of the content. Note, if you change the status of a page from &#x27;current&#x27; to &#x27;draft&#x27; and it has an existing draft, the existing draft will be deleted in favor of the updated page. | [optional] 
**ancestors** | [**[ContentCreateAncestors]**](ContentCreateAncestors.md) | The new parent for the content. Only one parent content &#x27;id&#x27; can be specified. | [optional] 
**body** | [**ContentUpdateBody**](ContentUpdateBody.md) |  | [optional] 

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

