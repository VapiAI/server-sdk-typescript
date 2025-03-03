/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface TestSuiteRunScorerAi {
    /** This is the type of the scorer, which must be AI. */
    type: "ai";
    /** This is the result of the test suite. */
    result: Vapi.TestSuiteRunScorerAiResult;
    /** This is the reasoning provided by the AI scorer. */
    reasoning: string;
    /** This is the rubric used by the AI scorer. */
    rubric: string;
}
