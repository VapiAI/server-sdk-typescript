/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CreateOrgDto {
    /**
     * When this is enabled, no logs, recordings, or transcriptions will be stored. At the end of the call, you will still receive an end-of-call-report message to store on your server. Defaults to false.
     * When HIPAA is enabled, only OpenAI/Custom LLM or Azure Providers will be available for LLM and Voice respectively.
     * This is due to the compliance requirements of HIPAA. Other providers may not meet these requirements.
     */
    hipaaEnabled?: boolean;
    /** This is the ID of the subscription the org belongs to. */
    subscriptionId?: string;
    /** This is the name of the org. This is just for your own reference. */
    name?: string;
    /** This is the channel of the org. There is the cluster the API traffic for the org will be directed. */
    channel?: Vapi.CreateOrgDtoChannel;
    /** This is the monthly billing limit for the org. To go beyond $1000/mo, please contact us at support@vapi.ai. */
    billingLimit?: number;
    /**
     * This is where Vapi will send webhooks. You can find all webhooks available along with their shape in ServerMessage schema.
     *
     * The order of precedence is:
     *
     * 1. assistant.server
     * 2. phoneNumber.server
     * 3. org.server
     */
    server?: Vapi.Server;
    /** This is the concurrency limit for the org. This is the maximum number of calls that can be active at any given time. To go beyond 10, please contact us at support@vapi.ai. */
    concurrencyLimit?: number;
}
