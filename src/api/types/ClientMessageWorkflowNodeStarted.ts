/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientMessageWorkflowNodeStarted {
    /** This is the type of the message. "workflow.node.started" is sent when the active node changes. */
    type: "workflow.node.started";
    /** This is the active node. */
    node: Record<string, unknown>;
}
