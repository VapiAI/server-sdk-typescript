/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CreateAzureCredentialDto {
    provider: "azure";
    /** This is the service being used in Azure. */
    service: Vapi.CreateAzureCredentialDtoService;
    /** This is the region of the Azure resource. */
    region?: Vapi.CreateAzureCredentialDtoRegion;
    /** This is not returned in the API. */
    apiKey?: string;
    /** This is the order in which this storage provider is tried during upload retries. Lower numbers are tried first in increasing order. */
    fallbackIndex?: number;
    /** This is the bucket plan that can be provided to store call artifacts in Azure Blob Storage. */
    bucketPlan?: Vapi.AzureBlobStorageBucketPlan;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
}
