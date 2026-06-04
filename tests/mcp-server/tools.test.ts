import { describe, expect, it } from "vitest";
import { createCallTool, getPhoneNumberTool, listPhoneNumbersTool } from "../../mcp-server/src/tools/call.js";

describe("createCallTool", () => {
    it("should have the name 'create_call'", () => {
        expect(createCallTool.name).toBe("create_call");
    });

    it("should describe that outbound calls require Twilio or Vonage numbers", () => {
        expect(createCallTool.description).toContain("Twilio");
        expect(createCallTool.description).toContain("Vonage");
    });

    it("should warn that Vapi numbers cannot be used for outbound", () => {
        expect(createCallTool.description).toContain("Vapi-provisioned");
        expect(createCallTool.description).toContain("inbound-only");
    });

    it("should reference list_phone_numbers tool in the description", () => {
        expect(createCallTool.description).toContain("list_phone_numbers");
    });

    it("should have a valid input schema", () => {
        expect(createCallTool.inputSchema.type).toBe("object");
        expect(createCallTool.inputSchema.properties).toHaveProperty("phoneNumberId");
    });
});

describe("listPhoneNumbersTool", () => {
    it("should have the name 'list_phone_numbers'", () => {
        expect(listPhoneNumbersTool.name).toBe("list_phone_numbers");
    });

    it("should describe the provider field in the output", () => {
        expect(listPhoneNumbersTool.description).toContain("provider");
    });

    it("should explain which providers support outbound calls", () => {
        expect(listPhoneNumbersTool.description).toContain("twilio");
        expect(listPhoneNumbersTool.description).toContain("vonage");
    });

    it("should explain that Vapi numbers are inbound-only", () => {
        expect(listPhoneNumbersTool.description).toContain("vapi");
        expect(listPhoneNumbersTool.description).toContain("inbound-only");
    });
});

describe("getPhoneNumberTool", () => {
    it("should have the name 'get_phone_number'", () => {
        expect(getPhoneNumberTool.name).toBe("get_phone_number");
    });

    it("should describe the provider field in the output", () => {
        expect(getPhoneNumberTool.description).toContain("provider");
    });

    it("should require an id input", () => {
        expect(getPhoneNumberTool.inputSchema.required).toContain("id");
    });
});
