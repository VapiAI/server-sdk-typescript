/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the mode of the Api Request.
 * We only support BLOCKING and BACKGROUND for now.
 */
export type ApiRequestMode = "blocking" | "background";
export const ApiRequestMode = {
    Blocking: "blocking",
    Background: "background",
} as const;
