import type { SayHookAction } from "../../../src/api/types/SayHookAction.js";

describe("SayHookAction", () => {
    it("should accept a string for exact", () => {
        const action: SayHookAction = {
            exact: "Hello, how can I help you?",
        };
        expect(action.exact).toBe("Hello, how can I help you?");
    });

    it("should accept a string array for exact", () => {
        const action: SayHookAction = {
            exact: ["Hello!", "How can I help you?"],
        };
        expect(action.exact).toEqual(["Hello!", "How can I help you?"]);
    });

    it("should allow exact to be undefined", () => {
        const action: SayHookAction = {};
        expect(action.exact).toBeUndefined();
    });

    it("should allow both prompt and exact to be set", () => {
        const action: SayHookAction = {
            prompt: "Greet the user warmly",
            exact: "Welcome!",
        };
        expect(action.prompt).toBe("Greet the user warmly");
        expect(action.exact).toBe("Welcome!");
    });
});
