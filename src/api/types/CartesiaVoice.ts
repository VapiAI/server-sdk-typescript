/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CartesiaVoice {
    /** This is the voice provider that will be used. */
    provider: "cartesia";
    /** The ID of the particular voice you want to use. */
    voiceId: string;
    /** This is the model that will be used. This is optional and will default to the correct model for the voiceId. */
    model?: Vapi.CartesiaVoiceModel;
    /** This is the language that will be used. This is optional and will default to the correct language for the voiceId. */
    language?: Vapi.CartesiaVoiceLanguage;
    /** Experimental controls for Cartesia voice generation */
    experimentalControls?: Vapi.CartesiaExperimentalControls;
    /** This is the plan for chunking the model output before it is sent to the voice provider. */
    chunkPlan?: Vapi.ChunkPlan;
    /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
    fallbackPlan?: Vapi.FallbackPlan;
}
