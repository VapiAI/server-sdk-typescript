/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the HMAC algorithm to use for signing.
 */
export type HmacAuthenticationPlanAlgorithm = "sha256" | "sha512" | "sha1";
export const HmacAuthenticationPlanAlgorithm = {
    Sha256: "sha256",
    Sha512: "sha512",
    Sha1: "sha1",
} as const;
