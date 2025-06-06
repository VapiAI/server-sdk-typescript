/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ResponseTextDeltaEvent {
    /** Index of the content part */
    content_index: number;
    /** Text delta being added */
    delta: string;
    /** ID of the output item */
    item_id: string;
    /** Index of the output item */
    output_index: number;
    /** Event type */
    type: "response.output_text.delta";
}
