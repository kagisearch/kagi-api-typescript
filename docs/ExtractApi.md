# .ExtractApi

All URIs are relative to *https://kagi.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extractContent**](ExtractApi.md#extractContent) | **POST** /extract | Extract page content as markdown from URLs


# **extractContent**
> ExtractResponse extractContent(extractRequest)

Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 

### Example


```typescript
import { createConfiguration, ExtractApi } from '';
import type { ExtractApiExtractContentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ExtractApi(configuration);

const request: ExtractApiExtractContentRequest = {
  
  extractRequest: {
    pages: [
      {
        url: "https://example.com/article",
      },
    ],
    timeout: 30,
    format: "json",
  },
};

const data = await apiInstance.extractContent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractRequest** | **ExtractRequest**|  |


### Return type

**ExtractResponse**

### Authorization

[kagi](README.md#kagi)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful extraction |  -  |
**400** | Invalid request parameters |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Forbidden - IP address not authorized |  -  |
**429** | Rate limited or usage limit exhausted |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


