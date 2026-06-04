/**
 * Schemas for MCP server tool inputs.
 *
 * These define the shape and descriptions of parameters accepted
 * by the MCP tools for the Vapi API.
 */

export interface SchemaProperty {
    type: string;
    description: string;
    enum?: string[];
}

export interface ToolSchema {
    type: "object";
    properties: Record<string, SchemaProperty>;
    required?: string[];
}

/**
 * Schema for the create_call tool input.
 *
 * The `phoneNumberId` description explicitly notes that outbound calls
 * require a Twilio or Vonage imported number, and that Vapi-provisioned
 * numbers are inbound-only.
 */
export const CallInputSchema: ToolSchema = {
    type: "object",
    properties: {
        phoneNumberId: {
            type: "string",
            description:
                "The ID of the phone number to use for the outbound call. " +
                "Must be a Twilio or Vonage imported number for outbound calls. " +
                "Vapi-provisioned numbers are inbound-only and cannot be used for outbound dialing. " +
                'Use the "list_phone_numbers" tool to find numbers with provider "twilio" or "vonage".',
        },
        assistantId: {
            type: "string",
            description:
                "The ID of the assistant to use for the call. " + "Provide either assistantId, squadId, or workflowId.",
        },
        workflowId: {
            type: "string",
            description:
                "The ID of the workflow to use for the call. " + "Provide either assistantId, squadId, or workflowId.",
        },
        squadId: {
            type: "string",
            description:
                "The ID of the squad to use for the call. " + "Provide either assistantId, squadId, or workflowId.",
        },
        customerId: {
            type: "string",
            description: "The ID of an existing customer to call.",
        },
        customerNumber: {
            type: "string",
            description: "The phone number of the customer to call (E.164 format, e.g. +14155551234).",
        },
    },
    required: ["phoneNumberId"],
};

/**
 * Schema for the list_phone_numbers tool input.
 */
export const ListPhoneNumbersSchema: ToolSchema = {
    type: "object",
    properties: {
        limit: {
            type: "string",
            description: "Maximum number of phone numbers to return.",
        },
    },
};

/**
 * Schema for the get_phone_number tool input.
 */
export const GetPhoneNumberSchema: ToolSchema = {
    type: "object",
    properties: {
        id: {
            type: "string",
            description: "The unique identifier of the phone number to retrieve.",
        },
    },
    required: ["id"],
};
