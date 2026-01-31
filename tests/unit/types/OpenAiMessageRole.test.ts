/**
 * Tests for OpenAiMessageRole enum
 * VAP-11729: Update server-sdk-typescript SDK with OpenAI spec updates
 */
import { describe, it, expect } from "vitest";
import { OpenAiMessageRole } from "../../../src/api/types/OpenAiMessageRole.js";

describe("OpenAiMessageRole", () => {
    describe("enum values", () => {
        it("should have 'assistant' role", () => {
            expect(OpenAiMessageRole.Assistant).toBe("assistant");
        });

        it("should have 'function' role (deprecated)", () => {
            expect(OpenAiMessageRole.Function).toBe("function");
        });

        it("should have 'user' role", () => {
            expect(OpenAiMessageRole.User).toBe("user");
        });

        it("should have 'system' role", () => {
            expect(OpenAiMessageRole.System).toBe("system");
        });

        it("should have 'tool' role", () => {
            expect(OpenAiMessageRole.Tool).toBe("tool");
        });

        it("should have 'developer' role for GPT-5.x and o-series models", () => {
            expect(OpenAiMessageRole.Developer).toBe("developer");
        });
    });

    describe("type safety", () => {
        it("should accept valid role values", () => {
            const roles: OpenAiMessageRole[] = [
                OpenAiMessageRole.Assistant,
                OpenAiMessageRole.Function,
                OpenAiMessageRole.User,
                OpenAiMessageRole.System,
                OpenAiMessageRole.Tool,
                OpenAiMessageRole.Developer,
            ];

            expect(roles).toHaveLength(6);
            expect(roles).toContain("assistant");
            expect(roles).toContain("function");
            expect(roles).toContain("user");
            expect(roles).toContain("system");
            expect(roles).toContain("tool");
            expect(roles).toContain("developer");
        });

        it("should have all expected roles defined", () => {
            const expectedRoles = ["assistant", "function", "user", "system", "tool", "developer"];
            const actualRoles = Object.values(OpenAiMessageRole);

            expect(actualRoles.sort()).toEqual(expectedRoles.sort());
        });
    });

    describe("backward compatibility", () => {
        it("should maintain existing role string values", () => {
            // Ensure existing roles haven't changed their string values
            expect(OpenAiMessageRole.Assistant).toBe("assistant");
            expect(OpenAiMessageRole.Function).toBe("function");
            expect(OpenAiMessageRole.User).toBe("user");
            expect(OpenAiMessageRole.System).toBe("system");
            expect(OpenAiMessageRole.Tool).toBe("tool");
        });
    });
});
