/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the provider used for the call.
 */
export type TransportProvider = "twilio" | "vonage" | "vapi" | "daily";

export const TransportProvider = {
    Twilio: "twilio",
    Vonage: "vonage",
    Vapi: "vapi",
    Daily: "daily",
} as const;
