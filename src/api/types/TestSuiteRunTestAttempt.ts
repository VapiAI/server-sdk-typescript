/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface TestSuiteRunTestAttempt {
    /** These are the results of the scorers used to evaluate the test attempt. */
    scorerResults: Vapi.TestSuiteRunScorerAi[];
    /** This is the call made during the test attempt. */
    call?: Vapi.TestSuiteRunTestAttemptCall;
    /** This is the call ID for the test attempt. */
    callId?: string;
    /** This is the metadata for the test attempt. */
    metadata?: Vapi.TestSuiteRunTestAttemptMetadata;
}
