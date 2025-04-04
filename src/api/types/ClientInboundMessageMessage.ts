/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * These are the messages that can be sent from client-side SDKs to control the call.
 */
export type ClientInboundMessageMessage =
    | Vapi.ClientInboundMessageAddMessage
    | Vapi.ClientInboundMessageControl
    | Vapi.ClientInboundMessageSay
    | Vapi.ClientInboundMessageEndCall
    | Vapi.ClientInboundMessageTransfer;
