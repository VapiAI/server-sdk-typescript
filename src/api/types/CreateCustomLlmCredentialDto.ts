/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CreateCustomLlmCredentialDto {
    provider: "custom-llm";
    /** This is not returned in the API. */
    apiKey: string;
    /** This is the authentication plan. Currently supports OAuth2 RFC 6749. To use Bearer authentication, use apiKey */
    authenticationPlan?: Vapi.OAuth2AuthenticationPlan;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
}
