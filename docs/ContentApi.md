# TheConfluenceCloudRestApi.ContentApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateAttachmentsPost**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateAttachmentsPost) | **POST** /api/content/{id}/child/attachment | Create attachment
[**comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateOrUpdateAttachmentsPut**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateOrUpdateAttachmentsPut) | **PUT** /api/content/{id}/child/attachment | Create or update attachment
[**comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceGetAttachmentsGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceGetAttachmentsGet) | **GET** /api/content/{id}/child/attachment | Get attachments
[**comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentDataPost**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentDataPost) | **POST** /api/content/{id}/child/attachment/{attachmentId}/data | Update attachment data
[**comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentPropertiesPut**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentPropertiesPut) | **PUT** /api/content/{id}/child/attachment/{attachmentId} | Update attachment properties
[**comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenByTypeGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenByTypeGet) | **GET** /api/content/{id}/child/{type} | Get content children by type
[**comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenGet) | **GET** /api/content/{id}/child | Get content children
[**comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentCommentsGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentCommentsGet) | **GET** /api/content/{id}/child/comment | Get content comments
[**comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishLegacyDraftPost**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishLegacyDraftPost) | **POST** /api/content/blueprint/instance/{draftId} | Publish legacy draft
[**comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishSharedDraftPut**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishSharedDraftPut) | **PUT** /api/content/blueprint/instance/{draftId} | Publish shared draft
[**comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceAddLabelsToContentPost**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceAddLabelsToContentPost) | **POST** /api/content/{id}/label | Add labels to content
[**comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceGetLabelsForContentGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceGetLabelsForContentGet) | **GET** /api/content/{id}/label | Get labels for content
[**comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentDelete**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentDelete) | **DELETE** /api/content/{id}/label/{label} | Remove label from content
[**comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentUsingQueryParameterDelete**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentUsingQueryParameterDelete) | **DELETE** /api/content/{id}/label | Remove label from content using query parameter
[**comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForPageGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForPageGet) | **GET** /api/content/{id}/notification/child-created | Get watches for page
[**comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForSpaceGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForSpaceGet) | **GET** /api/content/{id}/notification/created | Get watches for space
[**comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyForKeyPost**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyForKeyPost) | **POST** /api/content/{id}/property/{key} | Create content property for key
[**comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyPost**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyPost) | **POST** /api/content/{id}/property | Create content property
[**comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceDeleteContentPropertyDelete**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceDeleteContentPropertyDelete) | **DELETE** /api/content/{id}/property/{key} | Delete content property
[**comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertiesGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertiesGet) | **GET** /api/content/{id}/property | Get content properties
[**comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertyGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertyGet) | **GET** /api/content/{id}/property/{key} | Get content property
[**comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceUpdateContentPropertyPut**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceUpdateContentPropertyPut) | **PUT** /api/content/{id}/property/{key} | Update content property
[**comAtlassianConfluencePluginsRestapiResourcesContentResourceCreateContentPost**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentResourceCreateContentPost) | **POST** /api/content | Create content
[**comAtlassianConfluencePluginsRestapiResourcesContentResourceDeleteContentDelete**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentResourceDeleteContentDelete) | **DELETE** /api/content/{id} | Delete content
[**comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentByIdGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentByIdGet) | **GET** /api/content/{id} | Get content by ID
[**comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentGet) | **GET** /api/content | Get content
[**comAtlassianConfluencePluginsRestapiResourcesContentResourceGetHistoryForContentGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentResourceGetHistoryForContentGet) | **GET** /api/content/{id}/history | Get history for content
[**comAtlassianConfluencePluginsRestapiResourcesContentResourceGetMacroBodyByMacroIdGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentResourceGetMacroBodyByMacroIdGet) | **GET** /api/content/{id}/history/{version}/macro/id/{macroId} | Get macro body by macro ID
[**comAtlassianConfluencePluginsRestapiResourcesContentResourceSearchContentByCQLGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentResourceSearchContentByCQLGet) | **GET** /api/content/search | Search content by CQL
[**comAtlassianConfluencePluginsRestapiResourcesContentResourceUpdateContentPut**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentResourceUpdateContentPut) | **PUT** /api/content/{id} | Update content
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddGroupToContentRestrictionPut**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddGroupToContentRestrictionPut) | **PUT** /api/content/{id}/restriction/byOperation/{operationKey}/group/{groupName} | Add group to content restriction
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddRestrictionsPost**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddRestrictionsPost) | **POST** /api/content/{id}/restriction | Add restrictions
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddUserToContentRestrictionPut**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddUserToContentRestrictionPut) | **PUT** /api/content/{id}/restriction/byOperation/{operationKey}/user | Add user to content restriction
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceDeleteRestrictionsDelete**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceDeleteRestrictionsDelete) | **DELETE** /api/content/{id}/restriction | Delete restrictions
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForGroupGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForGroupGet) | **GET** /api/content/{id}/restriction/byOperation/{operationKey}/group/{groupName} | Get content restriction status for group
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForUserGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForUserGet) | **GET** /api/content/{id}/restriction/byOperation/{operationKey}/user | Get content restriction status for user
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsByOperationGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsByOperationGet) | **GET** /api/content/{id}/restriction/byOperation | Get restrictions by operation
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsForOperationGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsForOperationGet) | **GET** /api/content/{id}/restriction/byOperation/{operationKey} | Get restrictions for operation
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsGet) | **GET** /api/content/{id}/restriction | Get restrictions
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveGroupFromContentRestrictionDelete**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveGroupFromContentRestrictionDelete) | **DELETE** /api/content/{id}/restriction/byOperation/{operationKey}/group/{groupName} | Remove group from content restriction
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveUserFromContentRestrictionDelete**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveUserFromContentRestrictionDelete) | **DELETE** /api/content/{id}/restriction/byOperation/{operationKey}/user | Remove user from content restriction
[**comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceUpdateRestrictionsPut**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceUpdateRestrictionsPut) | **PUT** /api/content/{id}/restriction | Update restrictions
[**comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceDeleteContentVersionDelete**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceDeleteContentVersionDelete) | **DELETE** /api/content/{id}/version/{versionNumber} | Delete content version
[**comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionGet) | **GET** /api/content/{id}/version/{versionNumber} | Get content version
[**comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionsGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionsGet) | **GET** /api/content/{id}/version | Get content versions
[**comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceRestoreContentVersionPost**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceRestoreContentVersionPost) | **POST** /api/content/{id}/version | Restore content version
[**comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceDescendantsOfTypeGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceDescendantsOfTypeGet) | **GET** /api/content/{id}/descendant/{type} | Get content descendants by type
[**comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceGetContentDescendantsGet**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceGetContentDescendantsGet) | **GET** /api/content/{id}/descendant | Get content descendants
[**comAtlassianConfluencePluginsRestapiResourcesPageHierarchyResourceCopyPageHierarchyPost**](ContentApi.md#comAtlassianConfluencePluginsRestapiResourcesPageHierarchyResourceCopyPageHierarchyPost) | **POST** /api/content/{id}/pagehierarchy/copy | Copy page hierarchy

<a name="comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateAttachmentsPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateAttachmentsPost**
> ContentArray comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateAttachmentsPost(id, opts)

Create attachment

Adds an attachment to a piece of content. This method only adds a new attachment. If you want to update an existing attachment, use [Create or update attachments](#api-content-id-child-attachment-put).  Note, you must set a &#x60;X-Atlassian-Token: nocheck&#x60; header on the request for this method, otherwise it will be blocked. This protects against XSRF attacks, which is necessary as this method accepts multipart/form-data.  The media type &#x27;multipart/form-data&#x27; is defined in [RFC 1867](https://www.ietf.org/rfc/rfc1867.txt). Most client libraries have classes that make it easier to implement multipart posts, like the [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html) Java class provided by Apache HTTP Components.  Example: This curl command attaches a file (&#x27;example.txt&#x27;) to a container (id&#x3D;&#x27;123&#x27;) with a comment and &#x60;minorEdits&#x60;&#x3D;true.  &#x60;&#x60;&#x60; bash curl -D- \\   -u admin:admin \\   -X POST \\   -H \&quot;X-Atlassian-Token: nocheck\&quot; \\   -F \&quot;file&#x3D;@example.txt\&quot; \\   -F \&quot;minorEdit&#x3D;true\&quot; \\   -F \&quot;comment&#x3D;Example attachment comment\&quot; \\   http://myhost/rest/api/content/123/child/attachment &#x60;&#x60;&#x60; **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to add the attachment to.
let opts = { 
  'file': file_example // Blob | 
  'comment': comment_example // Blob | 
  'minorEdit': minorEdit_example // Blob | 
  'status': "status_example" // String | The status of the content that the attachment is being added to.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateAttachmentsPost(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to add the attachment to. | 
 **file** | **Blob**|  | [optional] 
 **comment** | **Blob**|  | [optional] 
 **minorEdit** | **Blob**|  | [optional] 
 **status** | **String**| The status of the content that the attachment is being added to. | [optional] 

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateOrUpdateAttachmentsPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateOrUpdateAttachmentsPut**
> ContentArray comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateOrUpdateAttachmentsPut(id, opts)

Create or update attachment

Adds an attachment to a piece of content. If the attachment already exists for the content, then the attachment is updated (i.e. a new version of the attachment is created).  Note, you must set a &#x60;X-Atlassian-Token: nocheck&#x60; header on the request for this method, otherwise it will be blocked. This protects against XSRF attacks, which is necessary as this method accepts multipart/form-data.  The media type &#x27;multipart/form-data&#x27; is defined in [RFC 1867](https://www.ietf.org/rfc/rfc1867.txt). Most client libraries have classes that make it easier to implement multipart posts, like the [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html) Java class provided by Apache HTTP Components.  Example: This curl command attaches a file (&#x27;example.txt&#x27;) to a piece of content (id&#x3D;&#x27;123&#x27;) with a comment and &#x60;minorEdits&#x60;&#x3D;true. If the &#x27;example.txt&#x27; file already exists, it will update it with a new version of the attachment.  &#x60;&#x60;&#x60; bash curl -D- \\   -u admin:admin \\   -X PUT \\   -H \&quot;X-Atlassian-Token: nocheck\&quot; \\   -F \&quot;file&#x3D;@example.txt\&quot; \\   -F \&quot;minorEdit&#x3D;true\&quot; \\   -F \&quot;comment&#x3D;Example attachment comment\&quot; \\   http://myhost/rest/api/content/123/child/attachment &#x60;&#x60;&#x60; **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to add the attachment to.
let opts = { 
  'file': file_example // Blob | 
  'comment': comment_example // Blob | 
  'minorEdit': minorEdit_example // Blob | 
  'status': "status_example" // String | The status of the content that the attachment is being added to. This should always be set to 'current'.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceCreateOrUpdateAttachmentsPut(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to add the attachment to. | 
 **file** | **Blob**|  | [optional] 
 **comment** | **Blob**|  | [optional] 
 **minorEdit** | **Blob**|  | [optional] 
 **status** | **String**| The status of the content that the attachment is being added to. This should always be set to &#x27;current&#x27;. | [optional] 

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceGetAttachmentsGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceGetAttachmentsGet**
> ContentArray comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceGetAttachmentsGet(id, opts)

Get attachments

Returns the attachments for a piece of content.  By default, the following objects are expanded: &#x60;metadata&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content. If the content is a blog post, &#x27;View&#x27; permission for the space is required.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its attachments.
let opts = { 
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
  'start': 56, // Number | The starting index of the returned attachments.
  'limit': 56, // Number | The maximum number of attachments to return per page. Note, this may be restricted by fixed system limits.
  'filename': "filename_example", // String | Filter the results to attachments that match the filename.
  'mediaType': "mediaType_example" // String | Filter the results to attachments that match the media type.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceGetAttachmentsGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its attachments. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 
 **start** | **Number**| The starting index of the returned attachments. | [optional] 
 **limit** | **Number**| The maximum number of attachments to return per page. Note, this may be restricted by fixed system limits. | [optional] 
 **filename** | **String**| Filter the results to attachments that match the filename. | [optional] 
 **mediaType** | **String**| Filter the results to attachments that match the media type. | [optional] 

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentDataPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentDataPost**
> Content comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentDataPost(idattachmentId)

Update attachment data

Updates the binary data of an attachment, given the attachment ID, and optionally the comment and the minor edit field.  This method is essentially the same as [Create or update attachments](#api-content-id-child-attachment-put), except that it matches the attachment ID rather than the name.  Note, you must set a &#x60;X-Atlassian-Token: nocheck&#x60; header on the request for this method, otherwise it will be blocked. This protects against XSRF attacks, which is necessary as this method accepts multipart/form-data.  The media type &#x27;multipart/form-data&#x27; is defined in [RFC 1867](https://www.ietf.org/rfc/rfc1867.txt). Most client libraries have classes that make it easier to implement multipart posts, like the [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html) Java class provided by Apache HTTP Components.  Example: This curl command updates an attachment (id&#x3D;&#x27;att456&#x27;) that is attached to a piece of content (id&#x3D;&#x27;123&#x27;) with a comment and &#x60;minorEdits&#x60;&#x3D;true.  &#x60;&#x60;&#x60; bash curl -D- \\   -u admin:admin \\   -X POST \\   -H \&quot;X-Atlassian-Token: nocheck\&quot; \\   -F \&quot;file&#x3D;@example.txt\&quot; \\   -F \&quot;minorEdit&#x3D;true\&quot; \\   -F \&quot;comment&#x3D;Example attachment comment\&quot; \\   http://myhost/rest/api/content/123/child/attachment/att456/data &#x60;&#x60;&#x60; **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the attachment is attached to.
let attachmentId = "attachmentId_example"; // String | The ID of the attachment to update.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentDataPost(idattachmentId, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the attachment is attached to. | 
 **attachmentId** | **String**| The ID of the attachment to update. | 
 **file** | **Blob**|  | [optional] 
 **comment** | **Blob**|  | [optional] 
 **minorEdit** | **Blob**|  | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentPropertiesPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentPropertiesPut**
> Content comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentPropertiesPut(bodyidattachmentId)

Update attachment properties

Updates the attachment properties, i.e. the non-binary data of an attachment like the filename, media-type, comment, and parent container.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = new TheConfluenceCloudRestApi.AttachmentUpdate(); // AttachmentUpdate | The details of the attachment to be updated.
let id = "id_example"; // String | The ID of the content that the attachment is attached to.
let attachmentId = "attachmentId_example"; // String | The ID of the attachment to update.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesAttachmentResourceUpdateAttachmentPropertiesPut(bodyidattachmentId, (error, data, response) => {
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
 **body** | [**AttachmentUpdate**](AttachmentUpdate.md)| The details of the attachment to be updated. | 
 **id** | **String**| The ID of the content that the attachment is attached to. | 
 **attachmentId** | **String**| The ID of the attachment to update. | 

### Return type

[**Content**](Content.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenByTypeGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenByTypeGet**
> ContentArray comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenByTypeGet(id, type, opts)

Get content children by type

Returns all children of a given type, for a piece of content. A piece of content has different types of child content, depending on its type:  - &#x60;page&#x60;: child content is &#x60;page&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;blogpost&#x60;: child content is &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;attachment&#x60;: child content is &#x60;comment&#x60; - &#x60;comment&#x60;: child content is &#x60;attachment&#x60;  Custom content types that are provided by apps can also be returned.  Note, this method only returns direct children. To return children at all levels, use [Get descendants by type](#api-content-id-descendant-type-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space, and permission to view the content if it is a page.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its children.
let type = "type_example"; // String | The type of children to return.
let opts = { 
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
  'parentVersion': 56, // Number | The version of the parent content to retrieve children for. Currently, this only works for the latest version.
  'start': 56, // Number | The starting index of the returned content.
  'limit': 56 // Number | The maximum number of content to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenByTypeGet(id, type, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its children. | 
 **type** | **String**| The type of children to return. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 
 **parentVersion** | **Number**| The version of the parent content to retrieve children for. Currently, this only works for the latest version. | [optional] 
 **start** | **Number**| The starting index of the returned content. | [optional] 
 **limit** | **Number**| The maximum number of content to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenGet**
> ContentChildren comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenGet(id, opts)

Get content children

Returns a map of the direct children of a piece of content. A piece of content has different types of child content, depending on its type. These are the default parent-child content type relationships:  - &#x60;page&#x60;: child content is &#x60;page&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;blogpost&#x60;: child content is &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;attachment&#x60;: child content is &#x60;comment&#x60; - &#x60;comment&#x60;: child content is &#x60;attachment&#x60;  Apps can override these default relationships. Apps can also introduce new content types that create new parent-child content relationships.  Note, the map will always include all child content types that are valid for the content. However, if the content has no instances of a child content type, the map will contain an empty array for that child content type.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space, and permission to view the content if it is a page.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its children.
let opts = { 
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the children to expand, where:  - `attachment` returns all attachments for the content. - `comments` returns all comments for the content. - `page` returns all child pages of the content.
  'parentVersion': 56 // Number | The version of the parent content to retrieve children for. Currently, this only works for the latest version.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentChildrenGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its children. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the children to expand, where:  - &#x60;attachment&#x60; returns all attachments for the content. - &#x60;comments&#x60; returns all comments for the content. - &#x60;page&#x60; returns all child pages of the content. | [optional] 
 **parentVersion** | **Number**| The version of the parent content to retrieve children for. Currently, this only works for the latest version. | [optional] 

### Return type

[**ContentChildren**](ContentChildren.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentCommentsGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentCommentsGet**
> ContentArray comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentCommentsGet(id, opts)

Get content comments

Returns the comments on a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space, and permission to view the content if it is a page.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its comments.
let opts = { 
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
  'parentVersion': 56, // Number | The version of the parent content to retrieve children for. Currently, this only works for the latest version.
  'start': 56, // Number | The starting index of the returned comments.
  'limit': 56, // Number | The maximum number of comments to return per page. Note, this may be restricted by fixed system limits.
  'location': ["location_example"], // [String] | The location of the comments in the page. Multiple locations can be specified. If no location is specified, comments from all locations are returned.
  'depth': "depth_example" // String | Currently, this parameter is not used. Comments are returned at the root level only.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesChildContentResourceGetContentCommentsGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its comments. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 
 **parentVersion** | **Number**| The version of the parent content to retrieve children for. Currently, this only works for the latest version. | [optional] 
 **start** | **Number**| The starting index of the returned comments. | [optional] 
 **limit** | **Number**| The maximum number of comments to return per page. Note, this may be restricted by fixed system limits. | [optional] 
 **location** | [**[String]**](String.md)| The location of the comments in the page. Multiple locations can be specified. If no location is specified, comments from all locations are returned. | [optional] 
 **depth** | **String**| Currently, this parameter is not used. Comments are returned at the root level only. | [optional] 

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishLegacyDraftPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishLegacyDraftPost**
> Content comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishLegacyDraftPost(bodydraftId, opts)

Publish legacy draft

Publishes a legacy draft of a page created from a blueprint. Legacy drafts will eventually be removed in favor of shared drafts. For now, this method works the same as [Publish shared draft](#api-content-blueprint-instance-draftId-put).  By default, the following objects are expanded: &#x60;body.storage&#x60;, &#x60;history&#x60;, &#x60;space&#x60;, &#x60;version&#x60;, &#x60;ancestors&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the draft and &#x27;Add&#x27; permission for the space that the content will be created in.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = new TheConfluenceCloudRestApi.ContentBlueprintDraft(); // ContentBlueprintDraft | 
let draftId = "draftId_example"; // String | The ID of the draft page that was created from a blueprint. You can find the `draftId` in the Confluence application by opening the draft page and checking the page URL.
let opts = { 
  'status': "status_example" // String | The status of the content to be updated, i.e. the draft. This is set to 'draft' by default, so you shouldn't need to specify it.
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishLegacyDraftPost(bodydraftId, opts, (error, data, response) => {
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
 **body** | [**ContentBlueprintDraft**](ContentBlueprintDraft.md)|  | 
 **draftId** | **String**| The ID of the draft page that was created from a blueprint. You can find the &#x60;draftId&#x60; in the Confluence application by opening the draft page and checking the page URL. | 
 **status** | **String**| The status of the content to be updated, i.e. the draft. This is set to &#x27;draft&#x27; by default, so you shouldn&#x27;t need to specify it. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishSharedDraftPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishSharedDraftPut**
> Content comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishSharedDraftPut(bodydraftId, opts)

Publish shared draft

Publishes a shared draft of a page created from a blueprint.  By default, the following objects are expanded: &#x60;body.storage&#x60;, &#x60;history&#x60;, &#x60;space&#x60;, &#x60;version&#x60;, &#x60;ancestors&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the draft and &#x27;Add&#x27; permission for the space that the content will be created in.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = new TheConfluenceCloudRestApi.ContentBlueprintDraft(); // ContentBlueprintDraft | 
let draftId = "draftId_example"; // String | The ID of the draft page that was created from a blueprint. You can find the `draftId` in the Confluence application by opening the draft page and checking the page URL.
let opts = { 
  'status': "status_example" // String | The status of the content to be updated, i.e. the draft. This is set to 'draft' by default, so you shouldn't need to specify it.
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentBlueprintResourcePublishSharedDraftPut(bodydraftId, opts, (error, data, response) => {
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
 **body** | [**ContentBlueprintDraft**](ContentBlueprintDraft.md)|  | 
 **draftId** | **String**| The ID of the draft page that was created from a blueprint. You can find the &#x60;draftId&#x60; in the Confluence application by opening the draft page and checking the page URL. | 
 **status** | **String**| The status of the content to be updated, i.e. the draft. This is set to &#x27;draft&#x27; by default, so you shouldn&#x27;t need to specify it. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceAddLabelsToContentPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceAddLabelsToContentPost**
> LabelArray comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceAddLabelsToContentPost(bodyid)

Add labels to content

Adds labels to a piece of content. Does not modify the existing labels.  Notes:  - Labels can also be added when creating content ([Create content](#api-content-post)). - Labels can be updated when updating content ([Update content](#api-content-id-put)). This will delete the existing labels and replace them with the labels in the request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = [new TheConfluenceCloudRestApi.LabelCreate()]; // [LabelCreate] | The labels to add to the content.
let id = "id_example"; // String | The ID of the content that will have labels added to it.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceAddLabelsToContentPost(bodyid, (error, data, response) => {
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
 **body** | [**[LabelCreate]**](LabelCreate.md)| The labels to add to the content. | 
 **id** | **String**| The ID of the content that will have labels added to it. | 

### Return type

[**LabelArray**](LabelArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceGetLabelsForContentGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceGetLabelsForContentGet**
> LabelArray comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceGetLabelsForContentGet(id, opts)

Get labels for content

Returns the labels on a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space and permission to view the content if it is a page.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its labels.
let opts = { 
  'prefix': "prefix_example", // String | Filters the results to labels with the specified prefix. If this parameter is not specified, then labels with any prefix will be returned.  - `global` prefix is used by default when a user adds a label via the UI. - `my` prefix can be explicitly added by a user when adding a label via the UI, e.g. 'my:example-label'. Also, when a page is selected as a favourite, the 'my:favourite' label is automatically added. - `team` can used when adding labels via [Add labels to content](#api-content-id-label-post) but is not used in the UI.
  'start': 56, // Number | The starting index of the returned labels.
  'limit': 56 // Number | The maximum number of labels to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceGetLabelsForContentGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its labels. | 
 **prefix** | **String**| Filters the results to labels with the specified prefix. If this parameter is not specified, then labels with any prefix will be returned.  - &#x60;global&#x60; prefix is used by default when a user adds a label via the UI. - &#x60;my&#x60; prefix can be explicitly added by a user when adding a label via the UI, e.g. &#x27;my:example-label&#x27;. Also, when a page is selected as a favourite, the &#x27;my:favourite&#x27; label is automatically added. - &#x60;team&#x60; can used when adding labels via [Add labels to content](#api-content-id-label-post) but is not used in the UI. | [optional] 
 **start** | **Number**| The starting index of the returned labels. | [optional] 
 **limit** | **Number**| The maximum number of labels to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**LabelArray**](LabelArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentDelete**
> comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentDelete(id, label)

Remove label from content

Removes a label from a piece of content. This is similar to [Remove label from content using query parameter](#api-content-id-label-delete) except that the label name is specified via a path parameter.  Use this method if the label name does not have \&quot;/\&quot; characters, as the path parameter does not accept \&quot;/\&quot; characters for security reasons. Otherwise, use [Remove label from content using query parameter](#api-content-id-label-delete).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the label will be removed from.
let label = "label_example"; // String | The name of the label to be removed.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentDelete(id, label, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the label will be removed from. | 
 **label** | **String**| The name of the label to be removed. | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentUsingQueryParameterDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentUsingQueryParameterDelete**
> comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentUsingQueryParameterDelete(id, opts)

Remove label from content using query parameter

Removes a label from a piece of content. This is similar to [Remove label from content](#api-content-id-label-label-delete) except that the label name is specified via a query parameter.  Use this method if the label name has \&quot;/\&quot; characters, as [Remove label from content using query parameter](#api-content-id-label-delete) does not accept \&quot;/\&quot; characters for the label name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the label will be removed from.
let opts = { 
  'name': "name_example" // String | The name of the label to be removed.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentLabelsResourceRemoveLabelFromContentUsingQueryParameterDelete(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the label will be removed from. | 
 **name** | **String**| The name of the label to be removed. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForPageGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForPageGet**
> WatchArray comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForPageGet(id, opts)

Get watches for page

Returns the watches for a page. A user that watches a page will receive receive notifications when the page is updated.  If you want to manage watches for a page, use the following &#x60;user&#x60; methods:  - [Get content watch status for user](#api-user-watch-content-contentId-get) - [Add content watch](#api-user-watch-content-contentId-post) - [Remove content watch](#api-user-watch-content-contentId-delete)  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its watches.
let opts = { 
  'start': 56, // Number | The starting index of the returned watches.
  'limit': 56 // Number | The maximum number of watches to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForPageGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its watches. | 
 **start** | **Number**| The starting index of the returned watches. | [optional] 
 **limit** | **Number**| The maximum number of watches to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**WatchArray**](WatchArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForSpaceGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForSpaceGet**
> WatchArray comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForSpaceGet(id, opts)

Get watches for space

Returns all space watches for the space that the content is in. A user that watches a space will receive receive notifications when any content in the space is updated.  If you want to manage watches for a space, use the following &#x60;user&#x60; methods:  - [Get space watch status for user](#api-user-watch-space-spaceKey-get) - [Add space watch](#api-user-watch-space-spaceKey-post) - [Remove space watch](#api-user-watch-space-spaceKey-delete)  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission).

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its watches.
let opts = { 
  'start': 56, // Number | The starting index of the returned watches.
  'limit': 56 // Number | The maximum number of watches to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentNotificationsResourceGetWatchesForSpaceGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its watches. | 
 **start** | **Number**| The starting index of the returned watches. | [optional] 
 **limit** | **Number**| The maximum number of watches to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**WatchArray**](WatchArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyForKeyPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyForKeyPost**
> ContentProperty comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyForKeyPost(bodyidkey)

Create content property for key

Creates a property for an existing piece of content. For more information about content properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).  This is the same as [Create content property](#api-content-id-property-post) except that the key is specified as a path parameter instead of in the request body.  Content properties can also be added when creating a new piece of content by including them in the &#x60;metadata.properties&#x60; of the request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = new TheConfluenceCloudRestApi.ContentPropertyCreateNoKey(); // ContentPropertyCreateNoKey | The content property to be created.
let id = "id_example"; // String | The ID of the content to add the property to.
let key = "key_example"; // String | The key of the content property. Required.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyForKeyPost(bodyidkey, (error, data, response) => {
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
 **body** | [**ContentPropertyCreateNoKey**](ContentPropertyCreateNoKey.md)| The content property to be created. | 
 **id** | **String**| The ID of the content to add the property to. | 
 **key** | **String**| The key of the content property. Required. | 

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyPost**
> ContentProperty comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyPost(bodyid)

Create content property

Creates a property for an existing piece of content. For more information about content properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).  This is the same as [Create content property for key](#api-content-id-property-key-post) except that the key is specified in the request body instead of as a path parameter.  Content properties can also be added when creating a new piece of content by including them in the &#x60;metadata.properties&#x60; of the request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = new TheConfluenceCloudRestApi.ContentPropertyCreate(); // ContentPropertyCreate | The content property to be created.
let id = "id_example"; // String | The ID of the content to add the property to.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceCreateContentPropertyPost(bodyid, (error, data, response) => {
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
 **body** | [**ContentPropertyCreate**](ContentPropertyCreate.md)| The content property to be created. | 
 **id** | **String**| The ID of the content to add the property to. | 

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceDeleteContentPropertyDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceDeleteContentPropertyDelete**
> comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceDeleteContentPropertyDelete(id, key)

Delete content property

Deletes a content property. For more information about content properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the property belongs to.
let key = "key_example"; // String | The key of the property.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceDeleteContentPropertyDelete(id, key, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the property belongs to. | 
 **key** | **String**| The key of the property. | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertiesGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertiesGet**
> ContentPropertyArray comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertiesGet(id, opts)

Get content properties

Returns the properties for a piece of content. For more information about content properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space, and permission to view the content if it is a page.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its properties.
let opts = { 
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content to expand. By default, the `version` object is expanded.  - `content` returns the content that the property is stored against. - `version` returns information about the version of the property, such as the version number, when it was created, etc.
  'start': 56, // Number | The starting index of the returned properties.
  'limit': 56 // Number | The maximum number of properties to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertiesGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its properties. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand. By default, the &#x60;version&#x60; object is expanded.  - &#x60;content&#x60; returns the content that the property is stored against. - &#x60;version&#x60; returns information about the version of the property, such as the version number, when it was created, etc. | [optional] 
 **start** | **Number**| The starting index of the returned properties. | [optional] 
 **limit** | **Number**| The maximum number of properties to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**ContentPropertyArray**](ContentPropertyArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertyGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertyGet**
> ContentProperty comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertyGet(id, key, opts)

Get content property

Returns a content property for a piece of content. For more information, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space, and permission to view the content if it is a page.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for the property.
let key = "key_example"; // String | The key of the content property.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content to expand. By default, the `version` object is expanded.  - `content` returns the content that the property is stored against. - `version` returns information about the version of the property, such as the version number, when it was created, etc.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceGetContentPropertyGet(id, key, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for the property. | 
 **key** | **String**| The key of the content property. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand. By default, the &#x60;version&#x60; object is expanded.  - &#x60;content&#x60; returns the content that the property is stored against. - &#x60;version&#x60; returns information about the version of the property, such as the version number, when it was created, etc. | [optional] 

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceUpdateContentPropertyPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceUpdateContentPropertyPut**
> ContentProperty comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceUpdateContentPropertyPut(bodyidkey)

Update content property

Updates an existing content property. This method will also create a new property for a piece of content, if the property key does not exist and the property version is 1. For more information about content properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = new TheConfluenceCloudRestApi.ContentPropertyUpdate(); // ContentPropertyUpdate | The content property being updated.
let id = "id_example"; // String | The ID of the content that the property belongs to.
let key = "key_example"; // String | The key of the property.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentPropertyResourceUpdateContentPropertyPut(bodyidkey, (error, data, response) => {
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
 **body** | [**ContentPropertyUpdate**](ContentPropertyUpdate.md)| The content property being updated. | 
 **id** | **String**| The ID of the content that the property belongs to. | 
 **key** | **String**| The key of the property. | 

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentResourceCreateContentPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentResourceCreateContentPost**
> Content comAtlassianConfluencePluginsRestapiResourcesContentResourceCreateContentPost(body, opts)

Create content

Creates a new piece of content or publishes an existing draft.  To publish a draft, add the &#x60;id&#x60; and &#x60;status&#x60; properties to the body of the request. Set the &#x60;id&#x60; to the ID of the draft and set the &#x60;status&#x60; to &#x27;current&#x27;. When the request is sent, a new piece of content will be created and the metadata from the draft will be transferred into it.  By default, the following objects are expanded: &#x60;space&#x60;, &#x60;history&#x60;, &#x60;version&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Add&#x27; permission for the space that the content will be created in, and permission to view the draft if publishing a draft.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = new TheConfluenceCloudRestApi.ContentCreate(); // ContentCreate | The new content to be created. Set the `representation` to the name of the body
format type. For example, if you use `storage` for the body format, set
'`representation`=`storage`'. See
[Confluence storage format](https://confluence.atlassian.com/x/AJkiLw).

If you are not sure how to generate the different formats, you can create a page in the
Confluence application, retrieve the content using [Get content](#api-content-get),
and expand the desired content format, e.g. `expand=body.storage`.
let opts = { 
  'status': "status_example" // String | Filter the returned content by status.
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentResourceCreateContentPost(body, opts, (error, data, response) => {
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
 **body** | [**ContentCreate**](ContentCreate.md)| The new content to be created. Set the &#x60;representation&#x60; to the name of the body
format type. For example, if you use &#x60;storage&#x60; for the body format, set
&#x27;&#x60;representation&#x60;&#x3D;&#x60;storage&#x60;&#x27;. See
[Confluence storage format](https://confluence.atlassian.com/x/AJkiLw).

If you are not sure how to generate the different formats, you can create a page in the
Confluence application, retrieve the content using [Get content](#api-content-get),
and expand the desired content format, e.g. &#x60;expand&#x3D;body.storage&#x60;. | 
 **status** | **String**| Filter the returned content by status. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentResourceDeleteContentDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentResourceDeleteContentDelete**
> comAtlassianConfluencePluginsRestapiResourcesContentResourceDeleteContentDelete(id, opts)

Delete content

Moves a piece of content to the space&#x27;s trash or purges it from the trash, depending on the content&#x27;s type and status:  - If the content&#x27;s type is &#x60;page&#x60; or &#x60;blogpost&#x60; and its status is &#x60;current&#x60;, it will be trashed. - If the content&#x27;s type is &#x60;page&#x60; or &#x60;blogpost&#x60; and its status is &#x60;trashed&#x60;, the content will be purged from the trash and deleted permanently. Note, you must also set the &#x60;status&#x60; query parameter to &#x60;trashed&#x60; in your request. - If the content&#x27;s type is &#x60;comment&#x60; or &#x60;attachment&#x60;, it will be deleted permanently without being trashed.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Delete&#x27; permission for the space that the content is in, and permission to edit the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be deleted.
let opts = { 
  'status': "status_example" // String | Set this to `trashed`, if the content's status is `trashed` and you want to purge it.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentResourceDeleteContentDelete(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be deleted. | 
 **status** | **String**| Set this to &#x60;trashed&#x60;, if the content&#x27;s status is &#x60;trashed&#x60; and you want to purge it. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentByIdGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentByIdGet**
> Content comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentByIdGet(id, opts)

Get content by ID

Returns a single piece of content, like a page or a blog post.  By default, the following objects are expanded: &#x60;space&#x60;, &#x60;history&#x60;, &#x60;version&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content. If the content is a blog post, &#x27;View&#x27; permission for the space is required.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be returned. If you don't know the content ID, use [Get content](#api-content-get) and filter the results.
let opts = { 
  'status': ["status_example"], // [String] | Filter the results to a set of content based on their status. If set to `any`, content with any status is returned. Note, the `historical` status is currently not supported.
  'version': 56, // Number | The version number of the content to be returned.
  'embeddedContentRender': "embeddedContentRender_example", // String | The version of embedded content (e.g. attachments) to render.  - <code>current</code> renders the latest version of the embedded content. - <code>version-at-save</code> renders the version of the embedded content at the time of save.
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
  'trigger': "trigger_example" // String | If set to `viewed`, the request will trigger a 'viewed' event for the content. When this event is triggered, the page/blogpost will appear on the 'Recently visited' tab of the user's Confluence dashboard.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentByIdGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be returned. If you don&#x27;t know the content ID, use [Get content](#api-content-get) and filter the results. | 
 **status** | [**[String]**](String.md)| Filter the results to a set of content based on their status. If set to &#x60;any&#x60;, content with any status is returned. Note, the &#x60;historical&#x60; status is currently not supported. | [optional] 
 **version** | **Number**| The version number of the content to be returned. | [optional] 
 **embeddedContentRender** | **String**| The version of embedded content (e.g. attachments) to render.  - &lt;code&gt;current&lt;/code&gt; renders the latest version of the embedded content. - &lt;code&gt;version-at-save&lt;/code&gt; renders the version of the embedded content at the time of save. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 
 **trigger** | **String**| If set to &#x60;viewed&#x60;, the request will trigger a &#x27;viewed&#x27; event for the content. When this event is triggered, the page/blogpost will appear on the &#x27;Recently visited&#x27; tab of the user&#x27;s Confluence dashboard. | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentGet**
> ContentArray comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentGet(opts)

Get content

Returns all content in a Confluence instance.  By default, the following objects are expanded: &#x60;space&#x60;, &#x60;history&#x60;, &#x60;version&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission). Only content that the user has permission to view will be returned.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let opts = { 
  'type': "type_example", // String | The type of content to return.
  'spaceKey': "spaceKey_example", // String | The key of the space to be queried for its content.
  'title': "title_example", // String | The title of the page to be returned. Required for <code>page</code> type.
  'status': ["status_example"], // [String] | Filter the results to a set of content based on their status. If set to `any`, content with any status is returned. Note, the `historical` status is currently not supported.
  'postingDay': "postingDay_example", // String | The posting date of the blog post to be returned. Required for <code>blogpost</code> type. Format: <code>yyyy-mm-dd</code>.
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
  'trigger': "trigger_example", // String | If set to `viewed`, the request will trigger a 'viewed' event for the content. When this event is triggered, the page/blogpost will appear on the 'Recently visited' tab of the user's Confluence dashboard.
  'orderby': "orderby_example", // String | Orders the content by a particular field. Specify the field and sort direction for this parameter, as follows: 'fieldpath asc/desc'. For example, 'history.createdDate desc'.
  'start': 56, // Number | The starting index of the returned content.
  'limit': 56 // Number | The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentResourceGetContentGet(opts, (error, data, response) => {
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
 **type** | **String**| The type of content to return. | [optional] 
 **spaceKey** | **String**| The key of the space to be queried for its content. | [optional] 
 **title** | **String**| The title of the page to be returned. Required for &lt;code&gt;page&lt;/code&gt; type. | [optional] 
 **status** | [**[String]**](String.md)| Filter the results to a set of content based on their status. If set to &#x60;any&#x60;, content with any status is returned. Note, the &#x60;historical&#x60; status is currently not supported. | [optional] 
 **postingDay** | **String**| The posting date of the blog post to be returned. Required for &lt;code&gt;blogpost&lt;/code&gt; type. Format: &lt;code&gt;yyyy-mm-dd&lt;/code&gt;. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 
 **trigger** | **String**| If set to &#x60;viewed&#x60;, the request will trigger a &#x27;viewed&#x27; event for the content. When this event is triggered, the page/blogpost will appear on the &#x27;Recently visited&#x27; tab of the user&#x27;s Confluence dashboard. | [optional] 
 **orderby** | **String**| Orders the content by a particular field. Specify the field and sort direction for this parameter, as follows: &#x27;fieldpath asc/desc&#x27;. For example, &#x27;history.createdDate desc&#x27;. | [optional] 
 **start** | **Number**| The starting index of the returned content. | [optional] 
 **limit** | **Number**| The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentResourceGetHistoryForContentGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentResourceGetHistoryForContentGet**
> ContentHistory comAtlassianConfluencePluginsRestapiResourcesContentResourceGetHistoryForContentGet(id, opts)

Get history for content

Returns the most recent update for a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its history.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content history to expand.  - `lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `previousVersion` returns information about the update prior to the current content update. For this method, it contains the same information as `lastUpdated`. - `contributors` returns all of the users who have contributed to the content. - `nextVersion` This parameter is not used for this method.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentResourceGetHistoryForContentGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its history. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content history to expand.  - &#x60;lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;previousVersion&#x60; returns information about the update prior to the current content update. For this method, it contains the same information as &#x60;lastUpdated&#x60;. - &#x60;contributors&#x60; returns all of the users who have contributed to the content. - &#x60;nextVersion&#x60; This parameter is not used for this method. | [optional] 

### Return type

[**ContentHistory**](ContentHistory.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentResourceGetMacroBodyByMacroIdGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentResourceGetMacroBodyByMacroIdGet**
> MacroInstance comAtlassianConfluencePluginsRestapiResourcesContentResourceGetMacroBodyByMacroIdGet(id, version, macroId)

Get macro body by macro ID

Returns the body of a macro in storage format, for the given macro ID. This includes information like the name of the macro, the body of the macro, and any macro parameters. This method is mainly used by Cloud apps.  About the macro ID: When a macro is created in a new version of content, Confluence will generate a random ID for it, unless an ID is specified (by an app). The macro ID will look similar to this: &#x27;50884bd9-0cb8-41d5-98be-f80943c14f96&#x27;. The ID is then persisted as new versions of content are created, and is only modified by Confluence if there are conflicting IDs.  Note, to preserve backwards compatibility this resource will also match on the hash of the macro body, even if a macro ID is found. This check will eventually become redundant, as macro IDs are generated for pages and transparently propagate out to all instances.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content that the macro is in.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID for the content that contains the macro.
let version = 56; // Number | The version of the content that contains the macro.
let macroId = "macroId_example"; // String | The ID of the macro. This is usually passed by the app that the macro is in. Otherwise, find the macro ID by querying the desired content and version, then expanding the body in storage format. For example, '/content/196611/version/7?expand=content.body.storage'.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentResourceGetMacroBodyByMacroIdGet(id, version, macroId, (error, data, response) => {
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
 **id** | **String**| The ID for the content that contains the macro. | 
 **version** | **Number**| The version of the content that contains the macro. | 
 **macroId** | **String**| The ID of the macro. This is usually passed by the app that the macro is in. Otherwise, find the macro ID by querying the desired content and version, then expanding the body in storage format. For example, &#x27;/content/196611/version/7?expand&#x3D;content.body.storage&#x27;. | 

### Return type

[**MacroInstance**](MacroInstance.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentResourceSearchContentByCQLGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentResourceSearchContentByCQLGet**
> ContentArray comAtlassianConfluencePluginsRestapiResourcesContentResourceSearchContentByCQLGet(opts)

Search content by CQL

Returns the list of content that matches a Confluence Query Language (CQL) query. For information on CQL, see: [Advanced searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (&#x27;Can use&#x27; global permission). Only content that the user has permission to view will be returned.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let opts = { 
  'cql': "cql_example", // String | The CQL string that is used to find the requested content.
  'cqlcontext': "cqlcontext_example", // String | The space, content, and content status to execute the search against. Specify this as an object with the following properties:  - `spaceKey` Key of the space to search against. Optional. - `contentId` ID of the content to search against. Optional. Must be in the space spacified by `spaceKey`. - `contentStatuses` Content statuses to search against. Optional.
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
  'start': 56, // Number | The starting index of the returned content.
  'limit': 56 // Number | The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentResourceSearchContentByCQLGet(opts, (error, data, response) => {
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
 **cql** | **String**| The CQL string that is used to find the requested content. | [optional] 
 **cqlcontext** | **String**| The space, content, and content status to execute the search against. Specify this as an object with the following properties:  - &#x60;spaceKey&#x60; Key of the space to search against. Optional. - &#x60;contentId&#x60; ID of the content to search against. Optional. Must be in the space spacified by &#x60;spaceKey&#x60;. - &#x60;contentStatuses&#x60; Content statuses to search against. Optional. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 
 **start** | **Number**| The starting index of the returned content. | [optional] 
 **limit** | **Number**| The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentResourceUpdateContentPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentResourceUpdateContentPut**
> Content comAtlassianConfluencePluginsRestapiResourcesContentResourceUpdateContentPut(bodyid, opts)

Update content

Updates a piece of content. Use this method to update the title or body of a piece of content, change the status, change the parent page, and more.  Note, updating draft content is currently not supported.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = new TheConfluenceCloudRestApi.ContentUpdate(); // ContentUpdate | The updated content.
let id = "id_example"; // String | The ID of the content to be updated.
let opts = { 
  'status': "status_example" // String | The updated status of the content. Use this parameter to change the status of a piece of content without passing the entire request body.
  'conflictPolicy': "conflictPolicy_example" // String | The action that should be taken when conflicts are discovered. Only used when publishing a draft page.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentResourceUpdateContentPut(bodyid, opts, (error, data, response) => {
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
 **body** | [**ContentUpdate**](ContentUpdate.md)| The updated content. | 
 **id** | **String**| The ID of the content to be updated. | 
 **status** | **String**| The updated status of the content. Use this parameter to change the status of a piece of content without passing the entire request body. | [optional] 
 **conflictPolicy** | **String**| The action that should be taken when conflicts are discovered. Only used when publishing a draft page. | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddGroupToContentRestrictionPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddGroupToContentRestrictionPut**
> comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddGroupToContentRestrictionPut(id, operationKey, groupName)

Add group to content restriction

Adds a group to a content restriction. That is, grant read or update permission to the group for a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the restriction applies to.
let operationKey = "operationKey_example"; // String | The operation that the restriction applies to.
let groupName = "groupName_example"; // String | The name of the group to add to the content restriction.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddGroupToContentRestrictionPut(id, operationKey, groupName, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the restriction applies to. | 
 **operationKey** | **String**| The operation that the restriction applies to. | 
 **groupName** | **String**| The name of the group to add to the content restriction. | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddRestrictionsPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddRestrictionsPost**
> ContentRestrictionArray comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddRestrictionsPost(bodyid, opts)

Add restrictions

Adds restrictions to a piece of content. Note, this does not change any existing restrictions on the content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = [new TheConfluenceCloudRestApi.ContentRestrictionUpdate()]; // [ContentRestrictionUpdate] | The restrictions to be added to the content.
let id = "id_example"; // String | The ID of the content to add restrictions to.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - `restrictions.user` returns the piece of content that the restrictions are applied to. Expanded by default. - `restrictions.group` returns the piece of content that the restrictions are applied to. Expanded by default. - `content` returns the piece of content that the restrictions are applied to.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddRestrictionsPost(bodyid, opts, (error, data, response) => {
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
 **body** | [**[ContentRestrictionUpdate]**](ContentRestrictionUpdate.md)| The restrictions to be added to the content. | 
 **id** | **String**| The ID of the content to add restrictions to. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [optional] 

### Return type

[**ContentRestrictionArray**](ContentRestrictionArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddUserToContentRestrictionPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddUserToContentRestrictionPut**
> comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddUserToContentRestrictionPut(id, operationKey, accountId, opts)

Add user to content restriction

Adds a user to a content restriction. That is, grant read or update permission to the user for a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the restriction applies to.
let operationKey = "operationKey_example"; // String | The operation that the restriction applies to.
let accountId = "accountId_example"; // String | The account ID of the user to add to the content restriction. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'userName': "userName_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceAddUserToContentRestrictionPut(id, operationKey, accountId, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the restriction applies to. | 
 **operationKey** | **String**| The operation that the restriction applies to. | 
 **accountId** | **String**| The account ID of the user to add to the content restriction. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **userName** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceDeleteRestrictionsDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceDeleteRestrictionsDelete**
> ContentRestrictionArray comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceDeleteRestrictionsDelete(id, opts)

Delete restrictions

Removes all restrictions (read and update) on a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to remove restrictions from.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - `restrictions.user` returns the piece of content that the restrictions are applied to. Expanded by default. - `restrictions.group` returns the piece of content that the restrictions are applied to. Expanded by default. - `content` returns the piece of content that the restrictions are applied to.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceDeleteRestrictionsDelete(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to remove restrictions from. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [optional] 

### Return type

[**ContentRestrictionArray**](ContentRestrictionArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForGroupGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForGroupGet**
> comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForGroupGet(id, operationKey, groupName)

Get content restriction status for group

Returns whether the specified content restriction applies to a group. For example, if a page with &#x60;id&#x3D;123&#x60; has a &#x60;read&#x60; restriction for the &#x60;admins&#x60; group, the following request will return &#x60;true&#x60;:  &#x60;https://your-domain.atlassian.net/wiki/rest/api/content/123/restriction/byOperation/read/group/admins&#x60;  Note that a response of &#x60;true&#x60; does not guarantee that the group can view the page, as it does not account for account-inherited restrictions, space permissions, or even product access. For more information, see [Confluence permissions](https://confluence.atlassian.com/x/_AozKw).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the restriction applies to.
let operationKey = "operationKey_example"; // String | The operation that the restriction applies to.
let groupName = "groupName_example"; // String | The name of the group to be queried for whether the content restriction applies to it.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForGroupGet(id, operationKey, groupName, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the restriction applies to. | 
 **operationKey** | **String**| The operation that the restriction applies to. | 
 **groupName** | **String**| The name of the group to be queried for whether the content restriction applies to it. | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForUserGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForUserGet**
> comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForUserGet(id, operationKey, accountId, opts)

Get content restriction status for user

Returns whether the specified content restriction applies to a user. For example, if a page with &#x60;id&#x3D;123&#x60; has a &#x60;read&#x60; restriction for a user with an account ID of &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;, the following request will return &#x60;true&#x60;:  &#x60;https://your-domain.atlassian.net/wiki/rest/api/content/123/restriction/byOperation/read/user?accountId&#x3D;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;  Note that a response of &#x60;true&#x60; does not guarantee that the user can view the page, as it does not account for account-inherited restrictions, space permissions, or even product access. For more information, see [Confluence permissions](https://confluence.atlassian.com/x/_AozKw).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the restriction applies to.
let operationKey = "operationKey_example"; // String | The operation that is restricted.
let accountId = "accountId_example"; // String | The account ID of the user to be queried for whether the content restriction applies to it. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'userName': "userName_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetContentRestrictionStatusForUserGet(id, operationKey, accountId, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the restriction applies to. | 
 **operationKey** | **String**| The operation that is restricted. | 
 **accountId** | **String**| The account ID of the user to be queried for whether the content restriction applies to it. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **userName** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsByOperationGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsByOperationGet**
> InlineResponse200 comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsByOperationGet(id, opts)

Get restrictions by operation

Returns restrictions on a piece of content by operation. This method is similar to [Get restrictions](#api-content-id-restriction-get) except that the operations are properties of the return object, rather than items in a results array.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its restrictions.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content restrictions to expand.  - `restrictions.user` returns the piece of content that the restrictions are applied to. Expanded by default. - `restrictions.group` returns the piece of content that the restrictions are applied to. Expanded by default. - `content` returns the piece of content that the restrictions are applied to.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsByOperationGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its restrictions. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content restrictions to expand.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsForOperationGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsForOperationGet**
> ContentRestriction comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsForOperationGet(id, operationKey, opts)

Get restrictions for operation

Returns the restictions on a piece of content for a given operation (read or update).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its restrictions.
let operationKey = "operationKey_example"; // String | The operation type of the restrictions to be returned.
let opts = { 
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content restrictions to expand.  - `restrictions.user` returns the piece of content that the restrictions are applied to. Expanded by default. - `restrictions.group` returns the piece of content that the restrictions are applied to. Expanded by default. - `content` returns the piece of content that the restrictions are applied to.
  'start': 56, // Number | The starting index of the users and groups in the returned restrictions.
  'limit': 56 // Number | The maximum number of users and the maximum number of groups, in the returned restrictions, to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsForOperationGet(id, operationKey, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its restrictions. | 
 **operationKey** | **String**| The operation type of the restrictions to be returned. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content restrictions to expand.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [optional] 
 **start** | **Number**| The starting index of the users and groups in the returned restrictions. | [optional] 
 **limit** | **Number**| The maximum number of users and the maximum number of groups, in the returned restrictions, to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**ContentRestriction**](ContentRestriction.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsGet**
> ContentRestrictionArray comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsGet(id, opts)

Get restrictions

Returns the restrictions on a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its restrictions.
let opts = { 
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content restrictions to expand. By default, the following objects are expanded: `restrictions.user`, `restrictions.group`.  - `restrictions.user` returns the piece of content that the restrictions are applied to. - `restrictions.group` returns the piece of content that the restrictions are applied to. - `content` returns the piece of content that the restrictions are applied to.
  'start': 56, // Number | The starting index of the users and groups in the returned restrictions.
  'limit': 56 // Number | The maximum number of users and the maximum number of groups, in the returned restrictions, to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceGetRestrictionsGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its restrictions. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content restrictions to expand. By default, the following objects are expanded: &#x60;restrictions.user&#x60;, &#x60;restrictions.group&#x60;.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [optional] 
 **start** | **Number**| The starting index of the users and groups in the returned restrictions. | [optional] 
 **limit** | **Number**| The maximum number of users and the maximum number of groups, in the returned restrictions, to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**ContentRestrictionArray**](ContentRestrictionArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveGroupFromContentRestrictionDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveGroupFromContentRestrictionDelete**
> comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveGroupFromContentRestrictionDelete(id, operationKey, groupName)

Remove group from content restriction

Removes a group from a content restriction. That is, remove read or update permission for the group for a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the restriction applies to.
let operationKey = "operationKey_example"; // String | The operation that the restriction applies to.
let groupName = "groupName_example"; // String | The name of the group to remove from the content restriction.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveGroupFromContentRestrictionDelete(id, operationKey, groupName, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the restriction applies to. | 
 **operationKey** | **String**| The operation that the restriction applies to. | 
 **groupName** | **String**| The name of the group to remove from the content restriction. | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveUserFromContentRestrictionDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveUserFromContentRestrictionDelete**
> comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveUserFromContentRestrictionDelete(id, operationKey, accountId, opts)

Remove user from content restriction

Removes a group from a content restriction. That is, remove read or update permission for the group for a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the restriction applies to.
let operationKey = "operationKey_example"; // String | The operation that the restriction applies to.
let accountId = "accountId_example"; // String | The account ID of the user to remove from the content restriction. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
let opts = { 
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'userName': "userName_example" // String | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceRemoveUserFromContentRestrictionDelete(id, operationKey, accountId, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the restriction applies to. | 
 **operationKey** | **String**| The operation that the restriction applies to. | 
 **accountId** | **String**| The account ID of the user to remove from the content restriction. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **userName** | **String**| This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceUpdateRestrictionsPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceUpdateRestrictionsPut**
> ContentRestrictionArray comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceUpdateRestrictionsPut(bodyid, opts)

Update restrictions

Updates restrictions for a piece of content. This removes the existing restrictions and replaces them with the restrictions in the request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = [new TheConfluenceCloudRestApi.ContentRestrictionUpdate()]; // [ContentRestrictionUpdate] | The updated restrictions for the content.
let id = "id_example"; // String | The ID of the content to update restrictions for.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - `restrictions.user` returns the piece of content that the restrictions are applied to. Expanded by default. - `restrictions.group` returns the piece of content that the restrictions are applied to. Expanded by default. - `content` returns the piece of content that the restrictions are applied to.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentRestrictionResourceUpdateRestrictionsPut(bodyid, opts, (error, data, response) => {
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
 **body** | [**[ContentRestrictionUpdate]**](ContentRestrictionUpdate.md)| The updated restrictions for the content. | 
 **id** | **String**| The ID of the content to update restrictions for. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [optional] 

### Return type

[**ContentRestrictionArray**](ContentRestrictionArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceDeleteContentVersionDelete"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceDeleteContentVersionDelete**
> comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceDeleteContentVersionDelete(id, versionNumber)

Delete content version

Delete a historical version. This does not delete the changes made to the content in that version, rather the changes for the deleted version are rolled up into the next version. Note, you cannot delete the current version.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content that the version will be deleted from.
let versionNumber = 56; // Number | The number of the version to be deleted. The version number starts from 1 up to current version.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceDeleteContentVersionDelete(id, versionNumber, (error, data, response) => {
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
 **id** | **String**| The ID of the content that the version will be deleted from. | 
 **versionNumber** | **Number**| The number of the version to be deleted. The version number starts from 1 up to current version. | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionGet**
> Version comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionGet(id, versionNumber, opts)

Get content version

Returns a version for a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content. If the content is a blog post, &#x27;View&#x27; permission for the space is required.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its version.
let versionNumber = 56; // Number | The number of the version to be retrieved.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content to expand. By default, the `content` object is expanded.  - `collaborators` returns the users that collaborated on the version. - `content` returns the content for the version.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionGet(id, versionNumber, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its version. | 
 **versionNumber** | **Number**| The number of the version to be retrieved. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand. By default, the &#x60;content&#x60; object is expanded.  - &#x60;collaborators&#x60; returns the users that collaborated on the version. - &#x60;content&#x60; returns the content for the version. | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionsGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionsGet**
> VersionArray comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionsGet(id, opts)

Get content versions

Returns the versions for a piece of content in descending order.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content. If the content is a blog post, &#x27;View&#x27; permission for the space is required.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its versions.
let opts = { 
  'start': 56, // Number | The starting index of the returned versions.
  'limit': 56, // Number | The maximum number of versions to return per page. Note, this may be restricted by fixed system limits.
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content to expand.  - `collaborators` returns the users that collaborated on the version. - `content` returns the content for the version.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceGetContentVersionsGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its versions. | 
 **start** | **Number**| The starting index of the returned versions. | [optional] 
 **limit** | **Number**| The maximum number of versions to return per page. Note, this may be restricted by fixed system limits. | [optional] 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;collaborators&#x60; returns the users that collaborated on the version. - &#x60;content&#x60; returns the content for the version. | [optional] 

### Return type

[**VersionArray**](VersionArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceRestoreContentVersionPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceRestoreContentVersionPost**
> Version comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceRestoreContentVersionPost(bodyid, opts)

Restore content version

Restores a historical version to be the latest version. That is, a new version is created with the content of the historical version.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = new TheConfluenceCloudRestApi.VersionRestore(); // VersionRestore | The content version to be restored.
let id = "id_example"; // String | The ID of the content for which the history will be restored.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the returned content to expand.  - `collaborators` returns the users that collaborated on the version. - `content` returns the content for the version.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentVersionResourceRestoreContentVersionPost(bodyid, opts, (error, data, response) => {
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
 **body** | [**VersionRestore**](VersionRestore.md)| The content version to be restored. | 
 **id** | **String**| The ID of the content for which the history will be restored. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the returned content to expand.  - &#x60;collaborators&#x60; returns the users that collaborated on the version. - &#x60;content&#x60; returns the content for the version. | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceDescendantsOfTypeGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceDescendantsOfTypeGet**
> ContentArray comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceDescendantsOfTypeGet(id, type, opts)

Get content descendants by type

Returns all descendants of a given type, for a piece of content. This is similar to [Get content children by type](#api-content-id-child-type-get), except that this method returns child pages at all levels, rather than just the direct child pages.  A piece of content has different types of descendants, depending on its type:  - &#x60;page&#x60;: descendant is &#x60;page&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;blogpost&#x60;: descendant is &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;attachment&#x60;: descendant is &#x60;comment&#x60; - &#x60;comment&#x60;: descendant is &#x60;attachment&#x60;  Custom content types that are provided by apps can also be returned.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space, and permission to view the content if it is a page.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its descendants.
let type = "type_example"; // String | The type of descendants to return.
let opts = { 
  'expand': ["expand_example"], // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
  'start': 56, // Number | The starting index of the returned content.
  'limit': 56 // Number | The maximum number of content to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceDescendantsOfTypeGet(id, type, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its descendants. | 
 **type** | **String**| The type of descendants to return. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 
 **start** | **Number**| The starting index of the returned content. | [optional] 
 **limit** | **Number**| The maximum number of content to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceGetContentDescendantsGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceGetContentDescendantsGet**
> ContentChildren comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceGetContentDescendantsGet(id, opts)

Get content descendants

Returns a map of the descendants of a piece of content. This is similar to [Get content children](#api-content-id-child-get), except that this method returns child pages at all levels, rather than just the direct child pages.  A piece of content has different types of descendants, depending on its type:  - &#x60;page&#x60;: descendant is &#x60;page&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;blogpost&#x60;: descendant is &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;attachment&#x60;: descendant is &#x60;comment&#x60; - &#x60;comment&#x60;: descendant is &#x60;attachment&#x60;  The map will always include all descendant types that are valid for the content. However, if the content has no instances of a descendant type, the map will contain an empty array for that descendant type.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;View&#x27; permission for the space, and permission to view the content if it is a page.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let id = "id_example"; // String | The ID of the content to be queried for its descendants.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the children to expand, where:  - `attachment` returns all attachments for the content. - `comments` returns all comments for the content. - `page` returns all child pages of the content.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesDescendantContentResourceGetContentDescendantsGet(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the content to be queried for its descendants. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the children to expand, where:  - &#x60;attachment&#x60; returns all attachments for the content. - &#x60;comments&#x60; returns all comments for the content. - &#x60;page&#x60; returns all child pages of the content. | [optional] 

### Return type

[**ContentChildren**](ContentChildren.md)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesPageHierarchyResourceCopyPageHierarchyPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesPageHierarchyResourceCopyPageHierarchyPost**
> comAtlassianConfluencePluginsRestapiResourcesPageHierarchyResourceCopyPageHierarchyPost(bodyid)

Copy page hierarchy

Copy page hierarchy allows the copying of an entire hierarchy of pages and their associated properties, permissions and attachments.  The id path parameter refers to the content id of the page to copy, and the new parent of this copied page is defined using the destinationPageId in the request body.  The titleOptions object defines the rules of renaming page titles during the copy;  for example, search and replace can be used in conjunction to rewrite the copied page titles.   Response example:  &lt;pre&gt;&lt;code&gt;  {       \&quot;id\&quot; : \&quot;1180606\&quot;,       \&quot;links\&quot; : {            \&quot;status\&quot; : \&quot;/rest/api/longtask/1180606\&quot;       }  }  &lt;/code&gt;&lt;/pre&gt;  Use the /longtask/&lt;taskId&gt; REST API to get the copy task status.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';
let defaultClient = TheConfluenceCloudRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oAuthDefinitions
let oAuthDefinitions = defaultClient.authentications['oAuthDefinitions'];
oAuthDefinitions.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TheConfluenceCloudRestApi.ContentApi();
let body = new TheConfluenceCloudRestApi.CopyPageHierarchyRequest(); // CopyPageHierarchyRequest | Request object from json post body
let id = "id_example"; // String | 

apiInstance.comAtlassianConfluencePluginsRestapiResourcesPageHierarchyResourceCopyPageHierarchyPost(bodyid, (error, data, response) => {
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
 **body** | [**CopyPageHierarchyRequest**](CopyPageHierarchyRequest.md)| Request object from json post body | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oAuthDefinitions](../README.md#oAuthDefinitions)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

