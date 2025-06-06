/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface VapiPhoneNumber {
    /**
     * This is the fallback destination an inbound call will be transferred to if:
     * 1. `assistantId` is not set
     * 2. `squadId` is not set
     * 3. and, `assistant-request` message to the `serverUrl` fails
     *
     * If this is not set and above conditions are met, the inbound call is hung up with an error message.
     */
    fallbackDestination?: Vapi.VapiPhoneNumberFallbackDestination;
    /** This is the hooks that will be used for incoming calls to this phone number. */
    hooks?: Vapi.PhoneNumberHookCallRinging[];
    provider: "vapi";
    /** This is the unique identifier for the phone number. */
    id: string;
    /** This is the unique identifier for the org that this phone number belongs to. */
    orgId: string;
    /** This is the ISO 8601 date-time string of when the phone number was created. */
    createdAt: string;
    /** This is the ISO 8601 date-time string of when the phone number was last updated. */
    updatedAt: string;
    /** This is the status of the phone number. */
    status?: Vapi.VapiPhoneNumberStatus;
    /** These are the digits of the phone number you purchased from Vapi. */
    number?: string;
    /** This is the name of the phone number. This is just for your own reference. */
    name?: string;
    /**
     * This is the assistant that will be used for incoming calls to this phone number.
     *
     * If neither `assistantId`, `squadId` nor `workflowId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
     */
    assistantId?: string;
    /**
     * This is the workflow that will be used for incoming calls to this phone number.
     *
     * If neither `assistantId`, `squadId`, nor `workflowId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
     */
    workflowId?: string;
    /**
     * This is the squad that will be used for incoming calls to this phone number.
     *
     * If neither `assistantId`, `squadId`, nor `workflowId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
     */
    squadId?: string;
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
    /** This is the area code of the phone number to purchase. */
    numberDesiredAreaCode?: string;
    /**
     * This is the SIP URI of the phone number. You can SIP INVITE this. The assistant attached to this number will answer.
     *
     * This is case-insensitive.
     */
    sipUri?: string;
    /**
     * This enables authentication for incoming SIP INVITE requests to the `sipUri`.
     *
     * If not set, any username/password to the 401 challenge of the SIP INVITE will be accepted.
     */
    authentication?: Vapi.SipAuthentication;
}
