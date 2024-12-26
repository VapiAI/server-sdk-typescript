/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface PhoneNumberPaginatedResponse {
    /** A list of phone numbers, which can be of any provider type. */
    results: Vapi.PhoneNumberPaginatedResponseResultsItem[];
    /** Metadata about the pagination. */
    metadata: Vapi.PaginationMeta;
}
