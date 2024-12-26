/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TavusCredential {
    provider: "tavus";
    /** This is not returned in the API. */
    apiKey: string;
    /** This is the unique identifier for the credential. */
    id: string;
    /** This is the unique identifier for the org that this credential belongs to. */
    orgId: string;
    /** This is the ISO 8601 date-time string of when the credential was created. */
    createdAt: string;
    /** This is the ISO 8601 date-time string of when the assistant was last updated. */
    updatedAt: string;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
}
