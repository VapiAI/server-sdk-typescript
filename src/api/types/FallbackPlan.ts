/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface FallbackPlan {
    /** This is the list of voices to fallback to in the event that the primary voice provider fails. */
    voices: Vapi.FallbackPlanVoicesItem[];
}