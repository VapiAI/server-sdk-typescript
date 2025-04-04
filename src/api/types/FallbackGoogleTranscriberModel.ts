/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the model that will be used for the transcription.
 */
export type FallbackGoogleTranscriberModel =
    | "gemini-2.0-flash-thinking-exp"
    | "gemini-2.0-pro-exp-02-05"
    | "gemini-2.0-flash"
    | "gemini-2.0-flash-lite"
    | "gemini-2.0-flash-lite-preview-02-05"
    | "gemini-2.0-flash-exp"
    | "gemini-2.0-flash-realtime-exp"
    | "gemini-1.5-flash"
    | "gemini-1.5-flash-002"
    | "gemini-1.5-pro"
    | "gemini-1.5-pro-002"
    | "gemini-1.0-pro";
export const FallbackGoogleTranscriberModel = {
    Gemini20FlashThinkingExp: "gemini-2.0-flash-thinking-exp",
    Gemini20ProExp0205: "gemini-2.0-pro-exp-02-05",
    Gemini20Flash: "gemini-2.0-flash",
    Gemini20FlashLite: "gemini-2.0-flash-lite",
    Gemini20FlashLitePreview0205: "gemini-2.0-flash-lite-preview-02-05",
    Gemini20FlashExp: "gemini-2.0-flash-exp",
    Gemini20FlashRealtimeExp: "gemini-2.0-flash-realtime-exp",
    Gemini15Flash: "gemini-1.5-flash",
    Gemini15Flash002: "gemini-1.5-flash-002",
    Gemini15Pro: "gemini-1.5-pro",
    Gemini15Pro002: "gemini-1.5-pro-002",
    Gemini10Pro: "gemini-1.0-pro",
} as const;
