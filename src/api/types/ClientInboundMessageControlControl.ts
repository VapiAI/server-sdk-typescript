/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the control action
 */
export type ClientInboundMessageControlControl = "mute-assistant" | "unmute-assistant" | "say-first-message";
export const ClientInboundMessageControlControl = {
    MuteAssistant: "mute-assistant",
    UnmuteAssistant: "unmute-assistant",
    SayFirstMessage: "say-first-message",
} as const;
