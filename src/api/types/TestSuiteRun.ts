/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface TestSuiteRun {
    /** This is the current status of the test suite run. */
    status: Vapi.TestSuiteRunStatus;
    /** This is the unique identifier for the test suite run. */
    id: string;
    /** This is the unique identifier for the organization this run belongs to. */
    orgId: string;
    /** This is the unique identifier for the test suite this run belongs to. */
    testSuiteId: string;
    /** This is the ISO 8601 date-time string of when the test suite run was created. */
    createdAt: string;
    /** This is the ISO 8601 date-time string of when the test suite run was last updated. */
    updatedAt: string;
    /** These are the results of the tests in this test suite run. */
    testResults: Vapi.TestSuiteRunTestResult[];
    /** This is the name of the test suite run. */
    name?: string;
}
