/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface ToolMessageFailed {
    /**
     * This is an alternative to the `content` property. It allows to specify variants of the same content, one per language.
     *
     * Usage:
     * - If your assistants are multilingual, you can provide content for each language.
     * - If you don't provide content for a language, the first item in the array will be automatically translated to the active language at that moment.
     *
     * This will override the `content` property.
     */
    contents?: Vapi.TextContent[];
    /**
     * This message is triggered when the tool call fails.
     *
     * This message is never triggered for async tool calls.
     *
     * If this message is not provided, the model will be requested to respond.
     *
     * If this message is provided, only this message will be spoken and the model will not be requested to come up with a response. It's an exclusive OR.
     */
    type: "request-failed";
    /**
     * This is an optional boolean that if true, the call will end after the message is spoken. Default is false.
     *
     * @default false
     */
    endCallAfterSpokenEnabled?: boolean;
    /** This is the content that the assistant says when this message is triggered. */
    content?: string;
    /** This is an optional array of conditions that the tool call arguments must meet in order for this message to be triggered. */
    conditions?: Vapi.Condition[];
}
