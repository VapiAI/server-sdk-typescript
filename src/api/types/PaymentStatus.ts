/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the status of the payment
 */
export type PaymentStatus = "past-due" | "pending" | "finalized" | "refunded";

export const PaymentStatus = {
    PastDue: "past-due",
    Pending: "pending",
    Finalized: "finalized",
    Refunded: "refunded",
} as const;