/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CreateTestSuiteTestChatDto {
    /** These are the scorers used to evaluate the test. */
    scorers: Vapi.TestSuiteTestScorerAi[];
    type: "chat";
    /** This is the script to be used for the chat test. */
    script: string;
    /** This is the number of attempts allowed for the test. */
    numAttempts?: number;
    /** This is the name of the test. */
    name?: string;
}
