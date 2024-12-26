/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface ClientInboundMessageAddMessage {
    /** This is the type of the message. Send "add-message" message to add a message to the conversation history. */
    type: "add-message";
    /** This is the message to add to the conversation. */
    message: Vapi.OpenAiMessage;
    /**
     * This is the flag to trigger a response, or to insert the message into the conversation history silently. Defaults to `true`.
     *
     * Usage:
     * - Use `true` to trigger a response.
     * - Use `false` to insert the message into the conversation history silently.
     *
     * @default true
     */
    triggerResponseEnabled?: boolean;
}
