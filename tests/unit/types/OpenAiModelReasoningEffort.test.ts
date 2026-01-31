/**
 * Tests for OpenAiModelReasoningEffort enum
 * VAP-11729: Update server-sdk-typescript SDK with OpenAI spec updates
 */
import { describe, it, expect } from "vitest";
import { OpenAiModelReasoningEffort } from "../../../src/api/types/OpenAiModelReasoningEffort.js";

describe("OpenAiModelReasoningEffort", () => {
    describe("enum values", () => {
        it("should have 'low' reasoning effort level", () => {
            expect(OpenAiModelReasoningEffort.Low).toBe("low");
        });

        it("should have 'medium' reasoning effort level (default)", () => {
            expect(OpenAiModelReasoningEffort.Medium).toBe("medium");
        });

        it("should have 'high' reasoning effort level", () => {
            expect(OpenAiModelReasoningEffort.High).toBe("high");
        });
    });

    describe("type safety", () => {
        it("should accept valid reasoning effort values", () => {
            const efforts: OpenAiModelReasoningEffort[] = [
                OpenAiModelReasoningEffort.Low,
                OpenAiModelReasoningEffort.Medium,
                OpenAiModelReasoningEffort.High,
            ];

            expect(efforts).toHaveLength(3);
            expect(efforts).toContain("low");
            expect(efforts).toContain("medium");
            expect(efforts).toContain("high");
        });

        it("should have all expected effort levels defined", () => {
            const expectedEfforts = ["low", "medium", "high"];
            const actualEfforts = Object.values(OpenAiModelReasoningEffort);

            expect(actualEfforts.sort()).toEqual(expectedEfforts.sort());
        });
    });
});
