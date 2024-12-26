/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface TransportCost {
    /** This is the type of cost, always 'transport' for this class. */
    type: "transport";
    provider?: Vapi.TransportCostProvider;
    /** This is the minutes of `transport` usage. This should match `call.endedAt` - `call.startedAt`. */
    minutes: number;
    /** This is the cost of the component in USD. */
    cost: number;
}
