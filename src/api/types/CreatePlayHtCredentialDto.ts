/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreatePlayHtCredentialDto {
    provider: "playht";
    /** This is not returned in the API. */
    apiKey: string;
    userId: string;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
}
