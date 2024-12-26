/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface Payment {
    /** This is the id of the payment */
    id: string;
    /** This is the id of the org */
    orgId?: string;
    /**
     * This is the total cost of the payment, which is the sum of all the costs in the costs object.
     *
     * Note: this is a string to avoid floating point precision issues.
     */
    cost: string;
    /** This is the itemized breakdown of payment amounts */
    costs: Record<string, unknown>[];
    /** This is the status of the payment */
    status: Vapi.PaymentStatus;
    /** This is the timestamp when the payment was created */
    createdAt: string;
    /** This is the timestamp when the payment was last updated */
    updatedAt: string;
    /** This indicates if this payment was automatically generated by the auto-reload feature */
    isAutoReload: boolean;
    /** This is the id of the subscription the payment belongs to */
    subscriptionId: string;
    /** This is the id of the call */
    callId?: string;
    /** This is the id of the purchased phone number */
    phoneNumberId?: string;
    /** This is the id of the associated stripe payment intent */
    stripePaymentIntentId?: string;
    /** This is the id of the associated stripe invoice */
    stripeInvoiceId?: string;
}
