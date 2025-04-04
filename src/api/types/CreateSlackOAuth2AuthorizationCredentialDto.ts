/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateSlackOAuth2AuthorizationCredentialDto {
    provider: "slack.oauth2-authorization";
    /** The authorization ID for the OAuth2 authorization */
    authorizationId: string;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
}
