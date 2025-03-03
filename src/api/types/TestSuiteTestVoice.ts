/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface TestSuiteTestVoice {
    /** These are the scorers used to evaluate the test. */
    scorers: Vapi.TestSuiteTestScorerAi[];
    type: "voice";
    /** This is the unique identifier for the test. */
    id: string;
    /** This is the unique identifier for the test suite this test belongs to. */
    testSuiteId: string;
    /** This is the unique identifier for the organization this test belongs to. */
    orgId: string;
    /** This is the ISO 8601 date-time string of when the test was created. */
    createdAt: string;
    /** This is the ISO 8601 date-time string of when the test was last updated. */
    updatedAt: string;
    /** This is the name of the test. */
    name?: string;
    /** This is the script to be used for the voice test. */
    script: string;
    /** This is the number of attempts allowed for the test. */
    numAttempts?: number;
}
