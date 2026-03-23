/**
 * Transformers for MCP server inputs and outputs.
 *
 * These functions transform data between the MCP tool interface
 * and the Vapi API format.
 */

/** Phone number providers that support outbound calling. */
const OUTBOUND_CAPABLE_PROVIDERS = ["twilio", "vonage", "telnyx", "byo-phone-number"] as const;

/** Phone number providers that are inbound-only. */
const INBOUND_ONLY_PROVIDERS = ["vapi"] as const;

export type OutboundCapableProvider = (typeof OUTBOUND_CAPABLE_PROVIDERS)[number];
export type InboundOnlyProvider = (typeof INBOUND_ONLY_PROVIDERS)[number];
export type PhoneNumberProvider = OutboundCapableProvider | InboundOnlyProvider;

export interface PhoneNumberOutput {
    id: string;
    orgId: string;
    provider: PhoneNumberProvider;
    number?: string;
    name?: string;
    createdAt: string;
    updatedAt: string;
    assistantId?: string;
    workflowId?: string;
    squadId?: string;
}

export interface PhoneNumberApiResponse {
    id: string;
    orgId: string;
    provider: string;
    number?: string;
    name?: string;
    createdAt: string;
    updatedAt: string;
    assistantId?: string;
    workflowId?: string;
    squadId?: string;
    [key: string]: unknown;
}

/**
 * Transforms a phone number API response into the MCP output format.
 *
 * Exposes the `provider` field so MCP users can identify which numbers
 * support outbound calling (twilio, vonage, telnyx, byo-phone-number)
 * versus inbound-only (vapi).
 */
export function transformPhoneNumberOutput(apiResponse: PhoneNumberApiResponse): PhoneNumberOutput {
    return {
        id: apiResponse.id,
        orgId: apiResponse.orgId,
        provider: apiResponse.provider as PhoneNumberProvider,
        number: apiResponse.number,
        name: apiResponse.name,
        createdAt: apiResponse.createdAt,
        updatedAt: apiResponse.updatedAt,
        assistantId: apiResponse.assistantId,
        workflowId: apiResponse.workflowId,
        squadId: apiResponse.squadId,
    };
}

export interface CallInput {
    phoneNumberId?: string;
    assistantId?: string;
    workflowId?: string;
    squadId?: string;
    customerId?: string;
    customer?: {
        number: string;
        [key: string]: unknown;
    };
    [key: string]: unknown;
}

export interface CallApiPayload {
    phoneNumberId?: string;
    assistantId?: string;
    workflowId?: string;
    squadId?: string;
    customerId?: string;
    customer?: {
        number: string;
        [key: string]: unknown;
    };
    [key: string]: unknown;
}

export class OutboundCallValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "OutboundCallValidationError";
    }
}

/**
 * Validates whether a phone number can be used for outbound calling.
 *
 * Vapi-provisioned numbers are inbound-only and cannot dial outbound.
 * This pre-validates the phone number type before making the API call
 * to provide a clear, actionable error message instead of the cryptic
 * API error "Vapi Numbers Can't Dial Outbound Yet".
 *
 * @param phoneNumberId - The ID of the phone number to validate.
 * @param fetchPhoneNumber - A function that fetches the phone number details by ID.
 * @throws {OutboundCallValidationError} If the phone number is a Vapi-provisioned number.
 */
export async function validatePhoneNumberForOutbound(
    phoneNumberId: string,
    fetchPhoneNumber: (id: string) => Promise<PhoneNumberApiResponse>,
): Promise<void> {
    const phoneNumber = await fetchPhoneNumber(phoneNumberId);

    if (phoneNumber.provider === "vapi") {
        throw new OutboundCallValidationError(
            `Phone number "${phoneNumberId}" is a Vapi-provisioned number (provider: "vapi") and cannot be used for outbound calls. ` +
                "Vapi-provisioned numbers are inbound-only. " +
                "To make outbound calls, use a Twilio or Vonage imported number instead. " +
                'You can check your available numbers with the "list_phone_numbers" tool and look for numbers with provider "twilio" or "vonage".',
        );
    }
}

/**
 * Transforms call input from MCP format to the API payload format.
 *
 * If a `phoneNumberId` is provided, this function validates that the
 * phone number is capable of outbound calling before returning the
 * API payload. Vapi-provisioned numbers will be rejected with a
 * clear error message.
 *
 * @param input - The MCP call input.
 * @param fetchPhoneNumber - A function that fetches phone number details by ID.
 *   Required when `phoneNumberId` is provided in the input.
 * @returns The API payload for creating an outbound call.
 * @throws {OutboundCallValidationError} If a Vapi-provisioned number is used.
 */
export async function transformCallInput(
    input: CallInput,
    fetchPhoneNumber?: (id: string) => Promise<PhoneNumberApiResponse>,
): Promise<CallApiPayload> {
    if (input.phoneNumberId && fetchPhoneNumber) {
        await validatePhoneNumberForOutbound(input.phoneNumberId, fetchPhoneNumber);
    }

    const payload: CallApiPayload = {};

    if (input.phoneNumberId !== undefined) {
        payload.phoneNumberId = input.phoneNumberId;
    }
    if (input.assistantId !== undefined) {
        payload.assistantId = input.assistantId;
    }
    if (input.workflowId !== undefined) {
        payload.workflowId = input.workflowId;
    }
    if (input.squadId !== undefined) {
        payload.squadId = input.squadId;
    }
    if (input.customerId !== undefined) {
        payload.customerId = input.customerId;
    }
    if (input.customer !== undefined) {
        payload.customer = input.customer;
    }

    return payload;
}
