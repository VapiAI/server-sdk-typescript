/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * This is the plan for smart endpointing. Pick between Vapi smart endpointing or LiveKit smart endpointing (or nothing). We strongly recommend using livekit endpointing when working in English. LiveKit endpointing is not supported in other languages, yet.
 *
 * If this is set, it will override and take precedence over `transcriptionEndpointingPlan`.
 * This plan will still be overridden by any matching `customEndpointingRules`.
 */
export type StartSpeakingPlanSmartEndpointingPlan = Vapi.VapiSmartEndpointingPlan | Vapi.LivekitSmartEndpointingPlan;
