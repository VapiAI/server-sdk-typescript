/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SummaryPlan {
    /**
     * These are the messages used to generate the summary.
     *
     * @default: ```
     * [
     *   {
     *     "role": "system",
     *     "content": "You are an expert note-taker. You will be given a transcript of a call. Summarize the call in 2-3 sentences. DO NOT return anything except the summary."
     *   },
     *   {
     *     "role": "user",
     *     "content": "Here is the transcript:\n\n{{transcript}}\n\n"
     *   }
     * ]```
     *
     * You can customize by providing any messages you want.
     *
     * Here are the template variables available:
     * - {{transcript}}: The transcript of the call from `call.artifact.transcript`- {{systemPrompt}}: The system prompt of the call from `assistant.model.messages[type=system].content`
     */
    messages?: Record<string, unknown>[];
    /**
     * This determines whether a summary is generated and stored in `call.analysis.summary`. Defaults to true.
     *
     * Usage:
     * - If you want to disable the summary, set this to false.
     *
     * @default true
     */
    enabled?: boolean;
    /**
     * This is how long the request is tried before giving up. When request times out, `call.analysis.summary` will be empty.
     *
     * Usage:
     * - To guarantee the summary is generated, set this value high. Note, this will delay the end of call report in cases where model is slow to respond.
     *
     * @default 5 seconds
     */
    timeoutSeconds?: number;
}
