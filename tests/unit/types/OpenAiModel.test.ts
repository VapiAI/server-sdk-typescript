/**
 * Tests for OpenAiModel interface
 * VAP-11729: Update server-sdk-typescript SDK with OpenAI spec updates
 */
import { describe, it, expect } from "vitest";
import type { OpenAiModel } from "../../../src/api/types/OpenAiModel.js";
import { OpenAiModelReasoningEffort } from "../../../src/api/types/OpenAiModelReasoningEffort.js";

describe("OpenAiModel", () => {
    describe("new optional parameters", () => {
        it("should allow creating a model config with seed parameter", () => {
            const model: Partial<OpenAiModel> = {
                seed: 42,
            };

            expect(model.seed).toBe(42);
        });

        it("should allow creating a model config with topP parameter", () => {
            const model: Partial<OpenAiModel> = {
                topP: 0.9,
            };

            expect(model.topP).toBe(0.9);
        });

        it("should allow creating a model config with frequencyPenalty parameter", () => {
            const model: Partial<OpenAiModel> = {
                frequencyPenalty: 0.5,
            };

            expect(model.frequencyPenalty).toBe(0.5);
        });

        it("should allow creating a model config with presencePenalty parameter", () => {
            const model: Partial<OpenAiModel> = {
                presencePenalty: 0.3,
            };

            expect(model.presencePenalty).toBe(0.3);
        });

        it("should allow creating a model config with logprobs parameter", () => {
            const model: Partial<OpenAiModel> = {
                logprobs: true,
            };

            expect(model.logprobs).toBe(true);
        });

        it("should allow creating a model config with topLogprobs parameter", () => {
            const model: Partial<OpenAiModel> = {
                logprobs: true,
                topLogprobs: 5,
            };

            expect(model.topLogprobs).toBe(5);
        });

        it("should allow creating a model config with parallelToolCalls parameter", () => {
            const model: Partial<OpenAiModel> = {
                parallelToolCalls: false,
            };

            expect(model.parallelToolCalls).toBe(false);
        });

        it("should allow creating a model config with reasoningEffort parameter", () => {
            const model: Partial<OpenAiModel> = {
                reasoningEffort: OpenAiModelReasoningEffort.High,
            };

            expect(model.reasoningEffort).toBe("high");
        });
    });

    describe("parameter validation (conceptual)", () => {
        it("should accept valid topP values (0 to 1)", () => {
            const validValues = [0, 0.1, 0.5, 0.9, 1];
            validValues.forEach((value) => {
                const model: Partial<OpenAiModel> = { topP: value };
                expect(model.topP).toBe(value);
            });
        });

        it("should accept valid frequency_penalty values (-2.0 to 2.0)", () => {
            const validValues = [-2.0, -1.0, 0, 1.0, 2.0];
            validValues.forEach((value) => {
                const model: Partial<OpenAiModel> = { frequencyPenalty: value };
                expect(model.frequencyPenalty).toBe(value);
            });
        });

        it("should accept valid presence_penalty values (-2.0 to 2.0)", () => {
            const validValues = [-2.0, -1.0, 0, 1.0, 2.0];
            validValues.forEach((value) => {
                const model: Partial<OpenAiModel> = { presencePenalty: value };
                expect(model.presencePenalty).toBe(value);
            });
        });

        it("should accept valid topLogprobs values (0 to 20)", () => {
            const validValues = [0, 5, 10, 15, 20];
            validValues.forEach((value) => {
                const model: Partial<OpenAiModel> = { topLogprobs: value };
                expect(model.topLogprobs).toBe(value);
            });
        });
    });

    describe("backward compatibility", () => {
        it("should maintain existing temperature parameter", () => {
            const model: Partial<OpenAiModel> = {
                temperature: 0.7,
            };

            expect(model.temperature).toBe(0.7);
        });

        it("should maintain existing maxTokens parameter", () => {
            const model: Partial<OpenAiModel> = {
                maxTokens: 1000,
            };

            expect(model.maxTokens).toBe(1000);
        });

        it("should allow combining old and new parameters", () => {
            const model: Partial<OpenAiModel> = {
                temperature: 0.7,
                maxTokens: 1000,
                topP: 0.9,
                frequencyPenalty: 0.5,
                presencePenalty: 0.3,
                seed: 42,
                logprobs: true,
                topLogprobs: 5,
                parallelToolCalls: true,
                reasoningEffort: OpenAiModelReasoningEffort.Medium,
            };

            expect(model.temperature).toBe(0.7);
            expect(model.maxTokens).toBe(1000);
            expect(model.topP).toBe(0.9);
            expect(model.frequencyPenalty).toBe(0.5);
            expect(model.presencePenalty).toBe(0.3);
            expect(model.seed).toBe(42);
            expect(model.logprobs).toBe(true);
            expect(model.topLogprobs).toBe(5);
            expect(model.parallelToolCalls).toBe(true);
            expect(model.reasoningEffort).toBe("medium");
        });
    });

    describe("reasoning models (o1, o3 series)", () => {
        it("should support reasoningEffort for o-series models", () => {
            const lowEffort: Partial<OpenAiModel> = {
                reasoningEffort: OpenAiModelReasoningEffort.Low,
            };
            const mediumEffort: Partial<OpenAiModel> = {
                reasoningEffort: OpenAiModelReasoningEffort.Medium,
            };
            const highEffort: Partial<OpenAiModel> = {
                reasoningEffort: OpenAiModelReasoningEffort.High,
            };

            expect(lowEffort.reasoningEffort).toBe("low");
            expect(mediumEffort.reasoningEffort).toBe("medium");
            expect(highEffort.reasoningEffort).toBe("high");
        });
    });
});
