/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface ClientMessageLanguageChangeDetected {
    /** This is the phone number that the message is associated with. */
    phoneNumber?: Vapi.ClientMessageLanguageChangeDetectedPhoneNumber;
    /** This is the type of the message. "language-change-detected" is sent when the transcriber is automatically switched based on the detected language. */
    type: "language-change-detected";
    /** This is the timestamp of the message. */
    timestamp?: number;
    /** This is the call that the message is associated with. */
    call?: Vapi.Call;
    /** This is the customer that the message is associated with. */
    customer?: Vapi.CreateCustomerDto;
    /** This is the assistant that the message is associated with. */
    assistant?: Vapi.CreateAssistantDto;
    /** This is the language the transcriber is switched to. */
    language: string;
}
