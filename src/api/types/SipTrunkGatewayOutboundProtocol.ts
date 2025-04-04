/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the protocol to use for SIP signaling outbound calls. Default is udp.
 *
 * @default udp
 */
export type SipTrunkGatewayOutboundProtocol = "tls/srtp" | "tcp" | "tls" | "udp";
export const SipTrunkGatewayOutboundProtocol = {
    TlsSrtp: "tls/srtp",
    Tcp: "tcp",
    Tls: "tls",
    Udp: "udp",
} as const;
