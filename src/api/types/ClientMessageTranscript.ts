/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface ClientMessageTranscript {
    /** This is the type of the message. "transcript" is sent as transcriber outputs partial or final transcript. */
    type: Vapi.ClientMessageTranscriptType;
    /** This is the role for which the transcript is for. */
    role: Vapi.ClientMessageTranscriptRole;
    /** This is the type of the transcript. */
    transcriptType: Vapi.ClientMessageTranscriptTranscriptType;
    /** This is the transcript content. */
    transcript: string;
}
