/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export type UpdateComputerToolDtoMessagesItem =
    | Vapi.ToolMessageStart
    | Vapi.ToolMessageComplete
    | Vapi.ToolMessageFailed
    | Vapi.ToolMessageDelayed;
