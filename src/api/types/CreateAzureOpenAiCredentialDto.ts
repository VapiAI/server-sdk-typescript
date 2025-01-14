/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CreateAzureOpenAiCredentialDto {
    provider: "azure-openai";
    region: Vapi.CreateAzureOpenAiCredentialDtoRegion;
    models: Vapi.CreateAzureOpenAiCredentialDtoModelsItem[];
    /** This is not returned in the API. */
    openAIKey: string;
    /** This is not returned in the API. */
    ocpApimSubscriptionKey?: string;
    openAIEndpoint: string;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
}
