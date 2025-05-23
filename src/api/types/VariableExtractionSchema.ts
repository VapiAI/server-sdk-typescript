/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface VariableExtractionSchema {
    /**
     * This is the type of output you'd like.
     *
     * `string`, `number`, `boolean` are primitive types.
     */
    type: Vapi.VariableExtractionSchemaType;
    /**
     * This is the title of the variable.
     *
     * It can only contain letters, numbers, and underscores.
     */
    title: string;
    /** This is the description to help the model understand what it needs to output. */
    description: string;
    /** This is the enum values to choose from. Only used if the type is `string`. */
    enum?: string[];
}
