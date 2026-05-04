import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableEnrichmentApi } from './ObservableAPI';

import { EnrichmentApiRequestFactory, EnrichmentApiResponseProcessor} from "../apis/EnrichmentApi";
export class PromiseEnrichmentApi {
    private api: ObservableEnrichmentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnrichmentApiRequestFactory,
        responseProcessor?: EnrichmentApiResponseProcessor
    ) {
        this.api = new ObservableEnrichmentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get enriched search results
     * @param q Query to enrich
     * @param type Enrich a search query with results pulled from Kagi indexes.
     */
    public enrichSearchWithHttpInfo(q: string, type: 'news' | 'web', _options?: PromiseConfigurationOptions): Promise<HttpInfo<EnrichSearch200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.enrichSearchWithHttpInfo(q, type, observableOptions);
        return result.toPromise();
    }

    /**
     * Get enriched search results
     * @param q Query to enrich
     * @param type Enrich a search query with results pulled from Kagi indexes.
     */
    public enrichSearch(q: string, type: 'news' | 'web', _options?: PromiseConfigurationOptions): Promise<EnrichSearch200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.enrichSearch(q, type, observableOptions);
        return result.toPromise();
    }


}



import { ObservableExtractApi } from './ObservableAPI';

import { ExtractApiRequestFactory, ExtractApiResponseProcessor} from "../apis/ExtractApi";
export class PromiseExtractApi {
    private api: ObservableExtractApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExtractApiRequestFactory,
        responseProcessor?: ExtractApiResponseProcessor
    ) {
        this.api = new ObservableExtractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 
     * Extract page content as markdown from URLs
     * @param extractRequest
     */
    public extractContentWithHttpInfo(extractRequest: ExtractRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExtractResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.extractContentWithHttpInfo(extractRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 
     * Extract page content as markdown from URLs
     * @param extractRequest
     */
    public extractContent(extractRequest: ExtractRequest, _options?: PromiseConfigurationOptions): Promise<ExtractResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.extractContent(extractRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFastGPTApi } from './ObservableAPI';

import { FastGPTApiRequestFactory, FastGPTApiResponseProcessor} from "../apis/FastGPTApi";
export class PromiseFastGPTApi {
    private api: ObservableFastGPTApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FastGPTApiRequestFactory,
        responseProcessor?: FastGPTApiResponseProcessor
    ) {
        this.api = new ObservableFastGPTApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * FastGPT is a Kagi service using powerful LLMs to answer user queries running a full search engine underneath. Think ChatGPT, but on steroids and faster! You can try the web app here.
     * Answer a query.
     * @param fastGPTRequest Contains the query to process.
     */
    public fastGPTWithHttpInfo(fastGPTRequest: FastGPTRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FastGPT200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.fastGPTWithHttpInfo(fastGPTRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * FastGPT is a Kagi service using powerful LLMs to answer user queries running a full search engine underneath. Think ChatGPT, but on steroids and faster! You can try the web app here.
     * Answer a query.
     * @param fastGPTRequest Contains the query to process.
     */
    public fastGPT(fastGPTRequest: FastGPTRequest, _options?: PromiseConfigurationOptions): Promise<FastGPT200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.fastGPT(fastGPTRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Perform a web search
     * @param searchRequest
     */
    public searchWithHttpInfo(searchRequest: SearchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Search200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchWithHttpInfo(searchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a web search
     * @param searchRequest
     */
    public search(searchRequest: SearchRequest, _options?: PromiseConfigurationOptions): Promise<Search200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.search(searchRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSummarizerApi } from './ObservableAPI';

import { SummarizerApiRequestFactory, SummarizerApiResponseProcessor} from "../apis/SummarizerApi";
export class PromiseSummarizerApi {
    private api: ObservableSummarizerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SummarizerApiRequestFactory,
        responseProcessor?: SummarizerApiResponseProcessor
    ) {
        this.api = new ObservableSummarizerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload text to summarize.
     * @param uploadText Text to summarize
     * @param [engine] Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * @param [summaryType] Different summary types are provided that control the structure of the summary output.
     * @param [targetLanguage] The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * @param [cache] Whether to allow cached requests &amp; responses.
     */
    public summarizeTextWithHttpInfo(uploadText: UploadText, engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel', summaryType?: 'summary' | 'takeaway', targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT', cache?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Summary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.summarizeTextWithHttpInfo(uploadText, engine, summaryType, targetLanguage, cache, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload text to summarize.
     * @param uploadText Text to summarize
     * @param [engine] Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * @param [summaryType] Different summary types are provided that control the structure of the summary output.
     * @param [targetLanguage] The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * @param [cache] Whether to allow cached requests &amp; responses.
     */
    public summarizeText(uploadText: UploadText, engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel', summaryType?: 'summary' | 'takeaway', targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT', cache?: boolean, _options?: PromiseConfigurationOptions): Promise<Summary> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.summarizeText(uploadText, engine, summaryType, targetLanguage, cache, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a summary for a URL
     * @param url A URL to a document to summarize.
     * @param [engine] Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * @param [summaryType] Different summary types are provided that control the structure of the summary output.
     * @param [targetLanguage] The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * @param [cache] Whether to allow cached requests &amp; responses.
     */
    public summarizeURLWithHttpInfo(url: string, engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel', summaryType?: 'summary' | 'takeaway', targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT', cache?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Summary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.summarizeURLWithHttpInfo(url, engine, summaryType, targetLanguage, cache, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a summary for a URL
     * @param url A URL to a document to summarize.
     * @param [engine] Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * @param [summaryType] Different summary types are provided that control the structure of the summary output.
     * @param [targetLanguage] The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * @param [cache] Whether to allow cached requests &amp; responses.
     */
    public summarizeURL(url: string, engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel', summaryType?: 'summary' | 'takeaway', targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT', cache?: boolean, _options?: PromiseConfigurationOptions): Promise<Summary> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.summarizeURL(url, engine, summaryType, targetLanguage, cache, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTranslateApi } from './ObservableAPI';

import { TranslateApiRequestFactory, TranslateApiResponseProcessor} from "../apis/TranslateApi";
export class PromiseTranslateApi {
    private api: ObservableTranslateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TranslateApiRequestFactory,
        responseProcessor?: TranslateApiResponseProcessor
    ) {
        this.api = new ObservableTranslateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Translates text between languages with customizable options for gender, formality, and style. Supports both single text translation and efficient batch translation of multiple text snippets with context awareness.
     * Text Translation
     * @param translateRequest
     */
    public translateWithHttpInfo(translateRequest: TranslateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Translate200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateWithHttpInfo(translateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Translates text between languages with customizable options for gender, formality, and style. Supports both single text translation and efficient batch translation of multiple text snippets with context awareness.
     * Text Translation
     * @param translateRequest
     */
    public translate(translateRequest: TranslateRequest, _options?: PromiseConfigurationOptions): Promise<Translate200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translate(translateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Provides alternative translation options for a given text with explanations. Supports two modes: standard mode (alternatives for a full translation) and partial mode (alternative ways to phrase a specific part of a translation).
     * Alternative Translations
     * @param originalText Original text to translate. In partial mode, this serves as context for the phrase (may be ignored if not relevant).
     * @param existingTranslation In standard mode: existing full translation of the original text. In partial mode: the specific phrase you want alternative ways to express.
     * @param targetLang Target language code (ISO-639) for the translations
     * @param [sourceLang] Source language code (ISO-639) of the original text. Helps provide more accurate alternatives by understanding language-specific nuances.
     * @param [targetExplanationLanguage] Language code (ISO-639) for the explanations
     * @param [translationOptions] JSON string with translation customization options: - &#x60;formality&#x60;: Controls formality level [\\\&quot;default\\\&quot;, \\\&quot;more\\\&quot;, \\\&quot;less\\\&quot;] - &#x60;speaker_gender&#x60;: Gender of the speaker [\\\&quot;unknown\\\&quot;, \\\&quot;feminine\\\&quot;, \\\&quot;masculine\\\&quot;, \\\&quot;neutral\\\&quot;] - &#x60;addressee_gender&#x60;: Gender of the person being addressed [\\\&quot;unknown\\\&quot;, \\\&quot;feminine\\\&quot;, \\\&quot;masculine\\\&quot;, \\\&quot;neutral\\\&quot;] - &#x60;style&#x60;: Translation style [\\\&quot;natural\\\&quot;, \\\&quot;literal\\\&quot;] - &#x60;context&#x60;: Additional context to inform translation (string) 
     * @param [partialTranslation] Mode switch: \\\&#39;false\\\&#39; for standard mode (full translation alternatives), \\\&#39;true\\\&#39; for partial mode (alternative ways to phrase a specific part)
     */
    public translateAlternativesWithHttpInfo(originalText: string, existingTranslation: string, targetLang: string, sourceLang?: string, targetExplanationLanguage?: string, translationOptions?: string, partialTranslation?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TranslateAlternatives200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateAlternativesWithHttpInfo(originalText, existingTranslation, targetLang, sourceLang, targetExplanationLanguage, translationOptions, partialTranslation, observableOptions);
        return result.toPromise();
    }

    /**
     * Provides alternative translation options for a given text with explanations. Supports two modes: standard mode (alternatives for a full translation) and partial mode (alternative ways to phrase a specific part of a translation).
     * Alternative Translations
     * @param originalText Original text to translate. In partial mode, this serves as context for the phrase (may be ignored if not relevant).
     * @param existingTranslation In standard mode: existing full translation of the original text. In partial mode: the specific phrase you want alternative ways to express.
     * @param targetLang Target language code (ISO-639) for the translations
     * @param [sourceLang] Source language code (ISO-639) of the original text. Helps provide more accurate alternatives by understanding language-specific nuances.
     * @param [targetExplanationLanguage] Language code (ISO-639) for the explanations
     * @param [translationOptions] JSON string with translation customization options: - &#x60;formality&#x60;: Controls formality level [\\\&quot;default\\\&quot;, \\\&quot;more\\\&quot;, \\\&quot;less\\\&quot;] - &#x60;speaker_gender&#x60;: Gender of the speaker [\\\&quot;unknown\\\&quot;, \\\&quot;feminine\\\&quot;, \\\&quot;masculine\\\&quot;, \\\&quot;neutral\\\&quot;] - &#x60;addressee_gender&#x60;: Gender of the person being addressed [\\\&quot;unknown\\\&quot;, \\\&quot;feminine\\\&quot;, \\\&quot;masculine\\\&quot;, \\\&quot;neutral\\\&quot;] - &#x60;style&#x60;: Translation style [\\\&quot;natural\\\&quot;, \\\&quot;literal\\\&quot;] - &#x60;context&#x60;: Additional context to inform translation (string) 
     * @param [partialTranslation] Mode switch: \\\&#39;false\\\&#39; for standard mode (full translation alternatives), \\\&#39;true\\\&#39; for partial mode (alternative ways to phrase a specific part)
     */
    public translateAlternatives(originalText: string, existingTranslation: string, targetLang: string, sourceLang?: string, targetExplanationLanguage?: string, translationOptions?: string, partialTranslation?: string, _options?: PromiseConfigurationOptions): Promise<TranslateAlternatives200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateAlternatives(originalText, existingTranslation, targetLang, sourceLang, targetExplanationLanguage, translationOptions, partialTranslation, observableOptions);
        return result.toPromise();
    }

    /**
     * Detects the language of the provided text.
     * Language Detection
     * @param translateDetectRequest
     */
    public translateDetectWithHttpInfo(translateDetectRequest: TranslateDetectRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TranslateDetect200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateDetectWithHttpInfo(translateDetectRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Detects the language of the provided text.
     * Language Detection
     * @param translateDetectRequest
     */
    public translateDetect(translateDetectRequest: TranslateDetectRequest, _options?: PromiseConfigurationOptions): Promise<TranslateDetect200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateDetect(translateDetectRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Provides dictionary definitions for words in different languages.  **Translation behavior:** - Fields translated to `definition_language`: definition, notes, etymology, part_of_speech, usage_level, dialect - Fields that remain in `word_language`: word, synonyms, pronunciation, plural, related_words, examples (with translations in parentheses when languages differ) - Fields always in English (strict enums): gender (\"masculine\", \"feminine\", \"neuter\", \"common\"), temporal_trend (\"increasing\", \"stable\", \"decreasing\") 
     * Dictionary
     * @param translateDictionaryRequest
     */
    public translateDictionaryWithHttpInfo(translateDictionaryRequest: TranslateDictionaryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TranslateDictionary200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateDictionaryWithHttpInfo(translateDictionaryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Provides dictionary definitions for words in different languages.  **Translation behavior:** - Fields translated to `definition_language`: definition, notes, etymology, part_of_speech, usage_level, dialect - Fields that remain in `word_language`: word, synonyms, pronunciation, plural, related_words, examples (with translations in parentheses when languages differ) - Fields always in English (strict enums): gender (\"masculine\", \"feminine\", \"neuter\", \"common\"), temporal_trend (\"increasing\", \"stable\", \"decreasing\") 
     * Dictionary
     * @param translateDictionaryRequest
     */
    public translateDictionary(translateDictionaryRequest: TranslateDictionaryRequest, _options?: PromiseConfigurationOptions): Promise<TranslateDictionary200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateDictionary(translateDictionaryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of languages supported by the translation API.  The response includes language codes, names, and whether each language supports formality settings. 
     * List Supported Languages
     * @param [type] Type of languages to return (\&#39;source\&#39; or \&#39;target\&#39;)
     * @param [locale] Locale code to use for language names (e.g., \&#39;en\&#39;, \&#39;de\&#39;, \&#39;fr\&#39;)
     */
    public translateListLanguagesWithHttpInfo(type?: 'source' | 'target', locale?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<TranslateListLanguages200ResponseInner>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateListLanguagesWithHttpInfo(type, locale, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of languages supported by the translation API.  The response includes language codes, names, and whether each language supports formality settings. 
     * List Supported Languages
     * @param [type] Type of languages to return (\&#39;source\&#39; or \&#39;target\&#39;)
     * @param [locale] Locale code to use for language names (e.g., \&#39;en\&#39;, \&#39;de\&#39;, \&#39;fr\&#39;)
     */
    public translateListLanguages(type?: 'source' | 'target', locale?: string, _options?: PromiseConfigurationOptions): Promise<Array<TranslateListLanguages200ResponseInner>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateListLanguages(type, locale, observableOptions);
        return result.toPromise();
    }

    /**
     * Converts non-Latin script text to Latin script (romanization/transliteration). Uses standardized romanization styles for each language: Hepburn for Japanese, Pinyin for Chinese, ALA-LC for Arabic, etc.
     * Text Romanization
     * @param text Text to romanize
     * @param language Language code (ISO-639) of the source text
     */
    public translateRomanizeWithHttpInfo(text: string, language: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TranslateRomanize200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateRomanizeWithHttpInfo(text, language, observableOptions);
        return result.toPromise();
    }

    /**
     * Converts non-Latin script text to Latin script (romanization/transliteration). Uses standardized romanization styles for each language: Hepburn for Japanese, Pinyin for Chinese, ALA-LC for Arabic, etc.
     * Text Romanization
     * @param text Text to romanize
     * @param language Language code (ISO-639) of the source text
     */
    public translateRomanize(text: string, language: string, _options?: PromiseConfigurationOptions): Promise<TranslateRomanize200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateRomanize(text, language, observableOptions);
        return result.toPromise();
    }

    /**
     * Provides detailed linguistic insights and alternatives for translated text. The API identifies 3-5 key words or phrases in the translated text that have meaningful alternative expressions, and returns:  1. A marked version of the translation with insight markers 2. Alternative expressions for each identified word/phrase 3. Brief explanations for each alternative in the target explanation language 4. Type labels categorizing each insight (e.g., \"Lexical choice\", \"Cultural reference\") 
     * Word Insights
     * @param originalText Source text that was translated
     * @param translatedText Translated text to analyze for linguistic insights
     * @param [targetExplanationLanguage] Language code (ISO-639) for the explanations and type labels
     * @param [translationOptions] Optional JSON string with translation options that provide context for the insights. Can include formality, gender preferences, and style. 
     */
    public translateWordInsightsWithHttpInfo(originalText: string, translatedText: string, targetExplanationLanguage?: string, translationOptions?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TranslateWordInsights200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateWordInsightsWithHttpInfo(originalText, translatedText, targetExplanationLanguage, translationOptions, observableOptions);
        return result.toPromise();
    }

    /**
     * Provides detailed linguistic insights and alternatives for translated text. The API identifies 3-5 key words or phrases in the translated text that have meaningful alternative expressions, and returns:  1. A marked version of the translation with insight markers 2. Alternative expressions for each identified word/phrase 3. Brief explanations for each alternative in the target explanation language 4. Type labels categorizing each insight (e.g., \"Lexical choice\", \"Cultural reference\") 
     * Word Insights
     * @param originalText Source text that was translated
     * @param translatedText Translated text to analyze for linguistic insights
     * @param [targetExplanationLanguage] Language code (ISO-639) for the explanations and type labels
     * @param [translationOptions] Optional JSON string with translation options that provide context for the insights. Can include formality, gender preferences, and style. 
     */
    public translateWordInsights(originalText: string, translatedText: string, targetExplanationLanguage?: string, translationOptions?: string, _options?: PromiseConfigurationOptions): Promise<TranslateWordInsights200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.translateWordInsights(originalText, translatedText, targetExplanationLanguage, translationOptions, observableOptions);
        return result.toPromise();
    }


}



