/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateAssemblyAiCredentialDto {
    provider: "assembly-ai";
    /** This is not returned in the API. */
    apiKey: string;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
}
