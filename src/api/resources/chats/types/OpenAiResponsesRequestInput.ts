/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../../../index";

/**
 * This is the input text for the chat.
 * Can be a string or an array of chat messages.
 * This field is REQUIRED for chat creation.
 */
export type OpenAiResponsesRequestInput = string | Vapi.OpenAiResponsesRequestInputItem[];
