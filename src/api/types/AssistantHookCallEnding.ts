/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface AssistantHookCallEnding {
    /** This is the event that triggers this hook */
    on: "call.ending";
    /** This is the set of actions to perform when the hook triggers */
    do: Vapi.AssistantHookCallEndingDoItem[];
    /** This is the set of filters that must match for the hook to trigger */
    filters?: Vapi.AssistantHookFilter[];
}
