/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientMessageHang {
    /**
     * This is the type of the message. "hang" is sent when the assistant is hanging due to a delay. The delay can be caused by many factors, such as:
     * - the model is too slow to respond
     * - the voice is too slow to respond
     * - the tool call is still waiting for a response from your server
     * - etc.
     */
    type: "hang";
}
