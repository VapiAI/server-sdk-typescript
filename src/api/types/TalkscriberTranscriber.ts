/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface TalkscriberTranscriber {
    /** This is the transcription provider that will be used. */
    provider: "talkscriber";
    /** This is the model that will be used for the transcription. */
    model?: "whisper";
    /** This is the language that will be set for the transcription. The list of languages Whisper supports can be found here: https://github.com/openai/whisper/blob/main/whisper/tokenizer.py */
    language?: Vapi.TalkscriberTranscriberLanguage;
    /** This is the plan for voice provider fallbacks in the event that the primary voice provider fails. */
    fallbackPlan?: Vapi.FallbackTranscriberPlan;
}
