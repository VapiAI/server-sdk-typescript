/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SchedulePlan {
    /** This is the ISO 8601 date-time string of the earliest time the call can be scheduled. */
    earliestAt: string;
    /** This is the ISO 8601 date-time string of the latest time the call can be scheduled. */
    latestAt?: string;
}
