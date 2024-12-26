/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * These are all the messages that can be sent to your server before, after and during the call. Configure the messages you'd like to receive in `assistant.serverMessages`.
 *
 * The server where the message is sent is determined by the following precedence order:
 *
 * 1. `tool.server.url` (if configured, and only for "tool-calls" message)
 * 2. `assistant.serverUrl` (if configure)
 * 3. `phoneNumber.serverUrl` (if configured)
 * 4. `org.serverUrl` (if configured)
 */
export type ServerMessageMessage =
    | Vapi.ServerMessageAssistantRequest
    | Vapi.ServerMessageConversationUpdate
    | Vapi.ServerMessageEndOfCallReport
    | Vapi.ServerMessageHang
    | Vapi.ServerMessageKnowledgeBaseRequest
    | Vapi.ServerMessageModelOutput
    | Vapi.ServerMessagePhoneCallControl
    | Vapi.ServerMessageSpeechUpdate
    | Vapi.ServerMessageStatusUpdate
    | Vapi.ServerMessageToolCalls
    | Vapi.ServerMessageTransferDestinationRequest
    | Vapi.ServerMessageTransferUpdate
    | Vapi.ServerMessageTranscript
    | Vapi.ServerMessageUserInterrupted
    | Vapi.ServerMessageLanguageChangeDetected
    | Vapi.ServerMessageVoiceInput
    | Vapi.ServerMessageVoiceRequest;
