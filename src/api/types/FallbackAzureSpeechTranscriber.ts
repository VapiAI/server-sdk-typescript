/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface FallbackAzureSpeechTranscriber {
    /** This is the transcription provider that will be used. */
    provider: "azure";
    /** This is the language that will be set for the transcription. The list of languages Azure supports can be found here: https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt */
    language?: Vapi.FallbackAzureSpeechTranscriberLanguage;
}
