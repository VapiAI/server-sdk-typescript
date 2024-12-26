/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CallLogPrivileged {
    /** This is the unique identifier for the call. */
    callId: string;
    /** This is the unique identifier for the org that this call log belongs to. */
    orgId: string;
    /** This is the log message associated with the call. */
    log: string;
    /** This is the level of the log message. */
    level: Vapi.CallLogPrivilegedLevel;
    /** This is the ISO 8601 date-time string of when the log was created. */
    time: string;
}