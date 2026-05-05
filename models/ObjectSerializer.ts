export * from '../models/EnrichSearch200Response';
export * from '../models/ErrorDetail';
export * from '../models/ErrorEnvelope';
export * from '../models/ExtractRequest';
export * from '../models/ExtractResponse';
export * from '../models/FastGPT200Response';
export * from '../models/FastGPT200ResponseData';
export * from '../models/FastGPTRequest';
export * from '../models/Meta';
export * from '../models/PageInput';
export * from '../models/PageOutput';
export * from '../models/Search200Response';
export * from '../models/Search200ResponseData';
export * from '../models/SearchObject';
export * from '../models/SearchObjectImage';
export * from '../models/SearchObjectThumbnail';
export * from '../models/SearchRequest';
export * from '../models/SearchRequestExtract';
export * from '../models/SearchRequestFilters';
export * from '../models/SearchRequestLens';
export * from '../models/SearchRequestPersonalizations';
export * from '../models/SearchRequestPersonalizationsDomainsInner';
export * from '../models/SearchRequestPersonalizationsRegexesInner';
export * from '../models/SearchResult';
export * from '../models/SearchResultImage';
export * from '../models/Summary';
export * from '../models/SummaryData';
export * from '../models/Translate200Response';
export * from '../models/Translate200ResponseOneOf';
export * from '../models/Translate200ResponseOneOf1';
export * from '../models/Translate200ResponseOneOfDefinition';
export * from '../models/Translate200ResponseOneOfDefinitionDefinitionsInner';
export * from '../models/Translate200ResponseOneOfDefinitionDefinitionsInnerMeaningsInner';
export * from '../models/Translate200ResponseOneOfDetectedLanguage';
export * from '../models/Translate400Response';
export * from '../models/Translate500Response';
export * from '../models/TranslateAlternatives200Response';
export * from '../models/TranslateAlternatives200ResponseElementsInner';
export * from '../models/TranslateAlternatives401Response';
export * from '../models/TranslateAlternatives402Response';
export * from '../models/TranslateAlternatives500Response';
export * from '../models/TranslateDetect200Response';
export * from '../models/TranslateDetect400Response';
export * from '../models/TranslateDetectRequest';
export * from '../models/TranslateDictionary200Response';
export * from '../models/TranslateDictionary200ResponseDefinition';
export * from '../models/TranslateDictionary200ResponseDefinitionPrimaryMeaning';
export * from '../models/TranslateDictionary200ResponseDefinitionSecondaryMeaningsInner';
export * from '../models/TranslateDictionary200ResponseLanguage';
export * from '../models/TranslateDictionary400Response';
export * from '../models/TranslateDictionary500Response';
export * from '../models/TranslateDictionaryRequest';
export * from '../models/TranslateListLanguages200ResponseInner';
export * from '../models/TranslateRequest';
export * from '../models/TranslateRequestText';
export * from '../models/TranslateRomanize200Response';
export * from '../models/TranslateWordInsights200Response';
export * from '../models/TranslateWordInsights200ResponseInsightsInner';
export * from '../models/TranslateWordInsights200ResponseInsightsInnerVariationsInner';
export * from '../models/TranslateWordInsights400Response';
export * from '../models/TranslateWordInsights500Response';
export * from '../models/UploadText';

import { EnrichSearch200Response } from '../models/EnrichSearch200Response';
import { ErrorDetail } from '../models/ErrorDetail';
import { ErrorEnvelope } from '../models/ErrorEnvelope';
import { ExtractRequest  , ExtractRequestFormatEnum   } from '../models/ExtractRequest';
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
import { SearchRequest , SearchRequestWorkflowEnum  , SearchRequestFormatEnum           } from '../models/SearchRequest';
import { SearchRequestExtract } from '../models/SearchRequestExtract';
import { SearchRequestFilters } from '../models/SearchRequestFilters';
import { SearchRequestLens       , SearchRequestLensTimeRelativeEnum    } from '../models/SearchRequestLens';
import { SearchRequestPersonalizations } from '../models/SearchRequestPersonalizations';
import { SearchRequestPersonalizationsDomainsInner } from '../models/SearchRequestPersonalizationsDomainsInner';
import { SearchRequestPersonalizationsRegexesInner } from '../models/SearchRequestPersonalizationsRegexesInner';
import { SearchResult } from '../models/SearchResult';
import { SearchResultImage } from '../models/SearchResultImage';
import { Summary } from '../models/Summary';
import { SummaryData } from '../models/SummaryData';
import { Translate200ResponseClass } from '../models/Translate200Response';
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
import { TranslateDictionary200ResponseDefinition       , TranslateDictionary200ResponseDefinitionTemporalTrendEnum  , TranslateDictionary200ResponseDefinitionGenderEnum      } from '../models/TranslateDictionary200ResponseDefinition';
import { TranslateDictionary200ResponseDefinitionPrimaryMeaning } from '../models/TranslateDictionary200ResponseDefinitionPrimaryMeaning';
import { TranslateDictionary200ResponseDefinitionSecondaryMeaningsInner } from '../models/TranslateDictionary200ResponseDefinitionSecondaryMeaningsInner';
import { TranslateDictionary200ResponseLanguage } from '../models/TranslateDictionary200ResponseLanguage';
import { TranslateDictionary400Response } from '../models/TranslateDictionary400Response';
import { TranslateDictionary500Response } from '../models/TranslateDictionary500Response';
import { TranslateDictionaryRequest } from '../models/TranslateDictionaryRequest';
import { TranslateListLanguages200ResponseInner } from '../models/TranslateListLanguages200ResponseInner';
import { TranslateRequest       , TranslateRequestFormalityEnum  , TranslateRequestSpeakerGenderEnum  , TranslateRequestAddresseeGenderEnum  , TranslateRequestTranslationStyleEnum       } from '../models/TranslateRequest';
import { TranslateRequestTextClass } from '../models/TranslateRequestText';
import { TranslateRomanize200Response } from '../models/TranslateRomanize200Response';
import { TranslateWordInsights200Response } from '../models/TranslateWordInsights200Response';
import { TranslateWordInsights200ResponseInsightsInner } from '../models/TranslateWordInsights200ResponseInsightsInner';
import { TranslateWordInsights200ResponseInsightsInnerVariationsInner } from '../models/TranslateWordInsights200ResponseInsightsInnerVariationsInner';
import { TranslateWordInsights400Response } from '../models/TranslateWordInsights400Response';
import { TranslateWordInsights500Response } from '../models/TranslateWordInsights500Response';
import { UploadText } from '../models/UploadText';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "ExtractRequestFormatEnum",
    "SearchRequestWorkflowEnum",
    "SearchRequestFormatEnum",
    "SearchRequestLensTimeRelativeEnum",
    "TranslateDictionary200ResponseDefinitionTemporalTrendEnum",
    "TranslateDictionary200ResponseDefinitionGenderEnum",
    "TranslateRequestFormalityEnum",
    "TranslateRequestSpeakerGenderEnum",
    "TranslateRequestAddresseeGenderEnum",
    "TranslateRequestTranslationStyleEnum",
]);

let typeMap: {[index: string]: any} = {
    "EnrichSearch200Response": EnrichSearch200Response,
    "ErrorDetail": ErrorDetail,
    "ErrorEnvelope": ErrorEnvelope,
    "ExtractRequest": ExtractRequest,
    "ExtractResponse": ExtractResponse,
    "FastGPT200Response": FastGPT200Response,
    "FastGPT200ResponseData": FastGPT200ResponseData,
    "FastGPTRequest": FastGPTRequest,
    "Meta": Meta,
    "PageInput": PageInput,
    "PageOutput": PageOutput,
    "Search200Response": Search200Response,
    "Search200ResponseData": Search200ResponseData,
    "SearchObject": SearchObject,
    "SearchObjectImage": SearchObjectImage,
    "SearchObjectThumbnail": SearchObjectThumbnail,
    "SearchRequest": SearchRequest,
    "SearchRequestExtract": SearchRequestExtract,
    "SearchRequestFilters": SearchRequestFilters,
    "SearchRequestLens": SearchRequestLens,
    "SearchRequestPersonalizations": SearchRequestPersonalizations,
    "SearchRequestPersonalizationsDomainsInner": SearchRequestPersonalizationsDomainsInner,
    "SearchRequestPersonalizationsRegexesInner": SearchRequestPersonalizationsRegexesInner,
    "SearchResult": SearchResult,
    "SearchResultImage": SearchResultImage,
    "Summary": Summary,
    "SummaryData": SummaryData,
    "Translate200Response": Translate200ResponseClass,
    "Translate200ResponseOneOf": Translate200ResponseOneOf,
    "Translate200ResponseOneOf1": Translate200ResponseOneOf1,
    "Translate200ResponseOneOfDefinition": Translate200ResponseOneOfDefinition,
    "Translate200ResponseOneOfDefinitionDefinitionsInner": Translate200ResponseOneOfDefinitionDefinitionsInner,
    "Translate200ResponseOneOfDefinitionDefinitionsInnerMeaningsInner": Translate200ResponseOneOfDefinitionDefinitionsInnerMeaningsInner,
    "Translate200ResponseOneOfDetectedLanguage": Translate200ResponseOneOfDetectedLanguage,
    "Translate400Response": Translate400Response,
    "Translate500Response": Translate500Response,
    "TranslateAlternatives200Response": TranslateAlternatives200Response,
    "TranslateAlternatives200ResponseElementsInner": TranslateAlternatives200ResponseElementsInner,
    "TranslateAlternatives401Response": TranslateAlternatives401Response,
    "TranslateAlternatives402Response": TranslateAlternatives402Response,
    "TranslateAlternatives500Response": TranslateAlternatives500Response,
    "TranslateDetect200Response": TranslateDetect200Response,
    "TranslateDetect400Response": TranslateDetect400Response,
    "TranslateDetectRequest": TranslateDetectRequest,
    "TranslateDictionary200Response": TranslateDictionary200Response,
    "TranslateDictionary200ResponseDefinition": TranslateDictionary200ResponseDefinition,
    "TranslateDictionary200ResponseDefinitionPrimaryMeaning": TranslateDictionary200ResponseDefinitionPrimaryMeaning,
    "TranslateDictionary200ResponseDefinitionSecondaryMeaningsInner": TranslateDictionary200ResponseDefinitionSecondaryMeaningsInner,
    "TranslateDictionary200ResponseLanguage": TranslateDictionary200ResponseLanguage,
    "TranslateDictionary400Response": TranslateDictionary400Response,
    "TranslateDictionary500Response": TranslateDictionary500Response,
    "TranslateDictionaryRequest": TranslateDictionaryRequest,
    "TranslateListLanguages200ResponseInner": TranslateListLanguages200ResponseInner,
    "TranslateRequest": TranslateRequest,
    "TranslateRequestText": TranslateRequestTextClass,
    "TranslateRomanize200Response": TranslateRomanize200Response,
    "TranslateWordInsights200Response": TranslateWordInsights200Response,
    "TranslateWordInsights200ResponseInsightsInner": TranslateWordInsights200ResponseInsightsInner,
    "TranslateWordInsights200ResponseInsightsInnerVariationsInner": TranslateWordInsights200ResponseInsightsInnerVariationsInner,
    "TranslateWordInsights400Response": TranslateWordInsights400Response,
    "TranslateWordInsights500Response": TranslateWordInsights500Response,
    "UploadText": UploadText,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (!(data instanceof Date)) {
                return data;
            }
            if (format == "date") {
                let month = data.getMonth()+1
                let monthStr = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                let dayStr = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + monthStr + "-" + dayStr;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
