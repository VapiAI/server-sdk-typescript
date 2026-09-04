# Reference
## Assistants
<details><summary><code>client.assistants.<a href="/src/api/resources/assistants/client/Client.ts">list</a>({ ...params }) -> Vapi.Assistant[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns assistants for the authenticated organization. Filter results by creation or update timestamps and limit the number returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistants.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ListAssistantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssistantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assistants.<a href="/src/api/resources/assistants/client/Client.ts">create</a>({ ...params }) -> Vapi.Assistant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a reusable assistant configuration containing the model, voice, transcriber, tools, prompts, and call behavior.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistants.create({});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateAssistantDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssistantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assistants.<a href="/src/api/resources/assistants/client/Client.ts">assistantControllerValidateBackgroundSoundUrl</a>({ ...params }) -> Vapi.BackgroundSoundUrlValidationResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistants.assistantControllerValidateBackgroundSoundUrl({
    url: "https://example.com/my-sound.mp3"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ValidateBackgroundSoundUrlDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssistantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assistants.<a href="/src/api/resources/assistants/client/Client.ts">get</a>({ ...params }) -> Vapi.Assistant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the assistant identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistants.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.GetAssistantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssistantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assistants.<a href="/src/api/resources/assistants/client/Client.ts">delete</a>({ ...params }) -> Vapi.Assistant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the assistant identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistants.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.DeleteAssistantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssistantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assistants.<a href="/src/api/resources/assistants/client/Client.ts">update</a>({ ...params }) -> Vapi.Assistant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the specified fields of the assistant identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistants.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateAssistantDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssistantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Squads
<details><summary><code>client.squads.<a href="/src/api/resources/squads/client/Client.ts">list</a>({ ...params }) -> Vapi.Squad[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns squads for the authenticated organization. Filter results by creation or update timestamps and limit the number returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.squads.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ListSquadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SquadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.squads.<a href="/src/api/resources/squads/client/Client.ts">create</a>({ ...params }) -> Vapi.Squad</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a squad that coordinates multiple assistants and their handoffs during a conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.squads.create({
    members: [{}]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateSquadDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SquadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.squads.<a href="/src/api/resources/squads/client/Client.ts">get</a>({ ...params }) -> Vapi.Squad</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the squad identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.squads.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.GetSquadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SquadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.squads.<a href="/src/api/resources/squads/client/Client.ts">delete</a>({ ...params }) -> Vapi.Squad</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the squad identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.squads.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.DeleteSquadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SquadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.squads.<a href="/src/api/resources/squads/client/Client.ts">update</a>({ ...params }) -> Vapi.Squad</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the specified fields of the squad identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.squads.update({
    id: "id",
    members: [{}]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateSquadDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SquadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Calls
<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">list</a>({ ...params }) -> Vapi.Call[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns calls for the authenticated organization. Filter results by call ID, assistant ID, phone number ID, or creation and update timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ListCallsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">create</a>({ ...params }) -> Vapi.CreateCallsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a call using an assistant or squad. The request can reference saved resources or include transient configurations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateCallDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">get</a>({ ...params }) -> Vapi.Call</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the call identified by its ID, including its status, configuration, and available call data.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.GetCallsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">delete</a>({ ...params }) -> Vapi.Call</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the call identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.DeleteCallDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">update</a>({ ...params }) -> Vapi.Call</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the call identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateCallDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">callArtifactControllerMonoRecordingDownload</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.callArtifactControllerMonoRecordingDownload({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CallArtifactControllerMonoRecordingDownloadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">callArtifactControllerStereoRecordingDownload</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.callArtifactControllerStereoRecordingDownload({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CallArtifactControllerStereoRecordingDownloadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">callArtifactControllerVideoRecordingDownload</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.callArtifactControllerVideoRecordingDownload({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CallArtifactControllerVideoRecordingDownloadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">callArtifactControllerCustomerRecordingDownload</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.callArtifactControllerCustomerRecordingDownload({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CallArtifactControllerCustomerRecordingDownloadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">callArtifactControllerAssistantRecordingDownload</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.callArtifactControllerAssistantRecordingDownload({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CallArtifactControllerAssistantRecordingDownloadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">callArtifactControllerPcapDownload</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.callArtifactControllerPcapDownload({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CallArtifactControllerPcapDownloadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">callArtifactControllerCallLogsDownload</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.callArtifactControllerCallLogsDownload({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CallArtifactControllerCallLogsDownloadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Chats
<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">list</a>({ ...params }) -> Vapi.ChatPaginatedResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.list({
    assistantIdAny: "assistant-1,assistant-2,assistant-3"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ListChatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">create</a>({ ...params }) -> Vapi.CreateChatsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new chat with optional SMS delivery via transport field. Requires at least one of: assistantId/assistant, sessionId, or previousChatId. Note: sessionId and previousChatId are mutually exclusive. Transport field enables SMS delivery with two modes: (1) New conversation - provide transport.phoneNumberId and transport.customer to create a new session, (2) Existing conversation - provide sessionId to use existing session data. Cannot specify both sessionId and transport fields together. The transport.useLLMGeneratedMessageForOutbound flag controls whether input is processed by LLM (true, default) or forwarded directly as SMS (false).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.create({
    input: "input"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateChatDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">get</a>({ ...params }) -> Vapi.Chat</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.GetChatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">delete</a>({ ...params }) -> Vapi.Chat</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.DeleteChatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">createResponse</a>({ ...params }) -> Vapi.CreateResponseChatsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.createResponse({
    input: "input"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.OpenAiResponsesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Campaigns
<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerFindAll</a>({ ...params }) -> Vapi.CampaignPaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns outbound calling campaigns for the authenticated organization. Filter results by campaign ID, status, or creation and update timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerFindAll();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CampaignControllerFindAllRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerCreate</a>({ ...params }) -> Vapi.Campaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an outbound calling campaign that calls a set of customers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerCreate({
    name: "Q2 Sales Campaign"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateCampaignDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerFindAllV2</a>({ ...params }) -> Vapi.CampaignSummaryPaginatedResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerFindAllV2();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CampaignControllerFindAllV2Request` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerCreateV2</a>({ ...params }) -> Vapi.Campaign</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerCreateV2({
    name: "Q2 Sales Campaign"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateCampaignDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerFindOneV2</a>({ ...params }) -> Vapi.CampaignSummary</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerFindOneV2({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CampaignControllerFindOneV2Request` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerRemoveV2</a>({ ...params }) -> Vapi.Campaign</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerRemoveV2({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CampaignControllerRemoveV2Request` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerUpdateV2</a>({ ...params }) -> Vapi.Campaign</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerUpdateV2({
    id: "id",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CampaignControllerUpdateV2Request` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerFindOne</a>({ ...params }) -> Vapi.Campaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the outbound calling campaign identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerFindOne({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CampaignControllerFindOneRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerRemove</a>({ ...params }) -> Vapi.Campaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the outbound calling campaign identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CampaignControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerUpdate</a>({ ...params }) -> Vapi.Campaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the outbound calling campaign identified by its ID. Campaigns can be ended by updating their status to `ended`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerUpdate({
    id: "id",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CampaignControllerUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerGetCampaignV2Contacts</a>({ ...params }) -> Vapi.CampaignContactPaginatedResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerGetCampaignV2Contacts({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CampaignControllerGetCampaignV2ContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sessions
<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">list</a>({ ...params }) -> Vapi.SessionPaginatedResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.list({
    assistantIdAny: "assistant-1,assistant-2,assistant-3",
    customerNumberAny: "+1234567890,+0987654321"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ListSessionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SessionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">create</a>({ ...params }) -> Vapi.Session</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateSessionDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SessionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">get</a>({ ...params }) -> Vapi.Session</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.GetSessionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SessionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">delete</a>({ ...params }) -> Vapi.Session</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.DeleteSessionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SessionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">update</a>({ ...params }) -> Vapi.Session</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateSessionDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SessionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PhoneNumbers
<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">list</a>({ ...params }) -> Vapi.ListPhoneNumbersResponseItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns phone numbers for the authenticated organization. Filter results by creation or update timestamps and limit the number returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ListPhoneNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">create</a>({ ...params }) -> Vapi.CreatePhoneNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Vapi phone number or imports a phone number from a supported provider, including Twilio, Vonage, Telnyx, or a bring-your-own provider.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.create({
    provider: "byo-phone-number",
    credentialId: "credentialId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreatePhoneNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">phoneNumberControllerFindAllPaginated</a>({ ...params }) -> Vapi.PhoneNumberPaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of phone numbers for the authenticated organization. Search by name, number, or SIP URI using a partial, case-insensitive match, and filter by creation or update timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.phoneNumberControllerFindAllPaginated();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.PhoneNumberControllerFindAllPaginatedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">get</a>({ ...params }) -> Vapi.GetPhoneNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the phone number resource identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.GetPhoneNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">delete</a>({ ...params }) -> Vapi.DeletePhoneNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the phone number resource identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.DeletePhoneNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">update</a>({ ...params }) -> Vapi.UpdatePhoneNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the specified fields of the phone number resource identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.update({
    id: "id",
    body: {
        provider: "byo-phone-number"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdatePhoneNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tools
<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">list</a>({ ...params }) -> Vapi.ListToolsResponseItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns reusable tools for the authenticated organization. Filter results by creation or update timestamps and limit the number returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ListToolsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ToolsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">create</a>({ ...params }) -> Vapi.CreateToolsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a reusable tool that assistants can invoke during conversations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.create({
    type: "apiRequest",
    method: "POST",
    url: "url"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateToolsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ToolsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">get</a>({ ...params }) -> Vapi.GetToolsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the tool identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.GetToolsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ToolsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">delete</a>({ ...params }) -> Vapi.DeleteToolsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the tool identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.DeleteToolsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ToolsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">update</a>({ ...params }) -> Vapi.UpdateToolsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the specified fields of the tool identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.update({
    id: "id",
    body: {
        type: "apiRequest"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateToolsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ToolsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Files
<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">list</a>({ ...params }) -> Vapi.File_[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns files uploaded to the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.list({
    purpose: "purpose"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ListFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">create</a>({ ...params }) -> Vapi.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads a file for use with a Vapi knowledge base.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.create({
    file: fs.createReadStream("/path/to/your/file")
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateFileDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">get</a>({ ...params }) -> Vapi.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the uploaded file identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.GetFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">delete</a>({ ...params }) -> Vapi.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the uploaded file identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.DeleteFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">update</a>({ ...params }) -> Vapi.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the name of the uploaded file identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateFileDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## KnowledgeBasesV2
<details><summary><code>client.knowledgeBasesV2.<a href="/src/api/resources/knowledgeBasesV2/client/Client.ts">knowledgeBaseV2ControllerFindAll</a>({ ...params }) -> Vapi.KnowledgeBaseV2[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledgeBasesV2.knowledgeBaseV2ControllerFindAll();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.KnowledgeBaseV2ControllerFindAllRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBasesV2Client.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledgeBasesV2.<a href="/src/api/resources/knowledgeBasesV2/client/Client.ts">knowledgeBaseV2ControllerCreate</a>({ ...params }) -> Vapi.KnowledgeBaseV2</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledgeBasesV2.knowledgeBaseV2ControllerCreate({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateKnowledgeBaseV2Dto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBasesV2Client.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledgeBasesV2.<a href="/src/api/resources/knowledgeBasesV2/client/Client.ts">knowledgeBaseV2ControllerFilesGet</a>({ ...params }) -> Vapi.KnowledgeBaseV2File[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledgeBasesV2.knowledgeBaseV2ControllerFilesGet({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.KnowledgeBaseV2ControllerFilesGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBasesV2Client.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledgeBasesV2.<a href="/src/api/resources/knowledgeBasesV2/client/Client.ts">knowledgeBaseV2ControllerFileAttach</a>({ ...params }) -> Vapi.KnowledgeBaseV2File</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledgeBasesV2.knowledgeBaseV2ControllerFileAttach({
    id: "id",
    fileId: "fileId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.AttachKnowledgeBaseV2FileDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBasesV2Client.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledgeBasesV2.<a href="/src/api/resources/knowledgeBasesV2/client/Client.ts">knowledgeBaseV2ControllerFileDetach</a>({ ...params }) -> Vapi.KnowledgeBaseV2File</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledgeBasesV2.knowledgeBaseV2ControllerFileDetach({
    id: "id",
    fileId: "fileId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.KnowledgeBaseV2ControllerFileDetachRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBasesV2Client.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledgeBasesV2.<a href="/src/api/resources/knowledgeBasesV2/client/Client.ts">knowledgeBaseV2ControllerFileRetry</a>({ ...params }) -> Vapi.KnowledgeBaseV2File</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledgeBasesV2.knowledgeBaseV2ControllerFileRetry({
    id: "id",
    fileId: "fileId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.KnowledgeBaseV2ControllerFileRetryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBasesV2Client.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledgeBasesV2.<a href="/src/api/resources/knowledgeBasesV2/client/Client.ts">knowledgeBaseV2ControllerFindOne</a>({ ...params }) -> Vapi.KnowledgeBaseV2WithFiles</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledgeBasesV2.knowledgeBaseV2ControllerFindOne({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.KnowledgeBaseV2ControllerFindOneRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBasesV2Client.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledgeBasesV2.<a href="/src/api/resources/knowledgeBasesV2/client/Client.ts">knowledgeBaseV2ControllerRemove</a>({ ...params }) -> Vapi.KnowledgeBaseV2</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledgeBasesV2.knowledgeBaseV2ControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.KnowledgeBaseV2ControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBasesV2Client.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledgeBasesV2.<a href="/src/api/resources/knowledgeBasesV2/client/Client.ts">knowledgeBaseV2ControllerUpdate</a>({ ...params }) -> Vapi.KnowledgeBaseV2</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledgeBasesV2.knowledgeBaseV2ControllerUpdate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateKnowledgeBaseV2Dto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBasesV2Client.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## StructuredOutputs
<details><summary><code>client.structuredOutputs.<a href="/src/api/resources/structuredOutputs/client/Client.ts">structuredOutputControllerFindAll</a>({ ...params }) -> Vapi.StructuredOutputPaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns structured-output definitions for the authenticated organization. Filter results by ID, name, or creation and update timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerFindAll();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.StructuredOutputControllerFindAllRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StructuredOutputsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.structuredOutputs.<a href="/src/api/resources/structuredOutputs/client/Client.ts">structuredOutputControllerCreate</a>({ ...params }) -> Vapi.StructuredOutput</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a reusable definition for extracting validated data from conversations using an AI model or regular expression.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerCreate({
    name: "name",
    schema: {
        type: "string"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateStructuredOutputDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StructuredOutputsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.structuredOutputs.<a href="/src/api/resources/structuredOutputs/client/Client.ts">structuredOutputControllerFindOne</a>({ ...params }) -> Vapi.StructuredOutput</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the structured-output definition identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerFindOne({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.StructuredOutputControllerFindOneRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StructuredOutputsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.structuredOutputs.<a href="/src/api/resources/structuredOutputs/client/Client.ts">structuredOutputControllerRemove</a>({ ...params }) -> Vapi.StructuredOutput</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the structured-output definition identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.StructuredOutputControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StructuredOutputsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.structuredOutputs.<a href="/src/api/resources/structuredOutputs/client/Client.ts">structuredOutputControllerUpdate</a>({ ...params }) -> Vapi.StructuredOutput</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the structured-output definition identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerUpdate({
    id: "id",
    schemaOverride: "schemaOverride"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateStructuredOutputDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StructuredOutputsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.structuredOutputs.<a href="/src/api/resources/structuredOutputs/client/Client.ts">structuredOutputControllerRun</a>({ ...params }) -> Vapi.StructuredOutputControllerRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Runs a saved or transient structured-output definition against one or more calls, optionally returning a preview without updating call artifacts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerRun({
    callIds: ["callIds"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.StructuredOutputRunDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StructuredOutputsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SimulationPersonalities
<details><summary><code>client.simulationPersonalities.<a href="/src/api/resources/simulationPersonalities/client/Client.ts">personalityControllerFindAll</a>({ ...params }) -> Vapi.Personality[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the personalities for the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationPersonalities.personalityControllerFindAll();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.PersonalityControllerFindAllRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationPersonalitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationPersonalities.<a href="/src/api/resources/simulationPersonalities/client/Client.ts">personalityControllerCreate</a>({ ...params }) -> Vapi.Personality</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a personality, the AI tester's configuration used in simulations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationPersonalities.personalityControllerCreate({
    name: "name",
    assistant: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreatePersonalityDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationPersonalitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationPersonalities.<a href="/src/api/resources/simulationPersonalities/client/Client.ts">personalityControllerFindOne</a>({ ...params }) -> Vapi.Personality</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the specified personality.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationPersonalities.personalityControllerFindOne({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.PersonalityControllerFindOneRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationPersonalitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationPersonalities.<a href="/src/api/resources/simulationPersonalities/client/Client.ts">personalityControllerRemove</a>({ ...params }) -> Vapi.Personality</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the specified personality.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationPersonalities.personalityControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.PersonalityControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationPersonalitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationPersonalities.<a href="/src/api/resources/simulationPersonalities/client/Client.ts">personalityControllerUpdate</a>({ ...params }) -> Vapi.Personality</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the specified personality. Changes apply to future runs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationPersonalities.personalityControllerUpdate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdatePersonalityDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationPersonalitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SimulationScenarios
<details><summary><code>client.simulationScenarios.<a href="/src/api/resources/simulationScenarios/client/Client.ts">scenarioControllerFindAll</a>({ ...params }) -> Vapi.Scenario[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the scenarios for the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationScenarios.scenarioControllerFindAll();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ScenarioControllerFindAllRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationScenariosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationScenarios.<a href="/src/api/resources/simulationScenarios/client/Client.ts">scenarioControllerCreate</a>({ ...params }) -> Vapi.Scenario</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a scenario, the AI tester's intent plus the success criteria that score a run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationScenarios.scenarioControllerCreate({
    name: "Health Enrollment - Eligible Path",
    instructions: "You are calling to enroll in the Twin Health program. Confirm your identity when asked.",
    evaluations: [{
            comparator: "=",
            value: 1.1
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateScenarioDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationScenariosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationScenarios.<a href="/src/api/resources/simulationScenarios/client/Client.ts">scenarioControllerFindOne</a>({ ...params }) -> Vapi.Scenario</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the specified scenario.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationScenarios.scenarioControllerFindOne({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ScenarioControllerFindOneRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationScenariosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationScenarios.<a href="/src/api/resources/simulationScenarios/client/Client.ts">scenarioControllerRemove</a>({ ...params }) -> Vapi.Scenario</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the specified scenario.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationScenarios.scenarioControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ScenarioControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationScenariosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationScenarios.<a href="/src/api/resources/simulationScenarios/client/Client.ts">scenarioControllerUpdate</a>({ ...params }) -> Vapi.Scenario</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the specified scenario.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationScenarios.scenarioControllerUpdate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateScenarioDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationScenariosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SimulationRuns
<details><summary><code>client.simulationRuns.<a href="/src/api/resources/simulationRuns/client/Client.ts">simulationRunControllerFindAll</a>({ ...params }) -> Vapi.SimulationRunControllerFindAllResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the simulation runs for the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationRuns.simulationRunControllerFindAll();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationRunControllerFindAllRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationRuns.<a href="/src/api/resources/simulationRuns/client/Client.ts">simulationRunControllerCreate</a>({ ...params }) -> Vapi.CreateSimulationRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts a simulation run against a target assistant or squad.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationRuns.simulationRunControllerCreate({
    simulations: [{
            type: "simulation"
        }],
    target: {
        type: "assistant"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateSimulationRunDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationRuns.<a href="/src/api/resources/simulationRuns/client/Client.ts">simulationRunControllerFindOne</a>({ ...params }) -> Vapi.SimulationRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the specified simulation run, including its status and item counts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationRuns.simulationRunControllerFindOne({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationRunControllerFindOneRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationRuns.<a href="/src/api/resources/simulationRuns/client/Client.ts">simulationRunControllerCancelGroup</a>({ ...params }) -> Vapi.SimulationRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels the specified simulation run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationRuns.simulationRunControllerCancelGroup({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationRunControllerCancelGroupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationRuns.<a href="/src/api/resources/simulationRuns/client/Client.ts">simulationRunControllerFindItems</a>({ ...params }) -> Vapi.SimulationRunItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the run items for the specified simulation run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationRuns.simulationRunControllerFindItems({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationRunControllerFindItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationRuns.<a href="/src/api/resources/simulationRuns/client/Client.ts">simulationRunControllerFindItem</a>({ ...params }) -> Vapi.SimulationRunItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the specified run item, including its evaluation results and the ID of the call that ran it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationRuns.simulationRunControllerFindItem({
    id: "id",
    itemId: "itemId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationRunControllerFindItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationRuns.<a href="/src/api/resources/simulationRuns/client/Client.ts">simulationRunControllerCancelItem</a>({ ...params }) -> Vapi.SimulationRunItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels the specified run item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationRuns.simulationRunControllerCancelItem({
    id: "id",
    itemId: "itemId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationRunControllerCancelItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationRuns.<a href="/src/api/resources/simulationRuns/client/Client.ts">simulationRunControllerGenerateSuggestions</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates AI suggestions for improving the assistant or squad's system prompt, tools, and scenarios, based on the specified run item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationRuns.simulationRunControllerGenerateSuggestions({
    id: "id",
    itemId: "itemId",
    force: "force"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationRunControllerGenerateSuggestionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SimulationSuites
<details><summary><code>client.simulationSuites.<a href="/src/api/resources/simulationSuites/client/Client.ts">simulationSuiteControllerFindAll</a>({ ...params }) -> Vapi.SimulationSuite[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the simulation suites for the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationSuites.simulationSuiteControllerFindAll();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationSuiteControllerFindAllRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationSuitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationSuites.<a href="/src/api/resources/simulationSuites/client/Client.ts">simulationSuiteControllerCreate</a>({ ...params }) -> Vapi.SimulationSuite</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a simulation suite, a group of simulations that run together.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationSuites.simulationSuiteControllerCreate({
    name: "Checkout Flow Tests",
    simulationIds: ["simulationIds"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateSimulationSuiteDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationSuitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationSuites.<a href="/src/api/resources/simulationSuites/client/Client.ts">simulationSuiteControllerDuplicate</a>({ ...params }) -> Vapi.SimulationSuite</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationSuites.simulationSuiteControllerDuplicate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationSuiteControllerDuplicateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationSuitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationSuites.<a href="/src/api/resources/simulationSuites/client/Client.ts">simulationSuiteControllerFindOne</a>({ ...params }) -> Vapi.SimulationSuite</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the specified simulation suite.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationSuites.simulationSuiteControllerFindOne({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationSuiteControllerFindOneRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationSuitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationSuites.<a href="/src/api/resources/simulationSuites/client/Client.ts">simulationSuiteControllerRemove</a>({ ...params }) -> Vapi.SimulationSuite</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the specified simulation suite.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationSuites.simulationSuiteControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationSuiteControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationSuitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulationSuites.<a href="/src/api/resources/simulationSuites/client/Client.ts">simulationSuiteControllerUpdate</a>({ ...params }) -> Vapi.SimulationSuite</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the specified simulation suite.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulationSuites.simulationSuiteControllerUpdate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateSimulationSuiteDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationSuitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Simulations
<details><summary><code>client.simulations.<a href="/src/api/resources/simulations/client/Client.ts">simulationGenerateControllerGenerate</a>({ ...params }) -> Vapi.GenerateScenariosResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates scenarios for an assistant or squad by analyzing its configuration with AI.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulations.simulationGenerateControllerGenerate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.GenerateScenariosDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulations.<a href="/src/api/resources/simulations/client/Client.ts">simulationControllerFindAll</a>({ ...params }) -> Vapi.Simulation[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the simulations for the authenticated organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulations.simulationControllerFindAll();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationControllerFindAllRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulations.<a href="/src/api/resources/simulations/client/Client.ts">simulationControllerCreate</a>({ ...params }) -> Vapi.Simulation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a simulation by pairing a scenario with a personality.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulations.simulationControllerCreate({
    scenarioId: "scenarioId",
    personalityId: "personalityId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateSimulationDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulations.<a href="/src/api/resources/simulations/client/Client.ts">simulationControllerFindOne</a>({ ...params }) -> Vapi.Simulation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the specified simulation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulations.simulationControllerFindOne({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationControllerFindOneRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulations.<a href="/src/api/resources/simulations/client/Client.ts">simulationControllerRemove</a>({ ...params }) -> Vapi.Simulation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the specified simulation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulations.simulationControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.SimulationControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulations.<a href="/src/api/resources/simulations/client/Client.ts">simulationControllerUpdate</a>({ ...params }) -> Vapi.Simulation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the specified simulation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulations.simulationControllerUpdate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateSimulationDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SimulationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.simulations.<a href="/src/api/resources/simulations/client/Client.ts">simulationControllerGetConcurrency</a>() -> Vapi.SimulationConcurrencyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the organization's simulation concurrency limit, the number of active simulations, and how many more can start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.simulations.simulationControllerGetConcurrency();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SimulationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Insight
<details><summary><code>client.insight.<a href="/src/api/resources/insight/client/Client.ts">insightControllerFindAll</a>({ ...params }) -> Vapi.InsightPaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns saved reporting insights for the authenticated organization. Filter results by ID or creation and update timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insight.insightControllerFindAll();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.InsightControllerFindAllRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InsightClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.insight.<a href="/src/api/resources/insight/client/Client.ts">insightControllerCreate</a>({ ...params }) -> Vapi.InsightControllerCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a saved reporting insight that queries call data and presents the results as a bar chart, pie chart, line chart, or text value.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insight.insightControllerCreate({
    type: "bar",
    queries: [{
            type: "vapiql-json",
            table: "call",
            column: "id",
            operation: "count"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.InsightControllerCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InsightClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.insight.<a href="/src/api/resources/insight/client/Client.ts">insightControllerFindOne</a>({ ...params }) -> Vapi.InsightControllerFindOneResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the reporting insight identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insight.insightControllerFindOne({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.InsightControllerFindOneRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InsightClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.insight.<a href="/src/api/resources/insight/client/Client.ts">insightControllerRemove</a>({ ...params }) -> Vapi.InsightControllerRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the reporting insight identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insight.insightControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.InsightControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InsightClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.insight.<a href="/src/api/resources/insight/client/Client.ts">insightControllerUpdate</a>({ ...params }) -> Vapi.InsightControllerUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the reporting insight identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insight.insightControllerUpdate({
    id: "id",
    body: {
        type: "bar"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.InsightControllerUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InsightClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.insight.<a href="/src/api/resources/insight/client/Client.ts">insightControllerRun</a>({ ...params }) -> Vapi.InsightRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Runs a saved reporting insight, optionally overriding its time range and response format.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insight.insightControllerRun({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.InsightRunDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InsightClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.insight.<a href="/src/api/resources/insight/client/Client.ts">insightControllerPreview</a>({ ...params }) -> Vapi.InsightRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Runs an insight definition without first saving it, returning a preview of the resulting chart or text value.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.insight.insightControllerPreview({
    type: "bar",
    queries: [{
            type: "vapiql-json",
            table: "call",
            column: "id",
            operation: "count"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.InsightControllerPreviewRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InsightClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Board
<details><summary><code>client.board.<a href="/src/api/resources/board/client/Client.ts">boardControllerFindAll</a>({ ...params }) -> Vapi.BoardPaginatedResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.board.boardControllerFindAll();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.BoardControllerFindAllRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.board.<a href="/src/api/resources/board/client/Client.ts">boardControllerCreate</a>({ ...params }) -> Vapi.Board</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.board.boardControllerCreate({
    name: "name",
    layout: {
        columns: 1.1
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateBoardDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.board.<a href="/src/api/resources/board/client/Client.ts">boardControllerMetricsOverviewEnsure</a>() -> Vapi.Board</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.board.boardControllerMetricsOverviewEnsure();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `BoardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.board.<a href="/src/api/resources/board/client/Client.ts">boardControllerFindOne</a>({ ...params }) -> Vapi.Board</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.board.boardControllerFindOne({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.BoardControllerFindOneRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.board.<a href="/src/api/resources/board/client/Client.ts">boardControllerRemove</a>({ ...params }) -> Vapi.Board</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.board.boardControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.BoardControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.board.<a href="/src/api/resources/board/client/Client.ts">boardControllerUpdate</a>({ ...params }) -> Vapi.Board</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.board.boardControllerUpdate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateBoardDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Eval
<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerGetPaginated</a>({ ...params }) -> Vapi.EvalPaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns eval definitions for the authenticated organization. Filter results by ID or creation and update timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerGetPaginated();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.EvalControllerGetPaginatedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerCreate</a>({ ...params }) -> Vapi.Eval</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a reusable eval that defines a mock conversation and checkpoints for evaluating assistant responses and tool calls.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerCreate({
    messages: [{
            role: "assistant"
        }],
    type: "chat.mockConversation"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateEvalDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerGet</a>({ ...params }) -> Vapi.Eval</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the eval definition identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerGet({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.EvalControllerGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerRemove</a>({ ...params }) -> Vapi.Eval</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the eval definition identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.EvalControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerUpdate</a>({ ...params }) -> Vapi.Eval</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the eval definition identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerUpdate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateEvalDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerGetRun</a>({ ...params }) -> Vapi.EvalRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the eval run identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerGetRun({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.EvalControllerGetRunRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerRemoveRun</a>({ ...params }) -> Vapi.EvalRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the eval run identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerRemoveRun({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.EvalControllerRemoveRunRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerGetRunsPaginated</a>({ ...params }) -> Vapi.EvalRunPaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns eval runs for the authenticated organization. Filter results by ID or creation and update timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerGetRunsPaginated();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.EvalControllerGetRunsPaginatedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerRun</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Runs a saved or transient eval against an assistant or squad and creates an eval-run record containing the results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerRun({
    target: {
        type: "assistant"
    },
    type: "eval"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateEvalRunDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ObservabilityScorecard
<details><summary><code>client.observabilityScorecard.<a href="/src/api/resources/observabilityScorecard/client/Client.ts">scorecardControllerGet</a>({ ...params }) -> Vapi.Scorecard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the scorecard identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.observabilityScorecard.scorecardControllerGet({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ScorecardControllerGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObservabilityScorecardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.observabilityScorecard.<a href="/src/api/resources/observabilityScorecard/client/Client.ts">scorecardControllerRemove</a>({ ...params }) -> Vapi.Scorecard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the scorecard identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.observabilityScorecard.scorecardControllerRemove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ScorecardControllerRemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObservabilityScorecardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.observabilityScorecard.<a href="/src/api/resources/observabilityScorecard/client/Client.ts">scorecardControllerUpdate</a>({ ...params }) -> Vapi.Scorecard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the scorecard identified by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.observabilityScorecard.scorecardControllerUpdate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.UpdateScorecardDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObservabilityScorecardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.observabilityScorecard.<a href="/src/api/resources/observabilityScorecard/client/Client.ts">scorecardControllerGetPaginated</a>({ ...params }) -> Vapi.ScorecardPaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns scorecards for the authenticated organization. Filter results by ID or creation and update timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.observabilityScorecard.scorecardControllerGetPaginated();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ScorecardControllerGetPaginatedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObservabilityScorecardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.observabilityScorecard.<a href="/src/api/resources/observabilityScorecard/client/Client.ts">scorecardControllerCreate</a>({ ...params }) -> Vapi.Scorecard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a scorecard containing metrics, scoring conditions, and optional links to assistants whose calls should be evaluated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.observabilityScorecard.scorecardControllerCreate({
    metrics: [{
            conditions: [{
                    type: "comparator",
                    comparator: "=",
                    value: 1.1,
                    points: 1.1
                }],
            structuredOutputId: "structuredOutputId"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.CreateScorecardDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObservabilityScorecardClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ProviderResources
<details><summary><code>client.providerResources.<a href="/src/api/resources/providerResources/client/Client.ts">providerResourceControllerGetProviderResourcesPaginated</a>({ ...params }) -> Vapi.ProviderResourcePaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of provider resources for the authenticated organization. Filter pronunciation dictionaries by provider, resource ID, or creation and update timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerResources.providerResourceControllerGetProviderResourcesPaginated({
    provider: "cartesia",
    resourceName: "pronunciation-dictionary"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ProviderResourceControllerGetProviderResourcesPaginatedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderResourcesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.providerResources.<a href="/src/api/resources/providerResources/client/Client.ts">providerResourceControllerCreateProviderResource</a>({ ...params }) -> Vapi.ProviderResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a pronunciation-dictionary resource for a supported provider, currently Cartesia or ElevenLabs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerResources.providerResourceControllerCreateProviderResource({
    provider: "cartesia",
    resourceName: "pronunciation-dictionary"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ProviderResourceControllerCreateProviderResourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderResourcesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.providerResources.<a href="/src/api/resources/providerResources/client/Client.ts">providerResourceControllerGetProviderResource</a>({ ...params }) -> Vapi.ProviderResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the provider resource identified by its Vapi resource ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerResources.providerResourceControllerGetProviderResource({
    provider: "cartesia",
    resourceName: "pronunciation-dictionary",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ProviderResourceControllerGetProviderResourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderResourcesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.providerResources.<a href="/src/api/resources/providerResources/client/Client.ts">providerResourceControllerDeleteProviderResource</a>({ ...params }) -> Vapi.ProviderResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the provider resource identified by its Vapi resource ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerResources.providerResourceControllerDeleteProviderResource({
    provider: "cartesia",
    resourceName: "pronunciation-dictionary",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ProviderResourceControllerDeleteProviderResourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderResourcesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.providerResources.<a href="/src/api/resources/providerResources/client/Client.ts">providerResourceControllerUpdateProviderResource</a>({ ...params }) -> Vapi.ProviderResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the provider resource identified by its Vapi resource ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerResources.providerResourceControllerUpdateProviderResource({
    provider: "cartesia",
    resourceName: "pronunciation-dictionary",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.ProviderResourceControllerUpdateProviderResourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderResourcesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Analytics
<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">get</a>({ ...params }) -> Vapi.AnalyticsQueryResult[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Runs one or more metric queries against call or subscription data using the requested time range, groupings, and aggregate operations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analytics.get({
    queries: [{
            table: "call",
            name: "name",
            operations: [{
                    operation: "sum",
                    column: "id"
                }]
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vapi.AnalyticsQueryDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AnalyticsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

