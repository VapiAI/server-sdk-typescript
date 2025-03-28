/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This is the reason the call ended. This is only sent if the status is "ended".
 */
export type ServerMessageStatusUpdateEndedReason =
    | "assistant-not-valid"
    | "assistant-not-provided"
    | "call-start-error-neither-assistant-nor-server-set"
    | "assistant-request-failed"
    | "assistant-request-returned-error"
    | "assistant-request-returned-unspeakable-error"
    | "assistant-request-returned-invalid-assistant"
    | "assistant-request-returned-no-assistant"
    | "assistant-request-returned-forwarding-phone-number"
    | "assistant-ended-call"
    | "assistant-said-end-call-phrase"
    | "assistant-ended-call-with-hangup-task"
    | "assistant-forwarded-call"
    | "assistant-join-timed-out"
    | "customer-busy"
    | "customer-ended-call"
    | "customer-did-not-answer"
    | "customer-did-not-give-microphone-permission"
    | "assistant-said-message-with-end-call-enabled"
    | "exceeded-max-duration"
    | "manually-canceled"
    | "phone-call-provider-closed-websocket"
    | "db-error"
    | "assistant-not-found"
    | "license-check-failed"
    | "pipeline-error-openai-voice-failed"
    | "pipeline-error-cartesia-voice-failed"
    | "pipeline-error-deepgram-voice-failed"
    | "pipeline-error-eleven-labs-voice-failed"
    | "pipeline-error-playht-voice-failed"
    | "pipeline-error-lmnt-voice-failed"
    | "pipeline-error-azure-voice-failed"
    | "pipeline-error-rime-ai-voice-failed"
    | "pipeline-error-neets-voice-failed"
    | "pipeline-error-smallest-ai-voice-failed"
    | "pipeline-error-neuphonic-voice-failed"
    | "pipeline-error-hume-voice-failed"
    | "pipeline-error-deepgram-transcriber-failed"
    | "pipeline-error-gladia-transcriber-failed"
    | "pipeline-error-speechmatics-transcriber-failed"
    | "pipeline-error-assembly-ai-transcriber-failed"
    | "pipeline-error-talkscriber-transcriber-failed"
    | "pipeline-error-azure-speech-transcriber-failed"
    | "pipeline-error-vapi-llm-failed"
    | "pipeline-error-vapi-400-bad-request-validation-failed"
    | "pipeline-error-vapi-401-unauthorized"
    | "pipeline-error-vapi-403-model-access-denied"
    | "pipeline-error-vapi-429-exceeded-quota"
    | "pipeline-error-vapi-500-server-error"
    | "pipeline-no-available-model"
    | "worker-shutdown"
    | "unknown-error"
    | "vonage-disconnected"
    | "vonage-failed-to-connect-call"
    | "phone-call-provider-bypass-enabled-but-no-call-received"
    | "vapifault-phone-call-worker-setup-socket-error"
    | "vapifault-phone-call-worker-worker-setup-socket-timeout"
    | "vapifault-phone-call-worker-could-not-find-call"
    | "vapifault-transport-never-connected"
    | "vapifault-web-call-worker-setup-failed"
    | "vapifault-transport-connected-but-call-not-active"
    | "vapifault-call-started-but-connection-to-transport-missing"
    | "pipeline-error-openai-llm-failed"
    | "pipeline-error-azure-openai-llm-failed"
    | "pipeline-error-groq-llm-failed"
    | "pipeline-error-google-llm-failed"
    | "pipeline-error-xai-llm-failed"
    | "pipeline-error-mistral-llm-failed"
    | "pipeline-error-inflection-ai-llm-failed"
    | "pipeline-error-cerebras-llm-failed"
    | "pipeline-error-deep-seek-llm-failed"
    | "pipeline-error-openai-400-bad-request-validation-failed"
    | "pipeline-error-openai-401-unauthorized"
    | "pipeline-error-openai-403-model-access-denied"
    | "pipeline-error-openai-429-exceeded-quota"
    | "pipeline-error-openai-500-server-error"
    | "pipeline-error-google-400-bad-request-validation-failed"
    | "pipeline-error-google-401-unauthorized"
    | "pipeline-error-google-403-model-access-denied"
    | "pipeline-error-google-429-exceeded-quota"
    | "pipeline-error-google-500-server-error"
    | "pipeline-error-xai-400-bad-request-validation-failed"
    | "pipeline-error-xai-401-unauthorized"
    | "pipeline-error-xai-403-model-access-denied"
    | "pipeline-error-xai-429-exceeded-quota"
    | "pipeline-error-xai-500-server-error"
    | "pipeline-error-mistral-400-bad-request-validation-failed"
    | "pipeline-error-mistral-401-unauthorized"
    | "pipeline-error-mistral-403-model-access-denied"
    | "pipeline-error-mistral-429-exceeded-quota"
    | "pipeline-error-mistral-500-server-error"
    | "pipeline-error-inflection-ai-400-bad-request-validation-failed"
    | "pipeline-error-inflection-ai-401-unauthorized"
    | "pipeline-error-inflection-ai-403-model-access-denied"
    | "pipeline-error-inflection-ai-429-exceeded-quota"
    | "pipeline-error-inflection-ai-500-server-error"
    | "pipeline-error-deep-seek-400-bad-request-validation-failed"
    | "pipeline-error-deep-seek-401-unauthorized"
    | "pipeline-error-deep-seek-403-model-access-denied"
    | "pipeline-error-deep-seek-429-exceeded-quota"
    | "pipeline-error-deep-seek-500-server-error"
    | "pipeline-error-azure-openai-400-bad-request-validation-failed"
    | "pipeline-error-azure-openai-401-unauthorized"
    | "pipeline-error-azure-openai-403-model-access-denied"
    | "pipeline-error-azure-openai-429-exceeded-quota"
    | "pipeline-error-azure-openai-500-server-error"
    | "pipeline-error-groq-400-bad-request-validation-failed"
    | "pipeline-error-groq-401-unauthorized"
    | "pipeline-error-groq-403-model-access-denied"
    | "pipeline-error-groq-429-exceeded-quota"
    | "pipeline-error-groq-500-server-error"
    | "pipeline-error-cerebras-400-bad-request-validation-failed"
    | "pipeline-error-cerebras-401-unauthorized"
    | "pipeline-error-cerebras-403-model-access-denied"
    | "pipeline-error-cerebras-429-exceeded-quota"
    | "pipeline-error-cerebras-500-server-error"
    | "pipeline-error-anthropic-400-bad-request-validation-failed"
    | "pipeline-error-anthropic-401-unauthorized"
    | "pipeline-error-anthropic-403-model-access-denied"
    | "pipeline-error-anthropic-429-exceeded-quota"
    | "pipeline-error-anthropic-500-server-error"
    | "pipeline-error-anthropic-llm-failed"
    | "pipeline-error-together-ai-400-bad-request-validation-failed"
    | "pipeline-error-together-ai-401-unauthorized"
    | "pipeline-error-together-ai-403-model-access-denied"
    | "pipeline-error-together-ai-429-exceeded-quota"
    | "pipeline-error-together-ai-500-server-error"
    | "pipeline-error-together-ai-llm-failed"
    | "pipeline-error-anyscale-400-bad-request-validation-failed"
    | "pipeline-error-anyscale-401-unauthorized"
    | "pipeline-error-anyscale-403-model-access-denied"
    | "pipeline-error-anyscale-429-exceeded-quota"
    | "pipeline-error-anyscale-500-server-error"
    | "pipeline-error-anyscale-llm-failed"
    | "pipeline-error-openrouter-400-bad-request-validation-failed"
    | "pipeline-error-openrouter-401-unauthorized"
    | "pipeline-error-openrouter-403-model-access-denied"
    | "pipeline-error-openrouter-429-exceeded-quota"
    | "pipeline-error-openrouter-500-server-error"
    | "pipeline-error-openrouter-llm-failed"
    | "pipeline-error-perplexity-ai-400-bad-request-validation-failed"
    | "pipeline-error-perplexity-ai-401-unauthorized"
    | "pipeline-error-perplexity-ai-403-model-access-denied"
    | "pipeline-error-perplexity-ai-429-exceeded-quota"
    | "pipeline-error-perplexity-ai-500-server-error"
    | "pipeline-error-perplexity-ai-llm-failed"
    | "pipeline-error-deepinfra-400-bad-request-validation-failed"
    | "pipeline-error-deepinfra-401-unauthorized"
    | "pipeline-error-deepinfra-403-model-access-denied"
    | "pipeline-error-deepinfra-429-exceeded-quota"
    | "pipeline-error-deepinfra-500-server-error"
    | "pipeline-error-deepinfra-llm-failed"
    | "pipeline-error-runpod-400-bad-request-validation-failed"
    | "pipeline-error-runpod-401-unauthorized"
    | "pipeline-error-runpod-403-model-access-denied"
    | "pipeline-error-runpod-429-exceeded-quota"
    | "pipeline-error-runpod-500-server-error"
    | "pipeline-error-runpod-llm-failed"
    | "pipeline-error-custom-llm-400-bad-request-validation-failed"
    | "pipeline-error-custom-llm-401-unauthorized"
    | "pipeline-error-custom-llm-403-model-access-denied"
    | "pipeline-error-custom-llm-429-exceeded-quota"
    | "pipeline-error-custom-llm-500-server-error"
    | "pipeline-error-custom-llm-llm-failed"
    | "pipeline-error-custom-voice-failed"
    | "pipeline-error-cartesia-socket-hang-up"
    | "pipeline-error-cartesia-requested-payment"
    | "pipeline-error-cartesia-500-server-error"
    | "pipeline-error-cartesia-503-server-error"
    | "pipeline-error-cartesia-522-server-error"
    | "pipeline-error-eleven-labs-voice-not-found"
    | "pipeline-error-eleven-labs-quota-exceeded"
    | "pipeline-error-eleven-labs-unauthorized-access"
    | "pipeline-error-eleven-labs-unauthorized-to-access-model"
    | "pipeline-error-eleven-labs-professional-voices-only-for-creator-plus"
    | "pipeline-error-eleven-labs-blocked-free-plan-and-requested-upgrade"
    | "pipeline-error-eleven-labs-blocked-concurrent-requests-and-requested-upgrade"
    | "pipeline-error-eleven-labs-blocked-using-instant-voice-clone-and-requested-upgrade"
    | "pipeline-error-eleven-labs-system-busy-and-requested-upgrade"
    | "pipeline-error-eleven-labs-voice-not-fine-tuned"
    | "pipeline-error-eleven-labs-invalid-api-key"
    | "pipeline-error-eleven-labs-invalid-voice-samples"
    | "pipeline-error-eleven-labs-voice-disabled-by-owner"
    | "pipeline-error-eleven-labs-blocked-account-in-probation"
    | "pipeline-error-eleven-labs-blocked-content-against-their-policy"
    | "pipeline-error-eleven-labs-missing-samples-for-voice-clone"
    | "pipeline-error-eleven-labs-voice-not-fine-tuned-and-cannot-be-used"
    | "pipeline-error-eleven-labs-voice-not-allowed-for-free-users"
    | "pipeline-error-eleven-labs-500-server-error"
    | "pipeline-error-eleven-labs-max-character-limit-exceeded"
    | "pipeline-error-eleven-labs-blocked-voice-potentially-against-terms-of-service-and-awaiting-verification"
    | "pipeline-error-playht-request-timed-out"
    | "pipeline-error-playht-invalid-voice"
    | "pipeline-error-playht-unexpected-error"
    | "pipeline-error-playht-out-of-credits"
    | "pipeline-error-playht-invalid-emotion"
    | "pipeline-error-playht-voice-must-be-a-valid-voice-manifest-uri"
    | "pipeline-error-playht-401-unauthorized"
    | "pipeline-error-playht-403-forbidden-out-of-characters"
    | "pipeline-error-playht-403-forbidden-api-access-not-available"
    | "pipeline-error-playht-429-exceeded-quota"
    | "pipeline-error-playht-502-gateway-error"
    | "pipeline-error-playht-504-gateway-error"
    | "pipeline-error-tavus-video-failed"
    | "pipeline-error-custom-transcriber-failed"
    | "pipeline-error-11labs-transcriber-failed"
    | "pipeline-error-deepgram-returning-403-model-access-denied"
    | "pipeline-error-deepgram-returning-401-invalid-credentials"
    | "pipeline-error-deepgram-returning-404-not-found"
    | "pipeline-error-deepgram-returning-400-no-such-model-language-tier-combination"
    | "pipeline-error-deepgram-returning-500-invalid-json"
    | "pipeline-error-deepgram-returning-502-network-error"
    | "pipeline-error-deepgram-returning-502-bad-gateway-ehostunreach"
    | "silence-timed-out"
    | "sip-gateway-failed-to-connect-call"
    | "twilio-failed-to-connect-call"
    | "twilio-reported-customer-misdialed"
    | "vonage-rejected"
    | "voicemail";

export const ServerMessageStatusUpdateEndedReason = {
    AssistantNotValid: "assistant-not-valid",
    AssistantNotProvided: "assistant-not-provided",
    CallStartErrorNeitherAssistantNorServerSet: "call-start-error-neither-assistant-nor-server-set",
    AssistantRequestFailed: "assistant-request-failed",
    AssistantRequestReturnedError: "assistant-request-returned-error",
    AssistantRequestReturnedUnspeakableError: "assistant-request-returned-unspeakable-error",
    AssistantRequestReturnedInvalidAssistant: "assistant-request-returned-invalid-assistant",
    AssistantRequestReturnedNoAssistant: "assistant-request-returned-no-assistant",
    AssistantRequestReturnedForwardingPhoneNumber: "assistant-request-returned-forwarding-phone-number",
    AssistantEndedCall: "assistant-ended-call",
    AssistantSaidEndCallPhrase: "assistant-said-end-call-phrase",
    AssistantEndedCallWithHangupTask: "assistant-ended-call-with-hangup-task",
    AssistantForwardedCall: "assistant-forwarded-call",
    AssistantJoinTimedOut: "assistant-join-timed-out",
    CustomerBusy: "customer-busy",
    CustomerEndedCall: "customer-ended-call",
    CustomerDidNotAnswer: "customer-did-not-answer",
    CustomerDidNotGiveMicrophonePermission: "customer-did-not-give-microphone-permission",
    AssistantSaidMessageWithEndCallEnabled: "assistant-said-message-with-end-call-enabled",
    ExceededMaxDuration: "exceeded-max-duration",
    ManuallyCanceled: "manually-canceled",
    PhoneCallProviderClosedWebsocket: "phone-call-provider-closed-websocket",
    DbError: "db-error",
    AssistantNotFound: "assistant-not-found",
    LicenseCheckFailed: "license-check-failed",
    PipelineErrorOpenaiVoiceFailed: "pipeline-error-openai-voice-failed",
    PipelineErrorCartesiaVoiceFailed: "pipeline-error-cartesia-voice-failed",
    PipelineErrorDeepgramVoiceFailed: "pipeline-error-deepgram-voice-failed",
    PipelineErrorElevenLabsVoiceFailed: "pipeline-error-eleven-labs-voice-failed",
    PipelineErrorPlayhtVoiceFailed: "pipeline-error-playht-voice-failed",
    PipelineErrorLmntVoiceFailed: "pipeline-error-lmnt-voice-failed",
    PipelineErrorAzureVoiceFailed: "pipeline-error-azure-voice-failed",
    PipelineErrorRimeAiVoiceFailed: "pipeline-error-rime-ai-voice-failed",
    PipelineErrorNeetsVoiceFailed: "pipeline-error-neets-voice-failed",
    PipelineErrorSmallestAiVoiceFailed: "pipeline-error-smallest-ai-voice-failed",
    PipelineErrorNeuphonicVoiceFailed: "pipeline-error-neuphonic-voice-failed",
    PipelineErrorHumeVoiceFailed: "pipeline-error-hume-voice-failed",
    PipelineErrorDeepgramTranscriberFailed: "pipeline-error-deepgram-transcriber-failed",
    PipelineErrorGladiaTranscriberFailed: "pipeline-error-gladia-transcriber-failed",
    PipelineErrorSpeechmaticsTranscriberFailed: "pipeline-error-speechmatics-transcriber-failed",
    PipelineErrorAssemblyAiTranscriberFailed: "pipeline-error-assembly-ai-transcriber-failed",
    PipelineErrorTalkscriberTranscriberFailed: "pipeline-error-talkscriber-transcriber-failed",
    PipelineErrorAzureSpeechTranscriberFailed: "pipeline-error-azure-speech-transcriber-failed",
    PipelineErrorVapiLlmFailed: "pipeline-error-vapi-llm-failed",
    PipelineErrorVapi400BadRequestValidationFailed: "pipeline-error-vapi-400-bad-request-validation-failed",
    PipelineErrorVapi401Unauthorized: "pipeline-error-vapi-401-unauthorized",
    PipelineErrorVapi403ModelAccessDenied: "pipeline-error-vapi-403-model-access-denied",
    PipelineErrorVapi429ExceededQuota: "pipeline-error-vapi-429-exceeded-quota",
    PipelineErrorVapi500ServerError: "pipeline-error-vapi-500-server-error",
    PipelineNoAvailableModel: "pipeline-no-available-model",
    WorkerShutdown: "worker-shutdown",
    UnknownError: "unknown-error",
    VonageDisconnected: "vonage-disconnected",
    VonageFailedToConnectCall: "vonage-failed-to-connect-call",
    PhoneCallProviderBypassEnabledButNoCallReceived: "phone-call-provider-bypass-enabled-but-no-call-received",
    VapifaultPhoneCallWorkerSetupSocketError: "vapifault-phone-call-worker-setup-socket-error",
    VapifaultPhoneCallWorkerWorkerSetupSocketTimeout: "vapifault-phone-call-worker-worker-setup-socket-timeout",
    VapifaultPhoneCallWorkerCouldNotFindCall: "vapifault-phone-call-worker-could-not-find-call",
    VapifaultTransportNeverConnected: "vapifault-transport-never-connected",
    VapifaultWebCallWorkerSetupFailed: "vapifault-web-call-worker-setup-failed",
    VapifaultTransportConnectedButCallNotActive: "vapifault-transport-connected-but-call-not-active",
    VapifaultCallStartedButConnectionToTransportMissing: "vapifault-call-started-but-connection-to-transport-missing",
    PipelineErrorOpenaiLlmFailed: "pipeline-error-openai-llm-failed",
    PipelineErrorAzureOpenaiLlmFailed: "pipeline-error-azure-openai-llm-failed",
    PipelineErrorGroqLlmFailed: "pipeline-error-groq-llm-failed",
    PipelineErrorGoogleLlmFailed: "pipeline-error-google-llm-failed",
    PipelineErrorXaiLlmFailed: "pipeline-error-xai-llm-failed",
    PipelineErrorMistralLlmFailed: "pipeline-error-mistral-llm-failed",
    PipelineErrorInflectionAiLlmFailed: "pipeline-error-inflection-ai-llm-failed",
    PipelineErrorCerebrasLlmFailed: "pipeline-error-cerebras-llm-failed",
    PipelineErrorDeepSeekLlmFailed: "pipeline-error-deep-seek-llm-failed",
    PipelineErrorOpenai400BadRequestValidationFailed: "pipeline-error-openai-400-bad-request-validation-failed",
    PipelineErrorOpenai401Unauthorized: "pipeline-error-openai-401-unauthorized",
    PipelineErrorOpenai403ModelAccessDenied: "pipeline-error-openai-403-model-access-denied",
    PipelineErrorOpenai429ExceededQuota: "pipeline-error-openai-429-exceeded-quota",
    PipelineErrorOpenai500ServerError: "pipeline-error-openai-500-server-error",
    PipelineErrorGoogle400BadRequestValidationFailed: "pipeline-error-google-400-bad-request-validation-failed",
    PipelineErrorGoogle401Unauthorized: "pipeline-error-google-401-unauthorized",
    PipelineErrorGoogle403ModelAccessDenied: "pipeline-error-google-403-model-access-denied",
    PipelineErrorGoogle429ExceededQuota: "pipeline-error-google-429-exceeded-quota",
    PipelineErrorGoogle500ServerError: "pipeline-error-google-500-server-error",
    PipelineErrorXai400BadRequestValidationFailed: "pipeline-error-xai-400-bad-request-validation-failed",
    PipelineErrorXai401Unauthorized: "pipeline-error-xai-401-unauthorized",
    PipelineErrorXai403ModelAccessDenied: "pipeline-error-xai-403-model-access-denied",
    PipelineErrorXai429ExceededQuota: "pipeline-error-xai-429-exceeded-quota",
    PipelineErrorXai500ServerError: "pipeline-error-xai-500-server-error",
    PipelineErrorMistral400BadRequestValidationFailed: "pipeline-error-mistral-400-bad-request-validation-failed",
    PipelineErrorMistral401Unauthorized: "pipeline-error-mistral-401-unauthorized",
    PipelineErrorMistral403ModelAccessDenied: "pipeline-error-mistral-403-model-access-denied",
    PipelineErrorMistral429ExceededQuota: "pipeline-error-mistral-429-exceeded-quota",
    PipelineErrorMistral500ServerError: "pipeline-error-mistral-500-server-error",
    PipelineErrorInflectionAi400BadRequestValidationFailed:
        "pipeline-error-inflection-ai-400-bad-request-validation-failed",
    PipelineErrorInflectionAi401Unauthorized: "pipeline-error-inflection-ai-401-unauthorized",
    PipelineErrorInflectionAi403ModelAccessDenied: "pipeline-error-inflection-ai-403-model-access-denied",
    PipelineErrorInflectionAi429ExceededQuota: "pipeline-error-inflection-ai-429-exceeded-quota",
    PipelineErrorInflectionAi500ServerError: "pipeline-error-inflection-ai-500-server-error",
    PipelineErrorDeepSeek400BadRequestValidationFailed: "pipeline-error-deep-seek-400-bad-request-validation-failed",
    PipelineErrorDeepSeek401Unauthorized: "pipeline-error-deep-seek-401-unauthorized",
    PipelineErrorDeepSeek403ModelAccessDenied: "pipeline-error-deep-seek-403-model-access-denied",
    PipelineErrorDeepSeek429ExceededQuota: "pipeline-error-deep-seek-429-exceeded-quota",
    PipelineErrorDeepSeek500ServerError: "pipeline-error-deep-seek-500-server-error",
    PipelineErrorAzureOpenai400BadRequestValidationFailed:
        "pipeline-error-azure-openai-400-bad-request-validation-failed",
    PipelineErrorAzureOpenai401Unauthorized: "pipeline-error-azure-openai-401-unauthorized",
    PipelineErrorAzureOpenai403ModelAccessDenied: "pipeline-error-azure-openai-403-model-access-denied",
    PipelineErrorAzureOpenai429ExceededQuota: "pipeline-error-azure-openai-429-exceeded-quota",
    PipelineErrorAzureOpenai500ServerError: "pipeline-error-azure-openai-500-server-error",
    PipelineErrorGroq400BadRequestValidationFailed: "pipeline-error-groq-400-bad-request-validation-failed",
    PipelineErrorGroq401Unauthorized: "pipeline-error-groq-401-unauthorized",
    PipelineErrorGroq403ModelAccessDenied: "pipeline-error-groq-403-model-access-denied",
    PipelineErrorGroq429ExceededQuota: "pipeline-error-groq-429-exceeded-quota",
    PipelineErrorGroq500ServerError: "pipeline-error-groq-500-server-error",
    PipelineErrorCerebras400BadRequestValidationFailed: "pipeline-error-cerebras-400-bad-request-validation-failed",
    PipelineErrorCerebras401Unauthorized: "pipeline-error-cerebras-401-unauthorized",
    PipelineErrorCerebras403ModelAccessDenied: "pipeline-error-cerebras-403-model-access-denied",
    PipelineErrorCerebras429ExceededQuota: "pipeline-error-cerebras-429-exceeded-quota",
    PipelineErrorCerebras500ServerError: "pipeline-error-cerebras-500-server-error",
    PipelineErrorAnthropic400BadRequestValidationFailed: "pipeline-error-anthropic-400-bad-request-validation-failed",
    PipelineErrorAnthropic401Unauthorized: "pipeline-error-anthropic-401-unauthorized",
    PipelineErrorAnthropic403ModelAccessDenied: "pipeline-error-anthropic-403-model-access-denied",
    PipelineErrorAnthropic429ExceededQuota: "pipeline-error-anthropic-429-exceeded-quota",
    PipelineErrorAnthropic500ServerError: "pipeline-error-anthropic-500-server-error",
    PipelineErrorAnthropicLlmFailed: "pipeline-error-anthropic-llm-failed",
    PipelineErrorTogetherAi400BadRequestValidationFailed:
        "pipeline-error-together-ai-400-bad-request-validation-failed",
    PipelineErrorTogetherAi401Unauthorized: "pipeline-error-together-ai-401-unauthorized",
    PipelineErrorTogetherAi403ModelAccessDenied: "pipeline-error-together-ai-403-model-access-denied",
    PipelineErrorTogetherAi429ExceededQuota: "pipeline-error-together-ai-429-exceeded-quota",
    PipelineErrorTogetherAi500ServerError: "pipeline-error-together-ai-500-server-error",
    PipelineErrorTogetherAiLlmFailed: "pipeline-error-together-ai-llm-failed",
    PipelineErrorAnyscale400BadRequestValidationFailed: "pipeline-error-anyscale-400-bad-request-validation-failed",
    PipelineErrorAnyscale401Unauthorized: "pipeline-error-anyscale-401-unauthorized",
    PipelineErrorAnyscale403ModelAccessDenied: "pipeline-error-anyscale-403-model-access-denied",
    PipelineErrorAnyscale429ExceededQuota: "pipeline-error-anyscale-429-exceeded-quota",
    PipelineErrorAnyscale500ServerError: "pipeline-error-anyscale-500-server-error",
    PipelineErrorAnyscaleLlmFailed: "pipeline-error-anyscale-llm-failed",
    PipelineErrorOpenrouter400BadRequestValidationFailed: "pipeline-error-openrouter-400-bad-request-validation-failed",
    PipelineErrorOpenrouter401Unauthorized: "pipeline-error-openrouter-401-unauthorized",
    PipelineErrorOpenrouter403ModelAccessDenied: "pipeline-error-openrouter-403-model-access-denied",
    PipelineErrorOpenrouter429ExceededQuota: "pipeline-error-openrouter-429-exceeded-quota",
    PipelineErrorOpenrouter500ServerError: "pipeline-error-openrouter-500-server-error",
    PipelineErrorOpenrouterLlmFailed: "pipeline-error-openrouter-llm-failed",
    PipelineErrorPerplexityAi400BadRequestValidationFailed:
        "pipeline-error-perplexity-ai-400-bad-request-validation-failed",
    PipelineErrorPerplexityAi401Unauthorized: "pipeline-error-perplexity-ai-401-unauthorized",
    PipelineErrorPerplexityAi403ModelAccessDenied: "pipeline-error-perplexity-ai-403-model-access-denied",
    PipelineErrorPerplexityAi429ExceededQuota: "pipeline-error-perplexity-ai-429-exceeded-quota",
    PipelineErrorPerplexityAi500ServerError: "pipeline-error-perplexity-ai-500-server-error",
    PipelineErrorPerplexityAiLlmFailed: "pipeline-error-perplexity-ai-llm-failed",
    PipelineErrorDeepinfra400BadRequestValidationFailed: "pipeline-error-deepinfra-400-bad-request-validation-failed",
    PipelineErrorDeepinfra401Unauthorized: "pipeline-error-deepinfra-401-unauthorized",
    PipelineErrorDeepinfra403ModelAccessDenied: "pipeline-error-deepinfra-403-model-access-denied",
    PipelineErrorDeepinfra429ExceededQuota: "pipeline-error-deepinfra-429-exceeded-quota",
    PipelineErrorDeepinfra500ServerError: "pipeline-error-deepinfra-500-server-error",
    PipelineErrorDeepinfraLlmFailed: "pipeline-error-deepinfra-llm-failed",
    PipelineErrorRunpod400BadRequestValidationFailed: "pipeline-error-runpod-400-bad-request-validation-failed",
    PipelineErrorRunpod401Unauthorized: "pipeline-error-runpod-401-unauthorized",
    PipelineErrorRunpod403ModelAccessDenied: "pipeline-error-runpod-403-model-access-denied",
    PipelineErrorRunpod429ExceededQuota: "pipeline-error-runpod-429-exceeded-quota",
    PipelineErrorRunpod500ServerError: "pipeline-error-runpod-500-server-error",
    PipelineErrorRunpodLlmFailed: "pipeline-error-runpod-llm-failed",
    PipelineErrorCustomLlm400BadRequestValidationFailed: "pipeline-error-custom-llm-400-bad-request-validation-failed",
    PipelineErrorCustomLlm401Unauthorized: "pipeline-error-custom-llm-401-unauthorized",
    PipelineErrorCustomLlm403ModelAccessDenied: "pipeline-error-custom-llm-403-model-access-denied",
    PipelineErrorCustomLlm429ExceededQuota: "pipeline-error-custom-llm-429-exceeded-quota",
    PipelineErrorCustomLlm500ServerError: "pipeline-error-custom-llm-500-server-error",
    PipelineErrorCustomLlmLlmFailed: "pipeline-error-custom-llm-llm-failed",
    PipelineErrorCustomVoiceFailed: "pipeline-error-custom-voice-failed",
    PipelineErrorCartesiaSocketHangUp: "pipeline-error-cartesia-socket-hang-up",
    PipelineErrorCartesiaRequestedPayment: "pipeline-error-cartesia-requested-payment",
    PipelineErrorCartesia500ServerError: "pipeline-error-cartesia-500-server-error",
    PipelineErrorCartesia503ServerError: "pipeline-error-cartesia-503-server-error",
    PipelineErrorCartesia522ServerError: "pipeline-error-cartesia-522-server-error",
    PipelineErrorElevenLabsVoiceNotFound: "pipeline-error-eleven-labs-voice-not-found",
    PipelineErrorElevenLabsQuotaExceeded: "pipeline-error-eleven-labs-quota-exceeded",
    PipelineErrorElevenLabsUnauthorizedAccess: "pipeline-error-eleven-labs-unauthorized-access",
    PipelineErrorElevenLabsUnauthorizedToAccessModel: "pipeline-error-eleven-labs-unauthorized-to-access-model",
    PipelineErrorElevenLabsProfessionalVoicesOnlyForCreatorPlus:
        "pipeline-error-eleven-labs-professional-voices-only-for-creator-plus",
    PipelineErrorElevenLabsBlockedFreePlanAndRequestedUpgrade:
        "pipeline-error-eleven-labs-blocked-free-plan-and-requested-upgrade",
    PipelineErrorElevenLabsBlockedConcurrentRequestsAndRequestedUpgrade:
        "pipeline-error-eleven-labs-blocked-concurrent-requests-and-requested-upgrade",
    PipelineErrorElevenLabsBlockedUsingInstantVoiceCloneAndRequestedUpgrade:
        "pipeline-error-eleven-labs-blocked-using-instant-voice-clone-and-requested-upgrade",
    PipelineErrorElevenLabsSystemBusyAndRequestedUpgrade:
        "pipeline-error-eleven-labs-system-busy-and-requested-upgrade",
    PipelineErrorElevenLabsVoiceNotFineTuned: "pipeline-error-eleven-labs-voice-not-fine-tuned",
    PipelineErrorElevenLabsInvalidApiKey: "pipeline-error-eleven-labs-invalid-api-key",
    PipelineErrorElevenLabsInvalidVoiceSamples: "pipeline-error-eleven-labs-invalid-voice-samples",
    PipelineErrorElevenLabsVoiceDisabledByOwner: "pipeline-error-eleven-labs-voice-disabled-by-owner",
    PipelineErrorElevenLabsBlockedAccountInProbation: "pipeline-error-eleven-labs-blocked-account-in-probation",
    PipelineErrorElevenLabsBlockedContentAgainstTheirPolicy:
        "pipeline-error-eleven-labs-blocked-content-against-their-policy",
    PipelineErrorElevenLabsMissingSamplesForVoiceClone: "pipeline-error-eleven-labs-missing-samples-for-voice-clone",
    PipelineErrorElevenLabsVoiceNotFineTunedAndCannotBeUsed:
        "pipeline-error-eleven-labs-voice-not-fine-tuned-and-cannot-be-used",
    PipelineErrorElevenLabsVoiceNotAllowedForFreeUsers: "pipeline-error-eleven-labs-voice-not-allowed-for-free-users",
    PipelineErrorElevenLabs500ServerError: "pipeline-error-eleven-labs-500-server-error",
    PipelineErrorElevenLabsMaxCharacterLimitExceeded: "pipeline-error-eleven-labs-max-character-limit-exceeded",
    PipelineErrorElevenLabsBlockedVoicePotentiallyAgainstTermsOfServiceAndAwaitingVerification:
        "pipeline-error-eleven-labs-blocked-voice-potentially-against-terms-of-service-and-awaiting-verification",
    PipelineErrorPlayhtRequestTimedOut: "pipeline-error-playht-request-timed-out",
    PipelineErrorPlayhtInvalidVoice: "pipeline-error-playht-invalid-voice",
    PipelineErrorPlayhtUnexpectedError: "pipeline-error-playht-unexpected-error",
    PipelineErrorPlayhtOutOfCredits: "pipeline-error-playht-out-of-credits",
    PipelineErrorPlayhtInvalidEmotion: "pipeline-error-playht-invalid-emotion",
    PipelineErrorPlayhtVoiceMustBeAValidVoiceManifestUri:
        "pipeline-error-playht-voice-must-be-a-valid-voice-manifest-uri",
    PipelineErrorPlayht401Unauthorized: "pipeline-error-playht-401-unauthorized",
    PipelineErrorPlayht403ForbiddenOutOfCharacters: "pipeline-error-playht-403-forbidden-out-of-characters",
    PipelineErrorPlayht403ForbiddenApiAccessNotAvailable:
        "pipeline-error-playht-403-forbidden-api-access-not-available",
    PipelineErrorPlayht429ExceededQuota: "pipeline-error-playht-429-exceeded-quota",
    PipelineErrorPlayht502GatewayError: "pipeline-error-playht-502-gateway-error",
    PipelineErrorPlayht504GatewayError: "pipeline-error-playht-504-gateway-error",
    PipelineErrorTavusVideoFailed: "pipeline-error-tavus-video-failed",
    PipelineErrorCustomTranscriberFailed: "pipeline-error-custom-transcriber-failed",
    PipelineError11LabsTranscriberFailed: "pipeline-error-11labs-transcriber-failed",
    PipelineErrorDeepgramReturning403ModelAccessDenied: "pipeline-error-deepgram-returning-403-model-access-denied",
    PipelineErrorDeepgramReturning401InvalidCredentials: "pipeline-error-deepgram-returning-401-invalid-credentials",
    PipelineErrorDeepgramReturning404NotFound: "pipeline-error-deepgram-returning-404-not-found",
    PipelineErrorDeepgramReturning400NoSuchModelLanguageTierCombination:
        "pipeline-error-deepgram-returning-400-no-such-model-language-tier-combination",
    PipelineErrorDeepgramReturning500InvalidJson: "pipeline-error-deepgram-returning-500-invalid-json",
    PipelineErrorDeepgramReturning502NetworkError: "pipeline-error-deepgram-returning-502-network-error",
    PipelineErrorDeepgramReturning502BadGatewayEhostunreach:
        "pipeline-error-deepgram-returning-502-bad-gateway-ehostunreach",
    SilenceTimedOut: "silence-timed-out",
    SipGatewayFailedToConnectCall: "sip-gateway-failed-to-connect-call",
    TwilioFailedToConnectCall: "twilio-failed-to-connect-call",
    TwilioReportedCustomerMisdialed: "twilio-reported-customer-misdialed",
    VonageRejected: "vonage-rejected",
    Voicemail: "voicemail",
} as const;
