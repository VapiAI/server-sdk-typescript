/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface UpdateAzureOpenAiCredentialDto {
    region?: Vapi.UpdateAzureOpenAiCredentialDtoRegion;
    models?: Vapi.UpdateAzureOpenAiCredentialDtoModelsItem[];
    /** This is not returned in the API. */
    openAIKey?: string;
    /** This is not returned in the API. */
    ocpApimSubscriptionKey?: string;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
    openAIEndpoint?: string;
}
