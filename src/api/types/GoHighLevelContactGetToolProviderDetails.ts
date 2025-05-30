/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface GoHighLevelContactGetToolProviderDetails {
    /** This is the Template URL or the Snapshot URL corresponding to the Template. */
    templateUrl?: string;
    setupInstructions?: Vapi.ToolTemplateSetup[];
    /** The type of tool. "gohighlevel.contact.get" for GoHighLevel contact get tool. */
    type: "gohighlevel.contact.get";
}
