import { describe, expect, it } from "vitest";
import { CallInputSchema, GetPhoneNumberSchema, ListPhoneNumbersSchema } from "../../mcp-server/src/schemas/index.js";

describe("CallInputSchema", () => {
    it("should have phoneNumberId as a required field", () => {
        expect(CallInputSchema.required).toContain("phoneNumberId");
    });

    it("should document that phoneNumberId requires Twilio or Vonage for outbound", () => {
        const description = CallInputSchema.properties.phoneNumberId.description;
        expect(description).toContain("Twilio");
        expect(description).toContain("Vonage");
    });

    it("should document that Vapi numbers are inbound-only", () => {
        const description = CallInputSchema.properties.phoneNumberId.description;
        expect(description).toContain("Vapi-provisioned");
        expect(description).toContain("inbound-only");
    });

    it("should reference list_phone_numbers tool for finding outbound-capable numbers", () => {
        const description = CallInputSchema.properties.phoneNumberId.description;
        expect(description).toContain("list_phone_numbers");
    });

    it("should include assistantId, workflowId, and squadId properties", () => {
        expect(CallInputSchema.properties).toHaveProperty("assistantId");
        expect(CallInputSchema.properties).toHaveProperty("workflowId");
        expect(CallInputSchema.properties).toHaveProperty("squadId");
    });

    it("should include customer-related properties", () => {
        expect(CallInputSchema.properties).toHaveProperty("customerId");
        expect(CallInputSchema.properties).toHaveProperty("customerNumber");
    });
});

describe("ListPhoneNumbersSchema", () => {
    it("should be a valid object schema", () => {
        expect(ListPhoneNumbersSchema.type).toBe("object");
    });

    it("should have an optional limit property", () => {
        expect(ListPhoneNumbersSchema.properties).toHaveProperty("limit");
        expect(ListPhoneNumbersSchema.required).toBeUndefined();
    });
});

describe("GetPhoneNumberSchema", () => {
    it("should require the id field", () => {
        expect(GetPhoneNumberSchema.required).toContain("id");
    });

    it("should have an id property with string type", () => {
        expect(GetPhoneNumberSchema.properties.id.type).toBe("string");
    });
});
