/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface AzureVoice {
    /** This is the voice provider that will be used. */
    provider: "azure";
    /** This is the provider-specific ID that will be used. */
    voiceId: Vapi.AzureVoiceId;
    /** This is the plan for chunking the model output before it is sent to the voice provider. */
    chunkPlan?: Vapi.ChunkPlan;
    /** This is the speed multiplier that will be used. */
    speed?: number;
    /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
    fallbackPlan?: Vapi.FallbackPlan;
}
