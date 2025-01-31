/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface Log {
    /** This is the timestamp at which the log was written. */
    time: string;
    /** This is the unique identifier for the org that this log belongs to. */
    orgId: string;
    /** This is the type of the log. */
    type: Vapi.LogType;
    /** This is the type of the webhook, given the log is from a webhook. */
    webhookType?: string;
    /** This is the specific resource, relevant only to API logs. */
    resource?: Vapi.LogResource;
    /** 'This is how long the request took. */
    requestDurationSeconds?: number;
    /** This is the timestamp at which the request began. */
    requestStartedAt?: string;
    /** This is the timestamp at which the request finished. */
    requestFinishedAt?: string;
    /** This is the body of the request. */
    requestBody?: Record<string, unknown>;
    /** This is the request method. */
    requestHttpMethod?: Vapi.LogRequestHttpMethod;
    /** This is the request URL. */
    requestUrl?: string;
    /** This is the request path. */
    requestPath?: string;
    /** This is the request query. */
    requestQuery?: string;
    /** This the HTTP status code of the response. */
    responseHttpCode?: number;
    /** This is the request IP address. */
    requestIpAddress?: string;
    /** This is the origin of the request */
    requestOrigin?: string;
    /** This is the body of the response. */
    responseBody?: Record<string, unknown>;
    /** These are the headers of the request. */
    requestHeaders?: Record<string, unknown>;
    /** This is the error, if one occurred. */
    error?: Vapi.Error_;
    /** This is the ID of the assistant. */
    assistantId?: string;
    /** This is the ID of the phone number. */
    phoneNumberId?: string;
    /** This is the ID of the customer. */
    customerId?: string;
    /** This is the ID of the squad. */
    squadId?: string;
    /** This is the ID of the call. */
    callId?: string;
}
