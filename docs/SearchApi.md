# .SearchApi

All URIs are relative to *https://kagi.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **POST** /search | Perform a web search


# **search**
> Search200Response search(searchRequest)


### Example


```typescript
import { createConfiguration, SearchApi } from '';
import type { SearchApiSearchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SearchApi(configuration);

const request: SearchApiSearchRequest = {
  
  searchRequest: {
    query: "query_example",
    workflow: "search",
    format: "json",
    lensId: "lensId_example",
    lens: {
      sitesIncluded: [
        "sitesIncluded_example",
      ],
      sitesExcluded: [
        "sitesExcluded_example",
      ],
      keywordsIncluded: [
        "keywordsIncluded_example",
      ],
      keywordsExcluded: [
        "keywordsExcluded_example",
      ],
      fileType: "fileType_example",
      timeAfter: new Date('1970-01-01').toISOString().split('T')[0];,
      timeBefore: new Date('1970-01-01').toISOString().split('T')[0];,
      timeRelative: "day",
      searchRegion: "searchRegion_example",
    },
    timeout: 0.5,
    page: 1,
    limit: 1,
    filters: {
      region: "region_example",
      after: new Date('1970-01-01').toISOString().split('T')[0];,
      before: new Date('1970-01-01').toISOString().split('T')[0];,
    },
    extract: {
      count: 1,
      timeout: 0.5,
    },
    safeSearch: true,
    personalizations: {
      domains: [
        {
          domain: "domain_example",
          bias: 3.14,
        },
      ],
      regexes: [
        {
          regex: "regex_example",
          replacement: "replacement_example",
        },
      ],
    },
  },
};

const data = await apiInstance.search(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchRequest** | **SearchRequest**|  |


### Return type

**Search200Response**

### Authorization

[kagi](README.md#kagi)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/markdown


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Invalid request parameters |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Forbidden - IP address not authorized |  -  |
**429** | Rate limited or usage limit exhausted |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


