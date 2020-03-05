# TheConfluenceCloudRestApi.LookAndFeelType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selected** | **String** | The look and feel scheme. If you set this to &#x60;global&#x60;, you must specify the current global look and feel settings as a &#x60;global&#x60; object in this request. Similarly, if you set this to &#x60;custom&#x60;, you must specify the current custom look and feel settings as a &#x60;custom&#x60; object in this request. | 
**global** | [**LookAndFeel**](LookAndFeel.md) |  | [optional] 
**custom** | [**LookAndFeel**](LookAndFeel.md) |  | [optional] 

<a name="SelectedEnum"></a>
## Enum: SelectedEnum

* `global` (value: `"global"`)
* `custom` (value: `"custom"`)

