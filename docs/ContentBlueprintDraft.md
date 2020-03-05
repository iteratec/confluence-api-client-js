# TheConfluenceCloudRestApi.ContentBlueprintDraft

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | [**ContentBlueprintDraftVersion**](ContentBlueprintDraftVersion.md) |  | 
**title** | **String** | The title of the content. If you don&#x27;t want to change the title, set this to the current title of the draft. | 
**type** | **String** | The type of content. Set this to &#x60;page&#x60;. | 
**status** | **String** | The status of the content. Set this to &#x60;current&#x60; or omit it altogether. | [optional] [default to &#x27;current&#x27;]
**space** | [**ContentBlueprintDraftSpace**](ContentBlueprintDraftSpace.md) |  | [optional] 
**ancestors** | [**[ContentBlueprintDraftAncestors]**](ContentBlueprintDraftAncestors.md) | The new ancestor (i.e. parent page) for the content. If you have specified an ancestor, you must also specify a &#x60;space&#x60; property in the request body for the space that the ancestor is in.  Note, if you specify more than one ancestor, the last ID in the array will be selected as the parent page for the content. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `page` (value: `"page"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `current` (value: `"current"`)

