/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface Artifact {
    /** These are the messages that were spoken during the call. */
    messages?: Vapi.ArtifactMessagesItem[];
    /** These are the messages that were spoken during the call, formatted for OpenAI. */
    messagesOpenAIFormatted?: Vapi.OpenAiMessage[];
    /** This is the recording url for the call. To enable, set `assistant.artifactPlan.recordingEnabled`. */
    recordingUrl?: string;
    /** This is the stereo recording url for the call. To enable, set `assistant.artifactPlan.recordingEnabled`. */
    stereoRecordingUrl?: string;
    /** This is video recording url for the call. To enable, set `assistant.artifactPlan.videoRecordingEnabled`. */
    videoRecordingUrl?: string;
    /** This is video recording start delay in ms. To enable, set `assistant.artifactPlan.videoRecordingEnabled`. This can be used to align the playback of the recording with artifact.messages timestamps. */
    videoRecordingStartDelaySeconds?: number;
    /** This is the recording url for the call. To enable, set `assistant.artifactPlan.recordingEnabled`. */
    recording?: Vapi.Recording;
    /** This is the transcript of the call. This is derived from `artifact.messages` but provided for convenience. */
    transcript?: string;
    /** This is the packet capture url for the call. This is only available for `phone` type calls where phone number's provider is `vapi` or `byo-phone-number`. */
    pcapUrl?: string;
    /** This is the history of workflow nodes that were executed during the call. */
    nodes?: Vapi.NodeArtifact[];
    /** This is the state of variables at the end of the workflow execution. */
    variables?: Record<string, unknown>;
}
