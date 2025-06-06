/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the type of call.
 */
export type CallType = "inboundPhoneCall" | "outboundPhoneCall" | "webCall" | "vapi.websocketCall";
export const CallType = {
    InboundPhoneCall: "inboundPhoneCall",
    OutboundPhoneCall: "outboundPhoneCall",
    WebCall: "webCall",
    VapiWebsocketCall: "vapi.websocketCall",
} as const;
