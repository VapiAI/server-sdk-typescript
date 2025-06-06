/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface HangupNode {
    type: "hangup";
    name: string;
    /** This is whether or not the node is the start of the workflow. */
    isStart?: boolean;
    /** This is for metadata you want to store on the task. */
    metadata?: Record<string, unknown>;
}
