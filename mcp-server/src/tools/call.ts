/**
 * MCP tool definitions for Vapi call operations.
 *
 * These tool definitions follow the MCP (Model Context Protocol) tool
 * specification and are used to expose Vapi call functionality to
 * AI agents and other MCP clients.
 */

import type { ToolSchema } from "../schemas/index.js";
import { CallInputSchema, GetPhoneNumberSchema, ListPhoneNumbersSchema } from "../schemas/index.js";

export interface ToolDefinition {
    name: string;
    description: string;
    inputSchema: ToolSchema;
}

/**
 * Tool definition for creating outbound calls.
 *
 * IMPORTANT: Outbound calls require a Twilio or Vonage imported phone number.
 * Vapi-provisioned numbers are inbound-only and cannot dial outbound.
 * Use the "list_phone_numbers" tool to find numbers with provider
 * "twilio" or "vonage" that support outbound calling.
 */
export const createCallTool: ToolDefinition = {
    name: "create_call",
    description:
        "Creates an outbound phone call. " +
        "IMPORTANT: Outbound calls require a Twilio or Vonage imported phone number. " +
        "Vapi-provisioned numbers (provider: 'vapi') are inbound-only and cannot be used for outbound calls. " +
        'Use the "list_phone_numbers" tool first to find a phone number with provider "twilio" or "vonage". ' +
        "You must provide a phoneNumberId, at least one of assistantId/squadId/workflowId, " +
        "and a customer to call (via customerId or customerNumber).",
    inputSchema: CallInputSchema,
};

/**
 * Tool definition for listing phone numbers.
 *
 * Returns phone numbers with their provider field exposed so users
 * can identify which numbers support outbound calling.
 */
export const listPhoneNumbersTool: ToolDefinition = {
    name: "list_phone_numbers",
    description:
        "Lists all phone numbers in your Vapi account. " +
        "Each number includes a 'provider' field indicating the phone number type: " +
        "'twilio', 'vonage', 'telnyx', or 'byo-phone-number' for imported numbers (support outbound calls), " +
        "or 'vapi' for Vapi-provisioned numbers (inbound-only, cannot make outbound calls). " +
        "Use this tool to find outbound-capable numbers before creating a call.",
    inputSchema: ListPhoneNumbersSchema,
};

/**
 * Tool definition for getting a specific phone number.
 *
 * Returns the phone number details including the provider field.
 */
export const getPhoneNumberTool: ToolDefinition = {
    name: "get_phone_number",
    description:
        "Gets details of a specific phone number by ID. " +
        "Returns the phone number configuration including the 'provider' field: " +
        "'twilio', 'vonage', 'telnyx', or 'byo-phone-number' for imported numbers (support outbound calls), " +
        "or 'vapi' for Vapi-provisioned numbers (inbound-only).",
    inputSchema: GetPhoneNumberSchema,
};
