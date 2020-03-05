# TheConfluenceCloudRestApi.AuditApi

All URIs are relative to *//your-domain.atlassian.net/wiki/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comAtlassianConfluencePluginsRestapiResourcesAuditResourceCreateAuditRecordPost**](AuditApi.md#comAtlassianConfluencePluginsRestapiResourcesAuditResourceCreateAuditRecordPost) | **POST** /api/audit | Create audit record
[**comAtlassianConfluencePluginsRestapiResourcesAuditResourceExportAuditRecordsGet**](AuditApi.md#comAtlassianConfluencePluginsRestapiResourcesAuditResourceExportAuditRecordsGet) | **GET** /api/audit/export | Export audit records
[**comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsForTimePeriodGet**](AuditApi.md#comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsForTimePeriodGet) | **GET** /api/audit/since | Get audit records for time period
[**comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsGet**](AuditApi.md#comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsGet) | **GET** /api/audit | Get audit records
[**comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetRetentionPeriodGet**](AuditApi.md#comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetRetentionPeriodGet) | **GET** /api/audit/retention | Get retention period
[**comAtlassianConfluencePluginsRestapiResourcesAuditResourceSetRetentionPeriodPut**](AuditApi.md#comAtlassianConfluencePluginsRestapiResourcesAuditResourceSetRetentionPeriodPut) | **PUT** /api/audit/retention | Set retention period

<a name="comAtlassianConfluencePluginsRestapiResourcesAuditResourceCreateAuditRecordPost"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAuditResourceCreateAuditRecordPost**
> AuditRecord comAtlassianConfluencePluginsRestapiResourcesAuditResourceCreateAuditRecordPost(body)

Create audit record

Creates a record in the audit log.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.AuditApi();
let body = new TheConfluenceCloudRestApi.AuditRecordCreate(); // AuditRecordCreate | The record to be created in the audit log.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesAuditResourceCreateAuditRecordPost(body, (error, data, response) => {
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
 **body** | [**AuditRecordCreate**](AuditRecordCreate.md)| The record to be created in the audit log. | 

### Return type

[**AuditRecord**](AuditRecord.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesAuditResourceExportAuditRecordsGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAuditResourceExportAuditRecordsGet**
> &#x27;Blob&#x27; comAtlassianConfluencePluginsRestapiResourcesAuditResourceExportAuditRecordsGet(opts)

Export audit records

Exports audit records as a CSV file or ZIP file.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.AuditApi();
let opts = { 
  'startDate': "startDate_example", // String | Filters the exported results to the records on or after the `startDate`. The `startDate` must be specified as a [timestamp](https://www.unixtimestamp.com/).
  'endDate': "endDate_example", // String | Filters the exported results to the records on or before the `endDate`. The `endDate` must be specified as a [timestamp](https://www.unixtimestamp.com/).
  'searchString': "searchString_example", // String | Filters the exported results to records that have string property values matching the `searchString`.
  'format': "format_example" // String | The format of the export file for the audit records.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesAuditResourceExportAuditRecordsGet(opts, (error, data, response) => {
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
 **startDate** | **String**| Filters the exported results to the records on or after the &#x60;startDate&#x60;. The &#x60;startDate&#x60; must be specified as a [timestamp](https://www.unixtimestamp.com/). | [optional] 
 **endDate** | **String**| Filters the exported results to the records on or before the &#x60;endDate&#x60;. The &#x60;endDate&#x60; must be specified as a [timestamp](https://www.unixtimestamp.com/). | [optional] 
 **searchString** | **String**| Filters the exported results to records that have string property values matching the &#x60;searchString&#x60;. | [optional] 
 **format** | **String**| The format of the export file for the audit records. | [optional] 

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip, text/csv

<a name="comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsForTimePeriodGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsForTimePeriodGet**
> AuditRecordArray comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsForTimePeriodGet(opts)

Get audit records for time period

Returns records from the audit log, for a time period back from the current date. For example, you can use this method to get the last 3 months of records.  This contains information about events like space exports, group membership changes, app installations, etc. For more information, see [Audit log](https://confluence.atlassian.com/confcloud/audit-log-802164269.html) in the Confluence administrator&#x27;s guide.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.AuditApi();
let opts = { 
  '_number': 789, // Number | The number of units for the time period.
  'units': "units_example", // String | The unit of time that the time period is measured in.
  'searchString': "searchString_example", // String | Filters the results to records that have string property values matching the `searchString`.
  'start': 56, // Number | The starting index of the returned records.
  'limit': 56 // Number | The maximum number of records to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsForTimePeriodGet(opts, (error, data, response) => {
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
 **_number** | **Number**| The number of units for the time period. | [optional] 
 **units** | **String**| The unit of time that the time period is measured in. | [optional] 
 **searchString** | **String**| Filters the results to records that have string property values matching the &#x60;searchString&#x60;. | [optional] 
 **start** | **Number**| The starting index of the returned records. | [optional] 
 **limit** | **Number**| The maximum number of records to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**AuditRecordArray**](AuditRecordArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsGet**
> AuditRecordArray comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsGet(opts)

Get audit records

Returns all records in the audit log, optionally for a certain date range. This contains information about events like space exports, group membership changes, app installations, etc. For more information, see [Audit log](https://confluence.atlassian.com/confcloud/audit-log-802164269.html) in the Confluence administrator&#x27;s guide.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.AuditApi();
let opts = { 
  'startDate': "startDate_example", // String | Filters the results to the records on or after the `startDate`. The `startDate` must be specified as a [timestamp](https://www.unixtimestamp.com/).
  'endDate': "endDate_example", // String | Filters the results to the records on or before the `endDate`. The `endDate` must be specified as a [timestamp](https://www.unixtimestamp.com/).
  'searchString': "searchString_example", // String | Filters the results to records that have string property values matching the `searchString`.
  'start': 56, // Number | The starting index of the returned records.
  'limit': 56 // Number | The maximum number of records to return per page. Note, this may be restricted by fixed system limits.
};
apiInstance.comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetAuditRecordsGet(opts, (error, data, response) => {
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
 **startDate** | **String**| Filters the results to the records on or after the &#x60;startDate&#x60;. The &#x60;startDate&#x60; must be specified as a [timestamp](https://www.unixtimestamp.com/). | [optional] 
 **endDate** | **String**| Filters the results to the records on or before the &#x60;endDate&#x60;. The &#x60;endDate&#x60; must be specified as a [timestamp](https://www.unixtimestamp.com/). | [optional] 
 **searchString** | **String**| Filters the results to records that have string property values matching the &#x60;searchString&#x60;. | [optional] 
 **start** | **Number**| The starting index of the returned records. | [optional] 
 **limit** | **Number**| The maximum number of records to return per page. Note, this may be restricted by fixed system limits. | [optional] 

### Return type

[**AuditRecordArray**](AuditRecordArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetRetentionPeriodGet"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetRetentionPeriodGet**
> RetentionPeriod comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetRetentionPeriodGet()

Get retention period

Returns the retention period for records in the audit log. The retention period is how long an audit record is kept for, from creation date until it is deleted.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.AuditApi();
apiInstance.comAtlassianConfluencePluginsRestapiResourcesAuditResourceGetRetentionPeriodGet((error, data, response) => {
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

[**RetentionPeriod**](RetentionPeriod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="comAtlassianConfluencePluginsRestapiResourcesAuditResourceSetRetentionPeriodPut"></a>
# **comAtlassianConfluencePluginsRestapiResourcesAuditResourceSetRetentionPeriodPut**
> RetentionPeriod comAtlassianConfluencePluginsRestapiResourcesAuditResourceSetRetentionPeriodPut(body)

Set retention period

Sets the retention period for records in the audit log. The retention period can be set to a maximum of 20 years.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Confluence Administrator&#x27; global permission.

### Example
```javascript
import TheConfluenceCloudRestApi from 'the_confluence_cloud_rest_api';

let apiInstance = new TheConfluenceCloudRestApi.AuditApi();
let body = new TheConfluenceCloudRestApi.RetentionPeriod(); // RetentionPeriod | The updated retention period.

apiInstance.comAtlassianConfluencePluginsRestapiResourcesAuditResourceSetRetentionPeriodPut(body, (error, data, response) => {
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
 **body** | [**RetentionPeriod**](RetentionPeriod.md)| The updated retention period. | 

### Return type

[**RetentionPeriod**](RetentionPeriod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

