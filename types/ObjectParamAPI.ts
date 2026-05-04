import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { EnrichSearch200Response } from '../models/EnrichSearch200Response';
import { ErrorDetail } from '../models/ErrorDetail';
import { ErrorEnvelope } from '../models/ErrorEnvelope';
import { ExtractRequest } from '../models/ExtractRequest';
import { ExtractResponse } from '../models/ExtractResponse';
import { FastGPT200Response } from '../models/FastGPT200Response';
import { FastGPT200ResponseData } from '../models/FastGPT200ResponseData';
import { FastGPTRequest } from '../models/FastGPTRequest';
import { Meta } from '../models/Meta';
import { PageInput } from '../models/PageInput';
import { PageOutput } from '../models/PageOutput';
import { Search200Response } from '../models/Search200Response';
import { Search200ResponseData } from '../models/Search200ResponseData';
import { SearchObject } from '../models/SearchObject';
import { SearchObjectImage } from '../models/SearchObjectImage';
import { SearchObjectThumbnail } from '../models/SearchObjectThumbnail';
import { SearchRequest } from '../models/SearchRequest';
import { SearchRequestExtract } from '../models/SearchRequestExtract';
import { SearchRequestFilters } from '../models/SearchRequestFilters';
import { SearchRequestLens } from '../models/SearchRequestLens';
import { SearchRequestPersonalizations } from '../models/SearchRequestPersonalizations';
import { SearchRequestPersonalizationsDomainsInner } from '../models/SearchRequestPersonalizationsDomainsInner';
import { SearchRequestPersonalizationsRegexesInner } from '../models/SearchRequestPersonalizationsRegexesInner';
import { SearchResult } from '../models/SearchResult';
import { SearchResultImage } from '../models/SearchResultImage';
import { Summary } from '../models/Summary';
import { SummaryData } from '../models/SummaryData';
import { Translate200Response } from '../models/Translate200Response';
import { Translate200ResponseOneOf } from '../models/Translate200ResponseOneOf';
import { Translate200ResponseOneOf1 } from '../models/Translate200ResponseOneOf1';
import { Translate200ResponseOneOfDefinition } from '../models/Translate200ResponseOneOfDefinition';
import { Translate200ResponseOneOfDefinitionDefinitionsInner } from '../models/Translate200ResponseOneOfDefinitionDefinitionsInner';
import { Translate200ResponseOneOfDefinitionDefinitionsInnerMeaningsInner } from '../models/Translate200ResponseOneOfDefinitionDefinitionsInnerMeaningsInner';
import { Translate200ResponseOneOfDetectedLanguage } from '../models/Translate200ResponseOneOfDetectedLanguage';
import { Translate400Response } from '../models/Translate400Response';
import { Translate500Response } from '../models/Translate500Response';
import { TranslateAlternatives200Response } from '../models/TranslateAlternatives200Response';
import { TranslateAlternatives200ResponseElementsInner } from '../models/TranslateAlternatives200ResponseElementsInner';
import { TranslateAlternatives401Response } from '../models/TranslateAlternatives401Response';
import { TranslateAlternatives402Response } from '../models/TranslateAlternatives402Response';
import { TranslateAlternatives500Response } from '../models/TranslateAlternatives500Response';
import { TranslateDetect200Response } from '../models/TranslateDetect200Response';
import { TranslateDetect400Response } from '../models/TranslateDetect400Response';
import { TranslateDetectRequest } from '../models/TranslateDetectRequest';
import { TranslateDictionary200Response } from '../models/TranslateDictionary200Response';
import { TranslateDictionary200ResponseDefinition } from '../models/TranslateDictionary200ResponseDefinition';
import { TranslateDictionary200ResponseDefinitionPrimaryMeaning } from '../models/TranslateDictionary200ResponseDefinitionPrimaryMeaning';
import { TranslateDictionary200ResponseDefinitionSecondaryMeaningsInner } from '../models/TranslateDictionary200ResponseDefinitionSecondaryMeaningsInner';
import { TranslateDictionary200ResponseLanguage } from '../models/TranslateDictionary200ResponseLanguage';
import { TranslateDictionary400Response } from '../models/TranslateDictionary400Response';
import { TranslateDictionary500Response } from '../models/TranslateDictionary500Response';
import { TranslateDictionaryRequest } from '../models/TranslateDictionaryRequest';
import { TranslateListLanguages200ResponseInner } from '../models/TranslateListLanguages200ResponseInner';
import { TranslateRequest } from '../models/TranslateRequest';
import { TranslateRequestText } from '../models/TranslateRequestText';
import { TranslateRomanize200Response } from '../models/TranslateRomanize200Response';
import { TranslateWordInsights200Response } from '../models/TranslateWordInsights200Response';
import { TranslateWordInsights200ResponseInsightsInner } from '../models/TranslateWordInsights200ResponseInsightsInner';
import { TranslateWordInsights200ResponseInsightsInnerVariationsInner } from '../models/TranslateWordInsights200ResponseInsightsInnerVariationsInner';
import { TranslateWordInsights400Response } from '../models/TranslateWordInsights400Response';
import { TranslateWordInsights500Response } from '../models/TranslateWordInsights500Response';
import { UploadText } from '../models/UploadText';

import { ObservableEnrichmentApi } from "./ObservableAPI";
import { EnrichmentApiRequestFactory, EnrichmentApiResponseProcessor} from "../apis/EnrichmentApi";

export interface EnrichmentApiEnrichSearchRequest {
    /**
     * Query to enrich
     * Defaults to: undefined
     * @type string
     * @memberof EnrichmentApienrichSearch
     */
    q: string
    /**
     * Enrich a search query with results pulled from Kagi indexes.
     * Defaults to: &#39;web&#39;
     * @type &#39;news&#39; | &#39;web&#39;
     * @memberof EnrichmentApienrichSearch
     */
    type: 'news' | 'web'
}

export class ObjectEnrichmentApi {
    private api: ObservableEnrichmentApi

    public constructor(configuration: Configuration, requestFactory?: EnrichmentApiRequestFactory, responseProcessor?: EnrichmentApiResponseProcessor) {
        this.api = new ObservableEnrichmentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get enriched search results
     * @param param the request object
     */
    public enrichSearchWithHttpInfo(param: EnrichmentApiEnrichSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<EnrichSearch200Response>> {
        return this.api.enrichSearchWithHttpInfo(param.q, param.type,  options).toPromise();
    }

    /**
     * Get enriched search results
     * @param param the request object
     */
    public enrichSearch(param: EnrichmentApiEnrichSearchRequest, options?: ConfigurationOptions): Promise<EnrichSearch200Response> {
        return this.api.enrichSearch(param.q, param.type,  options).toPromise();
    }

}

import { ObservableExtractApi } from "./ObservableAPI";
import { ExtractApiRequestFactory, ExtractApiResponseProcessor} from "../apis/ExtractApi";

export interface ExtractApiExtractContentRequest {
    /**
     * 
     * @type ExtractRequest
     * @memberof ExtractApiextractContent
     */
    extractRequest: ExtractRequest
}

export class ObjectExtractApi {
    private api: ObservableExtractApi

    public constructor(configuration: Configuration, requestFactory?: ExtractApiRequestFactory, responseProcessor?: ExtractApiResponseProcessor) {
        this.api = new ObservableExtractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 
     * Extract page content as markdown from URLs
     * @param param the request object
     */
    public extractContentWithHttpInfo(param: ExtractApiExtractContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExtractResponse>> {
        return this.api.extractContentWithHttpInfo(param.extractRequest,  options).toPromise();
    }

    /**
     * Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 
     * Extract page content as markdown from URLs
     * @param param the request object
     */
    public extractContent(param: ExtractApiExtractContentRequest, options?: ConfigurationOptions): Promise<ExtractResponse> {
        return this.api.extractContent(param.extractRequest,  options).toPromise();
    }

}

import { ObservableFastGPTApi } from "./ObservableAPI";
import { FastGPTApiRequestFactory, FastGPTApiResponseProcessor} from "../apis/FastGPTApi";

export interface FastGPTApiFastGPTRequest {
    /**
     * Contains the query to process.
     * @type FastGPTRequest
     * @memberof FastGPTApifastGPT
     */
    fastGPTRequest: FastGPTRequest
}

export class ObjectFastGPTApi {
    private api: ObservableFastGPTApi

    public constructor(configuration: Configuration, requestFactory?: FastGPTApiRequestFactory, responseProcessor?: FastGPTApiResponseProcessor) {
        this.api = new ObservableFastGPTApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * FastGPT is a Kagi service using powerful LLMs to answer user queries running a full search engine underneath. Think ChatGPT, but on steroids and faster! You can try the web app here.
     * Answer a query.
     * @param param the request object
     */
    public fastGPTWithHttpInfo(param: FastGPTApiFastGPTRequest, options?: ConfigurationOptions): Promise<HttpInfo<FastGPT200Response>> {
        return this.api.fastGPTWithHttpInfo(param.fastGPTRequest,  options).toPromise();
    }

    /**
     * FastGPT is a Kagi service using powerful LLMs to answer user queries running a full search engine underneath. Think ChatGPT, but on steroids and faster! You can try the web app here.
     * Answer a query.
     * @param param the request object
     */
    public fastGPT(param: FastGPTApiFastGPTRequest, options?: ConfigurationOptions): Promise<FastGPT200Response> {
        return this.api.fastGPT(param.fastGPTRequest,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiSearchRequest {
    /**
     * 
     * @type SearchRequest
     * @memberof SearchApisearch
     */
    searchRequest: SearchRequest
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Perform a web search
     * @param param the request object
     */
    public searchWithHttpInfo(param: SearchApiSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<Search200Response>> {
        return this.api.searchWithHttpInfo(param.searchRequest,  options).toPromise();
    }

    /**
     * Perform a web search
     * @param param the request object
     */
    public search(param: SearchApiSearchRequest, options?: ConfigurationOptions): Promise<Search200Response> {
        return this.api.search(param.searchRequest,  options).toPromise();
    }

}

import { ObservableSummarizerApi } from "./ObservableAPI";
import { SummarizerApiRequestFactory, SummarizerApiResponseProcessor} from "../apis/SummarizerApi";

export interface SummarizerApiSummarizeTextRequest {
    /**
     * Text to summarize
     * @type UploadText
     * @memberof SummarizerApisummarizeText
     */
    uploadText: UploadText
    /**
     * Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * Defaults to: &#39;cecil&#39;
     * @type &#39;cecil&#39; | &#39;agnes&#39; | &#39;daphne&#39; | &#39;muriel&#39;
     * @memberof SummarizerApisummarizeText
     */
    engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel'
    /**
     * Different summary types are provided that control the structure of the summary output.
     * Defaults to: &#39;summary&#39;
     * @type &#39;summary&#39; | &#39;takeaway&#39;
     * @memberof SummarizerApisummarizeText
     */
    summaryType?: 'summary' | 'takeaway'
    /**
     * The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * Defaults to: undefined
     * @type &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;DE&#39; | &#39;EL&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;ET&#39; | &#39;FI&#39; | &#39;FR&#39; | &#39;HU&#39; | &#39;ID&#39; | &#39;IT&#39; | &#39;JA&#39; | &#39;KO&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;NB&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;RO&#39; | &#39;RU&#39; | &#39;SK&#39; | &#39;SL&#39; | &#39;SV&#39; | &#39;TR&#39; | &#39;UK&#39; | &#39;ZH&#39; | &#39;ZH-HANT&#39;
     * @memberof SummarizerApisummarizeText
     */
    targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT'
    /**
     * Whether to allow cached requests &amp; responses.
     * Defaults to: true
     * @type boolean
     * @memberof SummarizerApisummarizeText
     */
    cache?: boolean
}

export interface SummarizerApiSummarizeURLRequest {
    /**
     * A URL to a document to summarize.
     * Defaults to: undefined
     * @type string
     * @memberof SummarizerApisummarizeURL
     */
    url: string
    /**
     * Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * Defaults to: &#39;cecil&#39;
     * @type &#39;cecil&#39; | &#39;agnes&#39; | &#39;daphne&#39; | &#39;muriel&#39;
     * @memberof SummarizerApisummarizeURL
     */
    engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel'
    /**
     * Different summary types are provided that control the structure of the summary output.
     * Defaults to: &#39;summary&#39;
     * @type &#39;summary&#39; | &#39;takeaway&#39;
     * @memberof SummarizerApisummarizeURL
     */
    summaryType?: 'summary' | 'takeaway'
    /**
     * The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * Defaults to: undefined
     * @type &#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;DE&#39; | &#39;EL&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;ET&#39; | &#39;FI&#39; | &#39;FR&#39; | &#39;HU&#39; | &#39;ID&#39; | &#39;IT&#39; | &#39;JA&#39; | &#39;KO&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;NB&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;RO&#39; | &#39;RU&#39; | &#39;SK&#39; | &#39;SL&#39; | &#39;SV&#39; | &#39;TR&#39; | &#39;UK&#39; | &#39;ZH&#39; | &#39;ZH-HANT&#39;
     * @memberof SummarizerApisummarizeURL
     */
    targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT'
    /**
     * Whether to allow cached requests &amp; responses.
     * Defaults to: true
     * @type boolean
     * @memberof SummarizerApisummarizeURL
     */
    cache?: boolean
}

export class ObjectSummarizerApi {
    private api: ObservableSummarizerApi

    public constructor(configuration: Configuration, requestFactory?: SummarizerApiRequestFactory, responseProcessor?: SummarizerApiResponseProcessor) {
        this.api = new ObservableSummarizerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload text to summarize.
     * @param param the request object
     */
    public summarizeTextWithHttpInfo(param: SummarizerApiSummarizeTextRequest, options?: ConfigurationOptions): Promise<HttpInfo<Summary>> {
        return this.api.summarizeTextWithHttpInfo(param.uploadText, param.engine, param.summaryType, param.targetLanguage, param.cache,  options).toPromise();
    }

    /**
     * Upload text to summarize.
     * @param param the request object
     */
    public summarizeText(param: SummarizerApiSummarizeTextRequest, options?: ConfigurationOptions): Promise<Summary> {
        return this.api.summarizeText(param.uploadText, param.engine, param.summaryType, param.targetLanguage, param.cache,  options).toPromise();
    }

    /**
     * Get a summary for a URL
     * @param param the request object
     */
    public summarizeURLWithHttpInfo(param: SummarizerApiSummarizeURLRequest, options?: ConfigurationOptions): Promise<HttpInfo<Summary>> {
        return this.api.summarizeURLWithHttpInfo(param.url, param.engine, param.summaryType, param.targetLanguage, param.cache,  options).toPromise();
    }

    /**
     * Get a summary for a URL
     * @param param the request object
     */
    public summarizeURL(param: SummarizerApiSummarizeURLRequest, options?: ConfigurationOptions): Promise<Summary> {
        return this.api.summarizeURL(param.url, param.engine, param.summaryType, param.targetLanguage, param.cache,  options).toPromise();
    }

}

import { ObservableTranslateApi } from "./ObservableAPI";
import { TranslateApiRequestFactory, TranslateApiResponseProcessor} from "../apis/TranslateApi";

export interface TranslateApiTranslateRequest {
    /**
     * 
     * @type TranslateRequest
     * @memberof TranslateApitranslate
     */
    translateRequest: TranslateRequest
}

export interface TranslateApiTranslateAlternativesRequest {
    /**
     * Original text to translate. In partial mode, this serves as context for the phrase (may be ignored if not relevant).
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateAlternatives
     */
    originalText: string
    /**
     * In standard mode: existing full translation of the original text. In partial mode: the specific phrase you want alternative ways to express.
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateAlternatives
     */
    existingTranslation: string
    /**
     * Target language code (ISO-639) for the translations
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateAlternatives
     */
    targetLang: string
    /**
     * Source language code (ISO-639) of the original text. Helps provide more accurate alternatives by understanding language-specific nuances.
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateAlternatives
     */
    sourceLang?: string
    /**
     * Language code (ISO-639) for the explanations
     * Defaults to: &#39;en&#39;
     * @type string
     * @memberof TranslateApitranslateAlternatives
     */
    targetExplanationLanguage?: string
    /**
     * JSON string with translation customization options: - &#x60;formality&#x60;: Controls formality level [\\\&quot;default\\\&quot;, \\\&quot;more\\\&quot;, \\\&quot;less\\\&quot;] - &#x60;speaker_gender&#x60;: Gender of the speaker [\\\&quot;unknown\\\&quot;, \\\&quot;feminine\\\&quot;, \\\&quot;masculine\\\&quot;, \\\&quot;neutral\\\&quot;] - &#x60;addressee_gender&#x60;: Gender of the person being addressed [\\\&quot;unknown\\\&quot;, \\\&quot;feminine\\\&quot;, \\\&quot;masculine\\\&quot;, \\\&quot;neutral\\\&quot;] - &#x60;style&#x60;: Translation style [\\\&quot;natural\\\&quot;, \\\&quot;literal\\\&quot;] - &#x60;context&#x60;: Additional context to inform translation (string) 
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateAlternatives
     */
    translationOptions?: string
    /**
     * Mode switch: \\\&#39;false\\\&#39; for standard mode (full translation alternatives), \\\&#39;true\\\&#39; for partial mode (alternative ways to phrase a specific part)
     * Defaults to: &#39;false&#39;
     * @type string
     * @memberof TranslateApitranslateAlternatives
     */
    partialTranslation?: string
}

export interface TranslateApiTranslateDetectRequest {
    /**
     * 
     * @type TranslateDetectRequest
     * @memberof TranslateApitranslateDetect
     */
    translateDetectRequest: TranslateDetectRequest
}

export interface TranslateApiTranslateDictionaryRequest {
    /**
     * 
     * @type TranslateDictionaryRequest
     * @memberof TranslateApitranslateDictionary
     */
    translateDictionaryRequest: TranslateDictionaryRequest
}

export interface TranslateApiTranslateListLanguagesRequest {
    /**
     * Type of languages to return (\&#39;source\&#39; or \&#39;target\&#39;)
     * Defaults to: undefined
     * @type &#39;source&#39; | &#39;target&#39;
     * @memberof TranslateApitranslateListLanguages
     */
    type?: 'source' | 'target'
    /**
     * Locale code to use for language names (e.g., \&#39;en\&#39;, \&#39;de\&#39;, \&#39;fr\&#39;)
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateListLanguages
     */
    locale?: string
}

export interface TranslateApiTranslateRomanizeRequest {
    /**
     * Text to romanize
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateRomanize
     */
    text: string
    /**
     * Language code (ISO-639) of the source text
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateRomanize
     */
    language: string
}

export interface TranslateApiTranslateWordInsightsRequest {
    /**
     * Source text that was translated
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateWordInsights
     */
    originalText: string
    /**
     * Translated text to analyze for linguistic insights
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateWordInsights
     */
    translatedText: string
    /**
     * Language code (ISO-639) for the explanations and type labels
     * Defaults to: &#39;en&#39;
     * @type string
     * @memberof TranslateApitranslateWordInsights
     */
    targetExplanationLanguage?: string
    /**
     * Optional JSON string with translation options that provide context for the insights. Can include formality, gender preferences, and style. 
     * Defaults to: undefined
     * @type string
     * @memberof TranslateApitranslateWordInsights
     */
    translationOptions?: string
}

export class ObjectTranslateApi {
    private api: ObservableTranslateApi

    public constructor(configuration: Configuration, requestFactory?: TranslateApiRequestFactory, responseProcessor?: TranslateApiResponseProcessor) {
        this.api = new ObservableTranslateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Translates text between languages with customizable options for gender, formality, and style. Supports both single text translation and efficient batch translation of multiple text snippets with context awareness.
     * Text Translation
     * @param param the request object
     */
    public translateWithHttpInfo(param: TranslateApiTranslateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Translate200Response>> {
        return this.api.translateWithHttpInfo(param.translateRequest,  options).toPromise();
    }

    /**
     * Translates text between languages with customizable options for gender, formality, and style. Supports both single text translation and efficient batch translation of multiple text snippets with context awareness.
     * Text Translation
     * @param param the request object
     */
    public translate(param: TranslateApiTranslateRequest, options?: ConfigurationOptions): Promise<Translate200Response> {
        return this.api.translate(param.translateRequest,  options).toPromise();
    }

    /**
     * Provides alternative translation options for a given text with explanations. Supports two modes: standard mode (alternatives for a full translation) and partial mode (alternative ways to phrase a specific part of a translation).
     * Alternative Translations
     * @param param the request object
     */
    public translateAlternativesWithHttpInfo(param: TranslateApiTranslateAlternativesRequest, options?: ConfigurationOptions): Promise<HttpInfo<TranslateAlternatives200Response>> {
        return this.api.translateAlternativesWithHttpInfo(param.originalText, param.existingTranslation, param.targetLang, param.sourceLang, param.targetExplanationLanguage, param.translationOptions, param.partialTranslation,  options).toPromise();
    }

    /**
     * Provides alternative translation options for a given text with explanations. Supports two modes: standard mode (alternatives for a full translation) and partial mode (alternative ways to phrase a specific part of a translation).
     * Alternative Translations
     * @param param the request object
     */
    public translateAlternatives(param: TranslateApiTranslateAlternativesRequest, options?: ConfigurationOptions): Promise<TranslateAlternatives200Response> {
        return this.api.translateAlternatives(param.originalText, param.existingTranslation, param.targetLang, param.sourceLang, param.targetExplanationLanguage, param.translationOptions, param.partialTranslation,  options).toPromise();
    }

    /**
     * Detects the language of the provided text.
     * Language Detection
     * @param param the request object
     */
    public translateDetectWithHttpInfo(param: TranslateApiTranslateDetectRequest, options?: ConfigurationOptions): Promise<HttpInfo<TranslateDetect200Response>> {
        return this.api.translateDetectWithHttpInfo(param.translateDetectRequest,  options).toPromise();
    }

    /**
     * Detects the language of the provided text.
     * Language Detection
     * @param param the request object
     */
    public translateDetect(param: TranslateApiTranslateDetectRequest, options?: ConfigurationOptions): Promise<TranslateDetect200Response> {
        return this.api.translateDetect(param.translateDetectRequest,  options).toPromise();
    }

    /**
     * Provides dictionary definitions for words in different languages.  **Translation behavior:** - Fields translated to `definition_language`: definition, notes, etymology, part_of_speech, usage_level, dialect - Fields that remain in `word_language`: word, synonyms, pronunciation, plural, related_words, examples (with translations in parentheses when languages differ) - Fields always in English (strict enums): gender (\"masculine\", \"feminine\", \"neuter\", \"common\"), temporal_trend (\"increasing\", \"stable\", \"decreasing\") 
     * Dictionary
     * @param param the request object
     */
    public translateDictionaryWithHttpInfo(param: TranslateApiTranslateDictionaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<TranslateDictionary200Response>> {
        return this.api.translateDictionaryWithHttpInfo(param.translateDictionaryRequest,  options).toPromise();
    }

    /**
     * Provides dictionary definitions for words in different languages.  **Translation behavior:** - Fields translated to `definition_language`: definition, notes, etymology, part_of_speech, usage_level, dialect - Fields that remain in `word_language`: word, synonyms, pronunciation, plural, related_words, examples (with translations in parentheses when languages differ) - Fields always in English (strict enums): gender (\"masculine\", \"feminine\", \"neuter\", \"common\"), temporal_trend (\"increasing\", \"stable\", \"decreasing\") 
     * Dictionary
     * @param param the request object
     */
    public translateDictionary(param: TranslateApiTranslateDictionaryRequest, options?: ConfigurationOptions): Promise<TranslateDictionary200Response> {
        return this.api.translateDictionary(param.translateDictionaryRequest,  options).toPromise();
    }

    /**
     * Returns a list of languages supported by the translation API.  The response includes language codes, names, and whether each language supports formality settings. 
     * List Supported Languages
     * @param param the request object
     */
    public translateListLanguagesWithHttpInfo(param: TranslateApiTranslateListLanguagesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<TranslateListLanguages200ResponseInner>>> {
        return this.api.translateListLanguagesWithHttpInfo(param.type, param.locale,  options).toPromise();
    }

    /**
     * Returns a list of languages supported by the translation API.  The response includes language codes, names, and whether each language supports formality settings. 
     * List Supported Languages
     * @param param the request object
     */
    public translateListLanguages(param: TranslateApiTranslateListLanguagesRequest = {}, options?: ConfigurationOptions): Promise<Array<TranslateListLanguages200ResponseInner>> {
        return this.api.translateListLanguages(param.type, param.locale,  options).toPromise();
    }

    /**
     * Converts non-Latin script text to Latin script (romanization/transliteration). Uses standardized romanization styles for each language: Hepburn for Japanese, Pinyin for Chinese, ALA-LC for Arabic, etc.
     * Text Romanization
     * @param param the request object
     */
    public translateRomanizeWithHttpInfo(param: TranslateApiTranslateRomanizeRequest, options?: ConfigurationOptions): Promise<HttpInfo<TranslateRomanize200Response>> {
        return this.api.translateRomanizeWithHttpInfo(param.text, param.language,  options).toPromise();
    }

    /**
     * Converts non-Latin script text to Latin script (romanization/transliteration). Uses standardized romanization styles for each language: Hepburn for Japanese, Pinyin for Chinese, ALA-LC for Arabic, etc.
     * Text Romanization
     * @param param the request object
     */
    public translateRomanize(param: TranslateApiTranslateRomanizeRequest, options?: ConfigurationOptions): Promise<TranslateRomanize200Response> {
        return this.api.translateRomanize(param.text, param.language,  options).toPromise();
    }

    /**
     * Provides detailed linguistic insights and alternatives for translated text. The API identifies 3-5 key words or phrases in the translated text that have meaningful alternative expressions, and returns:  1. A marked version of the translation with insight markers 2. Alternative expressions for each identified word/phrase 3. Brief explanations for each alternative in the target explanation language 4. Type labels categorizing each insight (e.g., \"Lexical choice\", \"Cultural reference\") 
     * Word Insights
     * @param param the request object
     */
    public translateWordInsightsWithHttpInfo(param: TranslateApiTranslateWordInsightsRequest, options?: ConfigurationOptions): Promise<HttpInfo<TranslateWordInsights200Response>> {
        return this.api.translateWordInsightsWithHttpInfo(param.originalText, param.translatedText, param.targetExplanationLanguage, param.translationOptions,  options).toPromise();
    }

    /**
     * Provides detailed linguistic insights and alternatives for translated text. The API identifies 3-5 key words or phrases in the translated text that have meaningful alternative expressions, and returns:  1. A marked version of the translation with insight markers 2. Alternative expressions for each identified word/phrase 3. Brief explanations for each alternative in the target explanation language 4. Type labels categorizing each insight (e.g., \"Lexical choice\", \"Cultural reference\") 
     * Word Insights
     * @param param the request object
     */
    public translateWordInsights(param: TranslateApiTranslateWordInsightsRequest, options?: ConfigurationOptions): Promise<TranslateWordInsights200Response> {
        return this.api.translateWordInsights(param.originalText, param.translatedText, param.targetExplanationLanguage, param.translationOptions,  options).toPromise();
    }

}
