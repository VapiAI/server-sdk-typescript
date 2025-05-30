/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface FallbackCartesiaVoice {
    /** This is the flag to toggle voice caching for the assistant. */
    cachingEnabled?: boolean;
    /** This is the voice provider that will be used. */
    provider: "cartesia";
    /** The ID of the particular voice you want to use. */
    voiceId: string;
    /** This is the model that will be used. This is optional and will default to the correct model for the voiceId. */
    model?: Vapi.FallbackCartesiaVoiceModel;
    /** This is the language that will be used. This is optional and will default to the correct language for the voiceId. */
    language?: Vapi.FallbackCartesiaVoiceLanguage;
    /** Experimental controls for Cartesia voice generation */
    experimentalControls?: Vapi.CartesiaExperimentalControls;
    /** This is the plan for chunking the model output before it is sent to the voice provider. */
    chunkPlan?: Vapi.ChunkPlan;
}
