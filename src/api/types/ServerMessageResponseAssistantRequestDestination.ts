/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * This is the destination to transfer the inbound call to. This will immediately transfer without using any assistants.
 *
 * If this is sent, `assistantId`, `assistant`, `squadId`, and `squad` are ignored.
 */
export type ServerMessageResponseAssistantRequestDestination =
    | Vapi.TransferDestinationNumber
    | Vapi.TransferDestinationSip;
