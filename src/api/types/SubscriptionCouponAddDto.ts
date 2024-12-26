/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SubscriptionCouponAddDto {
    /** This is the ID of the org within the subscription which the coupon will take effect on. */
    orgId: string;
    /** This is the code of the coupon to apply to the subscription. */
    couponCode: string;
}