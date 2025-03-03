/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type UpdateAssistantDtoServerMessagesItem =
    | "conversation-update"
    | "end-of-call-report"
    | "function-call"
    | "hang"
    | "language-changed"
    | "language-change-detected"
    | "model-output"
    | "phone-call-control"
    | "speech-update"
    | "status-update"
    | "transcript"
    | "transcript[transcriptType='final']"
    | "tool-calls"
    | "transfer-destination-request"
    | "transfer-update"
    | "user-interrupted"
    | "voice-input";

export const UpdateAssistantDtoServerMessagesItem = {
    ConversationUpdate: "conversation-update",
    EndOfCallReport: "end-of-call-report",
    FunctionCall: "function-call",
    Hang: "hang",
    LanguageChanged: "language-changed",
    LanguageChangeDetected: "language-change-detected",
    ModelOutput: "model-output",
    PhoneCallControl: "phone-call-control",
    SpeechUpdate: "speech-update",
    StatusUpdate: "status-update",
    Transcript: "transcript",
    TranscriptTranscriptTypeFinal: "transcript[transcriptType='final']",
    ToolCalls: "tool-calls",
    TransferDestinationRequest: "transfer-destination-request",
    TransferUpdate: "transfer-update",
    UserInterrupted: "user-interrupted",
    VoiceInput: "voice-input",
} as const;
