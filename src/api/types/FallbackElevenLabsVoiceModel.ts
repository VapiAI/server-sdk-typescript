/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the model that will be used. Defaults to 'eleven_turbo_v2' if not specified.
 */
export type FallbackElevenLabsVoiceModel =
    | "eleven_multilingual_v2"
    | "eleven_turbo_v2"
    | "eleven_turbo_v2_5"
    | "eleven_flash_v2"
    | "eleven_flash_v2_5"
    | "eleven_monolingual_v1";
export const FallbackElevenLabsVoiceModel = {
    ElevenMultilingualV2: "eleven_multilingual_v2",
    ElevenTurboV2: "eleven_turbo_v2",
    ElevenTurboV25: "eleven_turbo_v2_5",
    ElevenFlashV2: "eleven_flash_v2",
    ElevenFlashV25: "eleven_flash_v2_5",
    ElevenMonolingualV1: "eleven_monolingual_v1",
} as const;
