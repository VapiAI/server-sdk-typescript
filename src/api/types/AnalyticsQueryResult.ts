/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface AnalyticsQueryResult {
    /** This is the unique key for the query. */
    name: string;
    /** This is the time range for the query. */
    timeRange: Vapi.TimeRange;
    /**
     * This is the result of the query, a list of unique groups with result of their aggregations.
     *
     * Example:
     * "result": [
     *   { "date": "2023-01-01", "assistantId": "123", "endedReason": "customer-ended-call", "sumDuration": 120, "avgCost": 10.5 },
     *   { "date": "2023-01-02", "assistantId": "123", "endedReason": "customer-did-not-give-microphone-permission", "sumDuration": 0, "avgCost": 0 },
     *   // Additional results
     * ]
     */
    result: Record<string, unknown>[];
}
