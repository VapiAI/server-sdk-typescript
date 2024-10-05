/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface PhoneNumbersListRequest {
    /**
     * This is the maximum number of items to return. Defaults to 100.
     */
    limit?: number;
    /**
     * This will return items where the createdAt is greater than the specified value.
     */
    createdAtGt?: string;
    /**
     * This will return items where the createdAt is less than the specified value.
     */
    createdAtLt?: string;
    /**
     * This will return items where the createdAt is greater than or equal to the specified value.
     */
    createdAtGe?: string;
    /**
     * This will return items where the createdAt is less than or equal to the specified value.
     */
    createdAtLe?: string;
    /**
     * This will return items where the updatedAt is greater than the specified value.
     */
    updatedAtGt?: string;
    /**
     * This will return items where the updatedAt is less than the specified value.
     */
    updatedAtLt?: string;
    /**
     * This will return items where the updatedAt is greater than or equal to the specified value.
     */
    updatedAtGe?: string;
    /**
     * This will return items where the updatedAt is less than or equal to the specified value.
     */
    updatedAtLe?: string;
}
