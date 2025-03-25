/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface ServerMessageToolCalls {
    /**
     * This is the phone number associated with the call.
     *
     * This matches one of the following:
     * - `call.phoneNumber`,
     * - `call.phoneNumberId`.
     */
    phoneNumber?: Vapi.ServerMessageToolCallsPhoneNumber;
    /** This is the type of the message. "tool-calls" is sent to call a tool. */
    type?: "tool-calls";
    /** This is the list of tools calls that the model is requesting along with the original tool configuration. */
    toolWithToolCallList: Vapi.ServerMessageToolCallsToolWithToolCallListItem[];
    /** This is the ISO-8601 formatted timestamp of when the message was sent. */
    timestamp?: number;
    /**
     * This is a live version of the `call.artifact`.
     *
     * This matches what is stored on `call.artifact` after the call.
     */
    artifact?: Vapi.Artifact;
    /**
     * This is the assistant that is currently active. This is provided for convenience.
     *
     * This matches one of the following:
     * - `call.assistant`,
     * - `call.assistantId`,
     * - `call.squad[n].assistant`,
     * - `call.squad[n].assistantId`,
     * - `call.squadId->[n].assistant`,
     * - `call.squadId->[n].assistantId`.
     */
    assistant?: Vapi.CreateAssistantDto;
    /**
     * This is the customer associated with the call.
     *
     * This matches one of the following:
     * - `call.customer`,
     * - `call.customerId`.
     */
    customer?: Vapi.CreateCustomerDto;
    /**
     * This is the call object.
     *
     * This matches what was returned in POST /call.
     *
     * Note: This might get stale during the call. To get the latest call object, especially after the call is ended, use GET /call/:id.
     */
    call?: Vapi.Call;
    /** This is the list of tool calls that the model is requesting. */
    toolCallList: Vapi.ToolCall[];
}
