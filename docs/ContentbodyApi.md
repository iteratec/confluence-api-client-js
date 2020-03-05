# TheConfluenceCloudRestApi.ContentbodyApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesContentBodyResourceConvertContentBodyPost**](ContentbodyApi.md#comAtlassianConfluencePluginsRestapiResourcesContentBodyResourceConvertContentBodyPost) | **POST** /api/contentbody/convert/{to} | Convert content body

<a name="comAtlassianConfluencePluginsRestapiResourcesContentBodyResourceConvertContentBodyPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesContentBodyResourceConvertContentBodyPost**
> ContentBody comAtlassianConfluencePluginsRestapiResourcesContentBodyResourceConvertContentBodyPost(bodyto, opts)

Convert content body

Converts a content body from one format to another format.  Supported conversions:  - storage: view, export_view, styled_view, editor - editor: storage - view: none - export_view: none - styled_view: none  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: If request specifies &#x27;contentIdContext&#x27;, &#x27;View&#x27; permission for the space, and permission to view the content.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.ContentbodyApi();
let body = new TheConfluenceCloudRestApi.ContentBodyCreate(); // ContentBodyCreate | The content body to convert.
let to = "to_example"; // String | The name of the target format for the content body.
let opts = { 
  'expand': ["expand_example"] // [String] | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` (this property is only used by Atlassian) - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn't remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent page, if the content is a page. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment.
  'spaceKeyContext': "spaceKeyContext_example" // String | The space key used for resolving embedded content (page includes, files, and links) in the content body. For example, if the source content contains the link `<ac:link><ri:page ri:content-title=\"Example page\" /><ac:link>` and the `spaceKeyContext=TEST` parameter is provided, then the link will be converted to a link to the \"Example page\" page in the \"TEST\" space.
  'contentIdContext': "contentIdContext_example" // String | The content ID used to find the space for resolving embedded content (page includes, files, and links) in the content body. For example, if the source content contains the link `<ac:link><ri:page ri:content-title=\"Example page\" /><ac:link>` and the `contentIdContext=123` parameter is provided, then the link will be converted to a link to the \"Example page\" page in the same space that has the content with ID=123. Note, `spaceKeyContext` will be ignored if this parameter is provided.
  'embeddedContentRender': "embeddedContentRender_example" // String | Mode used for rendering embedded content, like attachments.  - `current` renders the embedded content using the latest version. - `version-at-save` renders the embedded content using the version at the time of save.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesContentBodyResourceConvertContentBodyPost(bodyto, opts, (error, data, response) => {
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
 **body** | [**ContentBodyCreate**](ContentBodyCreate.md)| The content body to convert. | 
 **to** | **String**| The name of the target format for the content body. | 
 **expand** | [**[String]**](String.md)| A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favourite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; (this property is only used by Atlassian) - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups, because deleting a group doesn&#x27;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent page, if the content is a page. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [optional] 
 **spaceKeyContext** | **String**| The space key used for resolving embedded content (page includes, files, and links) in the content body. For example, if the source content contains the link &#x60;&lt;ac:link&gt;&lt;ri:page ri:content-title&#x3D;\&quot;Example page\&quot; /&gt;&lt;ac:link&gt;&#x60; and the &#x60;spaceKeyContext&#x3D;TEST&#x60; parameter is provided, then the link will be converted to a link to the \&quot;Example page\&quot; page in the \&quot;TEST\&quot; space. | [optional] 
 **contentIdContext** | **String**| The content ID used to find the space for resolving embedded content (page includes, files, and links) in the content body. For example, if the source content contains the link &#x60;&lt;ac:link&gt;&lt;ri:page ri:content-title&#x3D;\&quot;Example page\&quot; /&gt;&lt;ac:link&gt;&#x60; and the &#x60;contentIdContext&#x3D;123&#x60; parameter is provided, then the link will be converted to a link to the \&quot;Example page\&quot; page in the same space that has the content with ID&#x3D;123. Note, &#x60;spaceKeyContext&#x60; will be ignored if this parameter is provided. | [optional] 
 **embeddedContentRender** | **String**| Mode used for rendering embedded content, like attachments.  - &#x60;current&#x60; renders the embedded content using the latest version. - &#x60;version-at-save&#x60; renders the embedded content using the version at the time of save. | [optional] 

### Return type

[**ContentBody**](ContentBody.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

