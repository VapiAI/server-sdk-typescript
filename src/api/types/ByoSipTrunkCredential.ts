/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface ByoSipTrunkCredential {
    /** This can be used to bring your own SIP trunks or to connect to a Carrier. */
    provider?: "byo-sip-trunk";
    /** This is the unique identifier for the credential. */
    id: string;
    /** This is the unique identifier for the org that this credential belongs to. */
    orgId: string;
    /** This is the ISO 8601 date-time string of when the credential was created. */
    createdAt: string;
    /** This is the ISO 8601 date-time string of when the assistant was last updated. */
    updatedAt: string;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
    /** This is the list of SIP trunk's gateways. */
    gateways: Vapi.SipTrunkGateway[];
    /** This can be used to configure the outbound authentication if required by the SIP trunk. */
    outboundAuthenticationPlan?: Vapi.SipTrunkOutboundAuthenticationPlan;
    /**
     * This ensures the outbound origination attempts have a leading plus. Defaults to false to match conventional telecom behavior.
     *
     * Usage:
     * - Vonage/Twilio requires leading plus for all outbound calls. Set this to true.
     *
     * @default false
     */
    outboundLeadingPlusEnabled?: boolean;
    /** This can be used to configure the tech prefix on outbound calls. This is an advanced property. */
    techPrefix?: string;
    /** This can be used to enable the SIP diversion header for authenticating the calling number if the SIP trunk supports it. This is an advanced property. */
    sipDiversionHeader?: string;
    /** This is an advanced configuration for enterprise deployments. This uses the onprem SBC to trunk into the SIP trunk's `gateways`, rather than the managed SBC provided by Vapi. */
    sbcConfiguration?: Vapi.SbcConfiguration;
}
