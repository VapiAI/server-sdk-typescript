/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CustomKnowledgeBase {
    provider: "custom-knowledge-base";
    /**
     * This is where the knowledge base request will be sent.
     *
     * Request Example:
     *
     * POST https://{server.url}
     * Content-Type: application/json
     *
     * {
     *   "messsage": {
     *     "type": "knowledge-base-request",
     *     "messages": [
     *       {
     *         "role": "user",
     *         "content": "Why is ocean blue?"
     *       }
     *     ],
     *     ...other metadata about the call...
     *   }
     * }
     *
     * Response Expected:
     * ```
     * {
     *   "message": {
     *      "role": "assistant",
     *      "content": "The ocean is blue because water absorbs everything but blue.",
     *   }, // YOU CAN RETURN THE EXACT RESPONSE TO SPEAK
     *   "documents": [
     *     {
     *       "content": "The ocean is blue primarily because water absorbs colors in the red part of the light spectrum and scatters the blue light, making it more visible to our eyes.",
     *       "similarity": 1
     *     },
     *     {
     *       "content": "Blue light is scattered more by the water molecules than other colors, enhancing the blue appearance of the ocean.",
     *       "similarity": .5
     *     }
     *   ] // OR, YOU CAN RETURN AN ARRAY OF DOCUMENTS THAT WILL BE SENT TO THE MODEL
     * }
     * ```
     */
    server: Vapi.Server;
    /** This is the id of the knowledge base. */
    id: string;
    /** This is the org id of the knowledge base. */
    orgId: string;
}
