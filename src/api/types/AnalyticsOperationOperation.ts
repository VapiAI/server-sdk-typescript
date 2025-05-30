/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the aggregation operation you want to perform.
 */
export type AnalyticsOperationOperation = "sum" | "avg" | "count" | "min" | "max" | "history";
export const AnalyticsOperationOperation = {
    Sum: "sum",
    Avg: "avg",
    Count: "count",
    Min: "min",
    Max: "max",
    History: "history",
} as const;
