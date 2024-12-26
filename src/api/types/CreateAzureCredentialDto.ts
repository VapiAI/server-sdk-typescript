/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CreateAzureCredentialDto {
    provider: "azure";
    /** This is the service being used in Azure. */
    service: "speech";
    /** This is the region of the Azure resource. */
    region?: Vapi.CreateAzureCredentialDtoRegion;
    /** This is not returned in the API. */
    apiKey?: string;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
}
