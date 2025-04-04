/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This configures how transfer is executed and the experience of the destination party receiving the call.
 *
 * Usage:
 * - `blind-transfer`: The assistant forwards the call to the destination without any message or summary.
 * - `blind-transfer-add-summary-to-sip-header`: The assistant forwards the call to the destination and adds a SIP header X-Transfer-Summary to the call to include the summary.
 * - `warm-transfer-say-message`: The assistant dials the destination, delivers the `message` to the destination party, connects the customer, and leaves the call.
 * - `warm-transfer-say-summary`: The assistant dials the destination, provides a summary of the call to the destination party, connects the customer, and leaves the call.
 * - `warm-transfer-wait-for-operator-to-speak-first-and-then-say-message`: The assistant dials the destination, waits for the operator to speak, delivers the `message` to the destination party, and then connects the customer.
 * - `warm-transfer-wait-for-operator-to-speak-first-and-then-say-summary`: The assistant dials the destination, waits for the operator to speak, provides a summary of the call to the destination party, and then connects the customer.
 * - `warm-transfer-twiml`: The assistant dials the destination, executes the twiml instructions on the destination call leg, connects the customer, and leaves the call.
 *
 * @default 'blind-transfer'
 */
export type TransferPlanMode =
    | "blind-transfer"
    | "blind-transfer-add-summary-to-sip-header"
    | "warm-transfer-say-message"
    | "warm-transfer-say-summary"
    | "warm-transfer-twiml"
    | "warm-transfer-wait-for-operator-to-speak-first-and-then-say-message"
    | "warm-transfer-wait-for-operator-to-speak-first-and-then-say-summary";
export const TransferPlanMode = {
    BlindTransfer: "blind-transfer",
    BlindTransferAddSummaryToSipHeader: "blind-transfer-add-summary-to-sip-header",
    WarmTransferSayMessage: "warm-transfer-say-message",
    WarmTransferSaySummary: "warm-transfer-say-summary",
    WarmTransferTwiml: "warm-transfer-twiml",
    WarmTransferWaitForOperatorToSpeakFirstAndThenSayMessage:
        "warm-transfer-wait-for-operator-to-speak-first-and-then-say-message",
    WarmTransferWaitForOperatorToSpeakFirstAndThenSaySummary:
        "warm-transfer-wait-for-operator-to-speak-first-and-then-say-summary",
} as const;
