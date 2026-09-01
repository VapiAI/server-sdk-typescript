import { describe, expect, it } from "vitest";
import type { PhoneNumberApiResponse } from "../../mcp-server/src/transformers/index.js";
import {
    OutboundCallValidationError,
    transformCallInput,
    transformPhoneNumberOutput,
    validatePhoneNumberForOutbound,
} from "../../mcp-server/src/transformers/index.js";

describe("transformPhoneNumberOutput", () => {
    it("should expose the provider field for a Vapi phone number", () => {
        const apiResponse: PhoneNumberApiResponse = {
            id: "pn_123",
            orgId: "org_456",
            provider: "vapi",
            number: "+14155551234",
            name: "My Vapi Number",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
            assistantId: "asst_789",
        };

        const result = transformPhoneNumberOutput(apiResponse);

        expect(result.provider).toBe("vapi");
        expect(result.id).toBe("pn_123");
        expect(result.number).toBe("+14155551234");
        expect(result.name).toBe("My Vapi Number");
    });

    it("should expose the provider field for a Twilio phone number", () => {
        const apiResponse: PhoneNumberApiResponse = {
            id: "pn_tw_123",
            orgId: "org_456",
            provider: "twilio",
            number: "+14155559876",
            name: "My Twilio Number",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
            twilioAccountSid: "AC123",
        };

        const result = transformPhoneNumberOutput(apiResponse);

        expect(result.provider).toBe("twilio");
        expect(result.id).toBe("pn_tw_123");
    });

    it("should expose the provider field for a Vonage phone number", () => {
        const apiResponse: PhoneNumberApiResponse = {
            id: "pn_vn_123",
            orgId: "org_456",
            provider: "vonage",
            number: "+14155550000",
            name: "My Vonage Number",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
            credentialId: "cred_123",
        };

        const result = transformPhoneNumberOutput(apiResponse);

        expect(result.provider).toBe("vonage");
    });

    it("should strip extra API fields not in the output type", () => {
        const apiResponse: PhoneNumberApiResponse = {
            id: "pn_123",
            orgId: "org_456",
            provider: "twilio",
            number: "+14155551234",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
            twilioAccountSid: "AC123",
            twilioAuthToken: "secret_token",
        };

        const result = transformPhoneNumberOutput(apiResponse);

        expect(result).not.toHaveProperty("twilioAccountSid");
        expect(result).not.toHaveProperty("twilioAuthToken");
    });

    it("should handle optional fields being undefined", () => {
        const apiResponse: PhoneNumberApiResponse = {
            id: "pn_123",
            orgId: "org_456",
            provider: "vapi",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        };

        const result = transformPhoneNumberOutput(apiResponse);

        expect(result.number).toBeUndefined();
        expect(result.name).toBeUndefined();
        expect(result.assistantId).toBeUndefined();
        expect(result.workflowId).toBeUndefined();
        expect(result.squadId).toBeUndefined();
    });
});

describe("validatePhoneNumberForOutbound", () => {
    it("should throw OutboundCallValidationError for Vapi-provisioned numbers", async () => {
        const fetchPhoneNumber = async (_id: string): Promise<PhoneNumberApiResponse> => ({
            id: "pn_vapi_123",
            orgId: "org_456",
            provider: "vapi",
            number: "+14155551234",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        });

        await expect(validatePhoneNumberForOutbound("pn_vapi_123", fetchPhoneNumber)).rejects.toThrow(
            OutboundCallValidationError,
        );
    });

    it("should include actionable guidance in the error message for Vapi numbers", async () => {
        const fetchPhoneNumber = async (_id: string): Promise<PhoneNumberApiResponse> => ({
            id: "pn_vapi_123",
            orgId: "org_456",
            provider: "vapi",
            number: "+14155551234",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        });

        await expect(validatePhoneNumberForOutbound("pn_vapi_123", fetchPhoneNumber)).rejects.toThrow(
            /Twilio or Vonage imported number/,
        );
    });

    it("should not throw for Twilio numbers", async () => {
        const fetchPhoneNumber = async (_id: string): Promise<PhoneNumberApiResponse> => ({
            id: "pn_tw_123",
            orgId: "org_456",
            provider: "twilio",
            number: "+14155559876",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        });

        await expect(validatePhoneNumberForOutbound("pn_tw_123", fetchPhoneNumber)).resolves.toBeUndefined();
    });

    it("should not throw for Vonage numbers", async () => {
        const fetchPhoneNumber = async (_id: string): Promise<PhoneNumberApiResponse> => ({
            id: "pn_vn_123",
            orgId: "org_456",
            provider: "vonage",
            number: "+14155550000",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        });

        await expect(validatePhoneNumberForOutbound("pn_vn_123", fetchPhoneNumber)).resolves.toBeUndefined();
    });

    it("should not throw for Telnyx numbers", async () => {
        const fetchPhoneNumber = async (_id: string): Promise<PhoneNumberApiResponse> => ({
            id: "pn_tl_123",
            orgId: "org_456",
            provider: "telnyx",
            number: "+14155550001",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        });

        await expect(validatePhoneNumberForOutbound("pn_tl_123", fetchPhoneNumber)).resolves.toBeUndefined();
    });

    it("should not throw for BYO phone numbers", async () => {
        const fetchPhoneNumber = async (_id: string): Promise<PhoneNumberApiResponse> => ({
            id: "pn_byo_123",
            orgId: "org_456",
            provider: "byo-phone-number",
            number: "+14155550002",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        });

        await expect(validatePhoneNumberForOutbound("pn_byo_123", fetchPhoneNumber)).resolves.toBeUndefined();
    });

    it("should include the phone number ID in the error message", async () => {
        const fetchPhoneNumber = async (_id: string): Promise<PhoneNumberApiResponse> => ({
            id: "pn_specific_id",
            orgId: "org_456",
            provider: "vapi",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        });

        await expect(validatePhoneNumberForOutbound("pn_specific_id", fetchPhoneNumber)).rejects.toThrow(
            /pn_specific_id/,
        );
    });
});

describe("transformCallInput", () => {
    it("should pass through fields when no phoneNumberId is provided", async () => {
        const input = {
            assistantId: "asst_123",
            customerId: "cust_456",
        };

        const result = await transformCallInput(input);

        expect(result.assistantId).toBe("asst_123");
        expect(result.customerId).toBe("cust_456");
        expect(result.phoneNumberId).toBeUndefined();
    });

    it("should validate phone number and pass through for Twilio numbers", async () => {
        const fetchPhoneNumber = async (_id: string): Promise<PhoneNumberApiResponse> => ({
            id: "pn_tw_123",
            orgId: "org_456",
            provider: "twilio",
            number: "+14155559876",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        });

        const input = {
            phoneNumberId: "pn_tw_123",
            assistantId: "asst_123",
            customerId: "cust_456",
        };

        const result = await transformCallInput(input, fetchPhoneNumber);

        expect(result.phoneNumberId).toBe("pn_tw_123");
        expect(result.assistantId).toBe("asst_123");
        expect(result.customerId).toBe("cust_456");
    });

    it("should reject Vapi-provisioned numbers with a clear error", async () => {
        const fetchPhoneNumber = async (_id: string): Promise<PhoneNumberApiResponse> => ({
            id: "pn_vapi_123",
            orgId: "org_456",
            provider: "vapi",
            number: "+14155551234",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        });

        const input = {
            phoneNumberId: "pn_vapi_123",
            assistantId: "asst_123",
            customerId: "cust_456",
        };

        await expect(transformCallInput(input, fetchPhoneNumber)).rejects.toThrow(OutboundCallValidationError);
    });

    it("should skip validation when fetchPhoneNumber is not provided", async () => {
        const input = {
            phoneNumberId: "pn_vapi_123",
            assistantId: "asst_123",
        };

        // Should not throw even though phoneNumberId is provided,
        // because no fetchPhoneNumber function was given
        const result = await transformCallInput(input);

        expect(result.phoneNumberId).toBe("pn_vapi_123");
    });

    it("should pass through customer object correctly", async () => {
        const input = {
            assistantId: "asst_123",
            customer: {
                number: "+14155551234",
                name: "John Doe",
            },
        };

        const result = await transformCallInput(input);

        expect(result.customer).toEqual({
            number: "+14155551234",
            name: "John Doe",
        });
    });

    it("should only include defined fields in the output payload", async () => {
        const input = {
            phoneNumberId: "pn_tw_123",
            assistantId: "asst_123",
        };

        const fetchPhoneNumber = async (_id: string): Promise<PhoneNumberApiResponse> => ({
            id: "pn_tw_123",
            orgId: "org_456",
            provider: "twilio",
            number: "+14155559876",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
        });

        const result = await transformCallInput(input, fetchPhoneNumber);

        expect(result).toHaveProperty("phoneNumberId");
        expect(result).toHaveProperty("assistantId");
        expect(result).not.toHaveProperty("customerId");
        expect(result).not.toHaveProperty("customer");
        expect(result).not.toHaveProperty("squadId");
        expect(result).not.toHaveProperty("workflowId");
    });
});
