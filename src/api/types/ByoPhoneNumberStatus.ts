/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the status of the phone number.
 */
export type ByoPhoneNumberStatus = "active" | "activating" | "blocked";

export const ByoPhoneNumberStatus = {
    Active: "active",
    Activating: "activating",
    Blocked: "blocked",
} as const;
