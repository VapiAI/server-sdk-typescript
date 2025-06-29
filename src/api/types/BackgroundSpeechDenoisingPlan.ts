/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface BackgroundSpeechDenoisingPlan {
    /** Whether smart denoising using Krisp is enabled. */
    smartDenoisingPlan?: Vapi.SmartDenoisingPlan;
    /**
     * Whether Fourier denoising is enabled. Note that this is experimental and may not work as expected.
     *
     * This can be combined with smart denoising, and will be run afterwards.
     */
    fourierDenoisingPlan?: Vapi.FourierDenoisingPlan;
}
