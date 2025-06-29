/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * These are the options for the assistant's transcriber.
 */
export type AssistantTranscriber =
    | Vapi.AssemblyAiTranscriber
    | Vapi.AzureSpeechTranscriber
    | Vapi.CustomTranscriber
    | Vapi.DeepgramTranscriber
    | Vapi.ElevenLabsTranscriber
    | Vapi.GladiaTranscriber
    | Vapi.GoogleTranscriber
    | Vapi.SpeechmaticsTranscriber
    | Vapi.TalkscriberTranscriber
    | Vapi.OpenAiTranscriber
    | Vapi.CartesiaTranscriber;
