/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface GetSessionPaginatedDto {
    /** This is the name of the session to filter by. */
    name?: string;
    /** This is the ID of the assistant to filter sessions by. */
    assistantId?: string;
    /** This is the ID of the workflow to filter sessions by. */
    workflowId?: string;
    /** This is the page number to return. Defaults to 1. */
    page?: number;
    /** This is the sort order for pagination. Defaults to 'DESC'. */
    sortOrder?: Vapi.GetSessionPaginatedDtoSortOrder;
    /** This is the maximum number of items to return. Defaults to 100. */
    limit?: number;
    /** This will return items where the createdAt is greater than the specified value. */
    createdAtGt?: string;
    /** This will return items where the createdAt is less than the specified value. */
    createdAtLt?: string;
    /** This will return items where the createdAt is greater than or equal to the specified value. */
    createdAtGe?: string;
    /** This will return items where the createdAt is less than or equal to the specified value. */
    createdAtLe?: string;
    /** This will return items where the updatedAt is greater than the specified value. */
    updatedAtGt?: string;
    /** This will return items where the updatedAt is less than the specified value. */
    updatedAtLt?: string;
    /** This will return items where the updatedAt is greater than or equal to the specified value. */
    updatedAtGe?: string;
    /** This will return items where the updatedAt is less than or equal to the specified value. */
    updatedAtLe?: string;
}
