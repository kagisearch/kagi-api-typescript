import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { EnrichmentApiRequestFactory, EnrichmentApiResponseProcessor} from "../apis/EnrichmentApi";
export class ObservableEnrichmentApi {
    private requestFactory: EnrichmentApiRequestFactory;
    private responseProcessor: EnrichmentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnrichmentApiRequestFactory,
        responseProcessor?: EnrichmentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnrichmentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnrichmentApiResponseProcessor();
    }

    /**
     * Get enriched search results
     * @param q Query to enrich
     * @param type Enrich a search query with results pulled from Kagi indexes.
     */
    public enrichSearchWithHttpInfo(q: string, type: 'news' | 'web', _options?: ConfigurationOptions): Observable<HttpInfo<EnrichSearch200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.enrichSearch(q, type, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enrichSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get enriched search results
     * @param q Query to enrich
     * @param type Enrich a search query with results pulled from Kagi indexes.
     */
    public enrichSearch(q: string, type: 'news' | 'web', _options?: ConfigurationOptions): Observable<EnrichSearch200Response> {
        return this.enrichSearchWithHttpInfo(q, type, _options).pipe(map((apiResponse: HttpInfo<EnrichSearch200Response>) => apiResponse.data));
    }

}

import { ExtractApiRequestFactory, ExtractApiResponseProcessor} from "../apis/ExtractApi";
export class ObservableExtractApi {
    private requestFactory: ExtractApiRequestFactory;
    private responseProcessor: ExtractApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExtractApiRequestFactory,
        responseProcessor?: ExtractApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExtractApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExtractApiResponseProcessor();
    }

    /**
     * Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 
     * Extract page content as markdown from URLs
     * @param extractRequest
     */
    public extractContentWithHttpInfo(extractRequest: ExtractRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ExtractResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.extractContent(extractRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.extractContentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 
     * Extract page content as markdown from URLs
     * @param extractRequest
     */
    public extractContent(extractRequest: ExtractRequest, _options?: ConfigurationOptions): Observable<ExtractResponse> {
        return this.extractContentWithHttpInfo(extractRequest, _options).pipe(map((apiResponse: HttpInfo<ExtractResponse>) => apiResponse.data));
    }

}

import { FastGPTApiRequestFactory, FastGPTApiResponseProcessor} from "../apis/FastGPTApi";
export class ObservableFastGPTApi {
    private requestFactory: FastGPTApiRequestFactory;
    private responseProcessor: FastGPTApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FastGPTApiRequestFactory,
        responseProcessor?: FastGPTApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FastGPTApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FastGPTApiResponseProcessor();
    }

    /**
     * FastGPT is a Kagi service using powerful LLMs to answer user queries running a full search engine underneath. Think ChatGPT, but on steroids and faster! You can try the web app here.
     * Answer a query.
     * @param fastGPTRequest Contains the query to process.
     */
    public fastGPTWithHttpInfo(fastGPTRequest: FastGPTRequest, _options?: ConfigurationOptions): Observable<HttpInfo<FastGPT200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.fastGPT(fastGPTRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fastGPTWithHttpInfo(rsp)));
            }));
    }

    /**
     * FastGPT is a Kagi service using powerful LLMs to answer user queries running a full search engine underneath. Think ChatGPT, but on steroids and faster! You can try the web app here.
     * Answer a query.
     * @param fastGPTRequest Contains the query to process.
     */
    public fastGPT(fastGPTRequest: FastGPTRequest, _options?: ConfigurationOptions): Observable<FastGPT200Response> {
        return this.fastGPTWithHttpInfo(fastGPTRequest, _options).pipe(map((apiResponse: HttpInfo<FastGPT200Response>) => apiResponse.data));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
    }

    /**
     * Perform a web search
     * @param searchRequest
     */
    public searchWithHttpInfo(searchRequest: SearchRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Search200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.search(searchRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Perform a web search
     * @param searchRequest
     */
    public search(searchRequest: SearchRequest, _options?: ConfigurationOptions): Observable<Search200Response> {
        return this.searchWithHttpInfo(searchRequest, _options).pipe(map((apiResponse: HttpInfo<Search200Response>) => apiResponse.data));
    }

}

import { SummarizerApiRequestFactory, SummarizerApiResponseProcessor} from "../apis/SummarizerApi";
export class ObservableSummarizerApi {
    private requestFactory: SummarizerApiRequestFactory;
    private responseProcessor: SummarizerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SummarizerApiRequestFactory,
        responseProcessor?: SummarizerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SummarizerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SummarizerApiResponseProcessor();
    }

    /**
     * Upload text to summarize.
     * @param uploadText Text to summarize
     * @param [engine] Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * @param [summaryType] Different summary types are provided that control the structure of the summary output.
     * @param [targetLanguage] The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * @param [cache] Whether to allow cached requests &amp; responses.
     */
    public summarizeTextWithHttpInfo(uploadText: UploadText, engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel', summaryType?: 'summary' | 'takeaway', targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT', cache?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<Summary>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.summarizeText(uploadText, engine, summaryType, targetLanguage, cache, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.summarizeTextWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload text to summarize.
     * @param uploadText Text to summarize
     * @param [engine] Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * @param [summaryType] Different summary types are provided that control the structure of the summary output.
     * @param [targetLanguage] The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * @param [cache] Whether to allow cached requests &amp; responses.
     */
    public summarizeText(uploadText: UploadText, engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel', summaryType?: 'summary' | 'takeaway', targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT', cache?: boolean, _options?: ConfigurationOptions): Observable<Summary> {
        return this.summarizeTextWithHttpInfo(uploadText, engine, summaryType, targetLanguage, cache, _options).pipe(map((apiResponse: HttpInfo<Summary>) => apiResponse.data));
    }

    /**
     * Get a summary for a URL
     * @param url A URL to a document to summarize.
     * @param [engine] Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * @param [summaryType] Different summary types are provided that control the structure of the summary output.
     * @param [targetLanguage] The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * @param [cache] Whether to allow cached requests &amp; responses.
     */
    public summarizeURLWithHttpInfo(url: string, engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel', summaryType?: 'summary' | 'takeaway', targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT', cache?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<Summary>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.summarizeURL(url, engine, summaryType, targetLanguage, cache, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.summarizeURLWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a summary for a URL
     * @param url A URL to a document to summarize.
     * @param [engine] Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * @param [summaryType] Different summary types are provided that control the structure of the summary output.
     * @param [targetLanguage] The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * @param [cache] Whether to allow cached requests &amp; responses.
     */
    public summarizeURL(url: string, engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel', summaryType?: 'summary' | 'takeaway', targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT', cache?: boolean, _options?: ConfigurationOptions): Observable<Summary> {
        return this.summarizeURLWithHttpInfo(url, engine, summaryType, targetLanguage, cache, _options).pipe(map((apiResponse: HttpInfo<Summary>) => apiResponse.data));
    }

}

import { TranslateApiRequestFactory, TranslateApiResponseProcessor} from "../apis/TranslateApi";
export class ObservableTranslateApi {
    private requestFactory: TranslateApiRequestFactory;
    private responseProcessor: TranslateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TranslateApiRequestFactory,
        responseProcessor?: TranslateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TranslateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TranslateApiResponseProcessor();
    }

    /**
     * Translates text between languages with customizable options for gender, formality, and style. Supports both single text translation and efficient batch translation of multiple text snippets with context awareness.
     * Text Translation
     * @param translateRequest
     */
    public translateWithHttpInfo(translateRequest: TranslateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Translate200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.translate(translateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Translates text between languages with customizable options for gender, formality, and style. Supports both single text translation and efficient batch translation of multiple text snippets with context awareness.
     * Text Translation
     * @param translateRequest
     */
    public translate(translateRequest: TranslateRequest, _options?: ConfigurationOptions): Observable<Translate200Response> {
        return this.translateWithHttpInfo(translateRequest, _options).pipe(map((apiResponse: HttpInfo<Translate200Response>) => apiResponse.data));
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
    public translateAlternativesWithHttpInfo(originalText: string, existingTranslation: string, targetLang: string, sourceLang?: string, targetExplanationLanguage?: string, translationOptions?: string, partialTranslation?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TranslateAlternatives200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.translateAlternatives(originalText, existingTranslation, targetLang, sourceLang, targetExplanationLanguage, translationOptions, partialTranslation, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateAlternativesWithHttpInfo(rsp)));
            }));
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
    public translateAlternatives(originalText: string, existingTranslation: string, targetLang: string, sourceLang?: string, targetExplanationLanguage?: string, translationOptions?: string, partialTranslation?: string, _options?: ConfigurationOptions): Observable<TranslateAlternatives200Response> {
        return this.translateAlternativesWithHttpInfo(originalText, existingTranslation, targetLang, sourceLang, targetExplanationLanguage, translationOptions, partialTranslation, _options).pipe(map((apiResponse: HttpInfo<TranslateAlternatives200Response>) => apiResponse.data));
    }

    /**
     * Detects the language of the provided text.
     * Language Detection
     * @param translateDetectRequest
     */
    public translateDetectWithHttpInfo(translateDetectRequest: TranslateDetectRequest, _options?: ConfigurationOptions): Observable<HttpInfo<TranslateDetect200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.translateDetect(translateDetectRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateDetectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Detects the language of the provided text.
     * Language Detection
     * @param translateDetectRequest
     */
    public translateDetect(translateDetectRequest: TranslateDetectRequest, _options?: ConfigurationOptions): Observable<TranslateDetect200Response> {
        return this.translateDetectWithHttpInfo(translateDetectRequest, _options).pipe(map((apiResponse: HttpInfo<TranslateDetect200Response>) => apiResponse.data));
    }

    /**
     * Provides dictionary definitions for words in different languages.  **Translation behavior:** - Fields translated to `definition_language`: definition, notes, etymology, part_of_speech, usage_level, dialect - Fields that remain in `word_language`: word, synonyms, pronunciation, plural, related_words, examples (with translations in parentheses when languages differ) - Fields always in English (strict enums): gender (\"masculine\", \"feminine\", \"neuter\", \"common\"), temporal_trend (\"increasing\", \"stable\", \"decreasing\") 
     * Dictionary
     * @param translateDictionaryRequest
     */
    public translateDictionaryWithHttpInfo(translateDictionaryRequest: TranslateDictionaryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<TranslateDictionary200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.translateDictionary(translateDictionaryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateDictionaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Provides dictionary definitions for words in different languages.  **Translation behavior:** - Fields translated to `definition_language`: definition, notes, etymology, part_of_speech, usage_level, dialect - Fields that remain in `word_language`: word, synonyms, pronunciation, plural, related_words, examples (with translations in parentheses when languages differ) - Fields always in English (strict enums): gender (\"masculine\", \"feminine\", \"neuter\", \"common\"), temporal_trend (\"increasing\", \"stable\", \"decreasing\") 
     * Dictionary
     * @param translateDictionaryRequest
     */
    public translateDictionary(translateDictionaryRequest: TranslateDictionaryRequest, _options?: ConfigurationOptions): Observable<TranslateDictionary200Response> {
        return this.translateDictionaryWithHttpInfo(translateDictionaryRequest, _options).pipe(map((apiResponse: HttpInfo<TranslateDictionary200Response>) => apiResponse.data));
    }

    /**
     * Returns a list of languages supported by the translation API.  The response includes language codes, names, and whether each language supports formality settings. 
     * List Supported Languages
     * @param [type] Type of languages to return (\&#39;source\&#39; or \&#39;target\&#39;)
     * @param [locale] Locale code to use for language names (e.g., \&#39;en\&#39;, \&#39;de\&#39;, \&#39;fr\&#39;)
     */
    public translateListLanguagesWithHttpInfo(type?: 'source' | 'target', locale?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<TranslateListLanguages200ResponseInner>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.translateListLanguages(type, locale, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateListLanguagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of languages supported by the translation API.  The response includes language codes, names, and whether each language supports formality settings. 
     * List Supported Languages
     * @param [type] Type of languages to return (\&#39;source\&#39; or \&#39;target\&#39;)
     * @param [locale] Locale code to use for language names (e.g., \&#39;en\&#39;, \&#39;de\&#39;, \&#39;fr\&#39;)
     */
    public translateListLanguages(type?: 'source' | 'target', locale?: string, _options?: ConfigurationOptions): Observable<Array<TranslateListLanguages200ResponseInner>> {
        return this.translateListLanguagesWithHttpInfo(type, locale, _options).pipe(map((apiResponse: HttpInfo<Array<TranslateListLanguages200ResponseInner>>) => apiResponse.data));
    }

    /**
     * Converts non-Latin script text to Latin script (romanization/transliteration). Uses standardized romanization styles for each language: Hepburn for Japanese, Pinyin for Chinese, ALA-LC for Arabic, etc.
     * Text Romanization
     * @param text Text to romanize
     * @param language Language code (ISO-639) of the source text
     */
    public translateRomanizeWithHttpInfo(text: string, language: string, _options?: ConfigurationOptions): Observable<HttpInfo<TranslateRomanize200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.translateRomanize(text, language, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateRomanizeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Converts non-Latin script text to Latin script (romanization/transliteration). Uses standardized romanization styles for each language: Hepburn for Japanese, Pinyin for Chinese, ALA-LC for Arabic, etc.
     * Text Romanization
     * @param text Text to romanize
     * @param language Language code (ISO-639) of the source text
     */
    public translateRomanize(text: string, language: string, _options?: ConfigurationOptions): Observable<TranslateRomanize200Response> {
        return this.translateRomanizeWithHttpInfo(text, language, _options).pipe(map((apiResponse: HttpInfo<TranslateRomanize200Response>) => apiResponse.data));
    }

    /**
     * Provides detailed linguistic insights and alternatives for translated text. The API identifies 3-5 key words or phrases in the translated text that have meaningful alternative expressions, and returns:  1. A marked version of the translation with insight markers 2. Alternative expressions for each identified word/phrase 3. Brief explanations for each alternative in the target explanation language 4. Type labels categorizing each insight (e.g., \"Lexical choice\", \"Cultural reference\") 
     * Word Insights
     * @param originalText Source text that was translated
     * @param translatedText Translated text to analyze for linguistic insights
     * @param [targetExplanationLanguage] Language code (ISO-639) for the explanations and type labels
     * @param [translationOptions] Optional JSON string with translation options that provide context for the insights. Can include formality, gender preferences, and style. 
     */
    public translateWordInsightsWithHttpInfo(originalText: string, translatedText: string, targetExplanationLanguage?: string, translationOptions?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TranslateWordInsights200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.translateWordInsights(originalText, translatedText, targetExplanationLanguage, translationOptions, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateWordInsightsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Provides detailed linguistic insights and alternatives for translated text. The API identifies 3-5 key words or phrases in the translated text that have meaningful alternative expressions, and returns:  1. A marked version of the translation with insight markers 2. Alternative expressions for each identified word/phrase 3. Brief explanations for each alternative in the target explanation language 4. Type labels categorizing each insight (e.g., \"Lexical choice\", \"Cultural reference\") 
     * Word Insights
     * @param originalText Source text that was translated
     * @param translatedText Translated text to analyze for linguistic insights
     * @param [targetExplanationLanguage] Language code (ISO-639) for the explanations and type labels
     * @param [translationOptions] Optional JSON string with translation options that provide context for the insights. Can include formality, gender preferences, and style. 
     */
    public translateWordInsights(originalText: string, translatedText: string, targetExplanationLanguage?: string, translationOptions?: string, _options?: ConfigurationOptions): Observable<TranslateWordInsights200Response> {
        return this.translateWordInsightsWithHttpInfo(originalText, translatedText, targetExplanationLanguage, translationOptions, _options).pipe(map((apiResponse: HttpInfo<TranslateWordInsights200Response>) => apiResponse.data));
    }

}
