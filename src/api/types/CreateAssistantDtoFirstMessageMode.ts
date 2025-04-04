/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the mode for the first message. Default is 'assistant-speaks-first'.
 *
 * Use:
 * - 'assistant-speaks-first' to have the assistant speak first.
 * - 'assistant-waits-for-user' to have the assistant wait for the user to speak first.
 * - 'assistant-speaks-first-with-model-generated-message' to have the assistant speak first with a message generated by the model based on the conversation state. (`assistant.model.messages` at call start, `call.messages` at squad transfer points).
 *
 * @default 'assistant-speaks-first'
 */
export type CreateAssistantDtoFirstMessageMode =
    | "assistant-speaks-first"
    | "assistant-speaks-first-with-model-generated-message"
    | "assistant-waits-for-user";
export const CreateAssistantDtoFirstMessageMode = {
    AssistantSpeaksFirst: "assistant-speaks-first",
    AssistantSpeaksFirstWithModelGeneratedMessage: "assistant-speaks-first-with-model-generated-message",
    AssistantWaitsForUser: "assistant-waits-for-user",
} as const;
