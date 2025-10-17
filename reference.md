# Reference

## Assistants

<details><summary><code>client.assistants.<a href="/src/api/resources/assistants/client/Client.ts">list</a>({ ...params }) -> Vapi.Assistant[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistants.list({
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.AssistantsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assistants.RequestOptions`

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

**requestOptions:** `Assistants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assistants.<a href="/src/api/resources/assistants/client/Client.ts">get</a>(id) -> Vapi.Assistant</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistants.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assistants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assistants.<a href="/src/api/resources/assistants/client/Client.ts">delete</a>(id) -> Vapi.Assistant</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistants.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assistants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assistants.<a href="/src/api/resources/assistants/client/Client.ts">update</a>(id, { ...params }) -> Vapi.Assistant</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistants.update("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.UpdateAssistantDto`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assistants.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.squads.list({
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.SquadsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Squads.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.squads.create({
    members: [{}],
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

**requestOptions:** `Squads.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.squads.<a href="/src/api/resources/squads/client/Client.ts">get</a>(id) -> Vapi.Squad</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.squads.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Squads.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.squads.<a href="/src/api/resources/squads/client/Client.ts">delete</a>(id) -> Vapi.Squad</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.squads.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Squads.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.squads.<a href="/src/api/resources/squads/client/Client.ts">update</a>(id, { ...params }) -> Vapi.Squad</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.squads.update("id", {
    members: [{}],
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.UpdateSquadDto`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Squads.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.list({
    id: "id",
    assistantId: "assistantId",
    phoneNumberId: "phoneNumberId",
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.CallsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">create</a>({ ...params }) -> Vapi.CallsCreateResponse</code></summary>
<dl>
<dd>

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

**requestOptions:** `Calls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">callControllerFindAllPaginated</a>({ ...params }) -> Vapi.CallPaginatedResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.callControllerFindAllPaginated({
    assistantId: "assistantId",
    assistantName: "assistantName",
    id: "id",
    costLe: 1.1,
    costGe: 1.1,
    cost: 1.1,
    successEvaluation: "successEvaluation",
    endedReason: "endedReason",
    phoneNumberId: "phoneNumberId",
    page: 1.1,
    sortOrder: "ASC",
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.CallControllerFindAllPaginatedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">get</a>(id) -> Vapi.Call</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">delete</a>(id, { ...params }) -> Vapi.Call</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.DeleteCallDto`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">update</a>(id, { ...params }) -> Vapi.Call</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.update("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.UpdateCallDto`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calls.RequestOptions`

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
    assistantId: "assistantId",
    squadId: "squadId",
    workflowId: "workflowId",
    sessionId: "sessionId",
    page: 1.1,
    sortOrder: "ASC",
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.ChatsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">create</a>({ ...params }) -> Vapi.ChatsCreateResponse</code></summary>
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
    input: "input",
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

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">get</a>(id) -> Vapi.Chat</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">delete</a>(id) -> Vapi.Chat</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chats.<a href="/src/api/resources/chats/client/Client.ts">createResponse</a>({ ...params }) -> Vapi.ChatsCreateResponseResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chats.createResponse({
    input: "input",
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

**requestOptions:** `Chats.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerFindAll({
    id: "id",
    status: "scheduled",
    page: 1.1,
    sortOrder: "ASC",
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.CampaignControllerFindAllRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Campaigns.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerCreate({
    name: "Q2 Sales Campaign",
    phoneNumberId: "phoneNumberId",
    customers: [{}],
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

**requestOptions:** `Campaigns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerFindOne</a>(id) -> Vapi.Campaign</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerFindOne("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Campaigns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerRemove</a>(id) -> Vapi.Campaign</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerRemove("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Campaigns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.<a href="/src/api/resources/campaigns/client/Client.ts">campaignControllerUpdate</a>(id, { ...params }) -> Vapi.Campaign</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.campaignControllerUpdate("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.UpdateCampaignDto`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Campaigns.RequestOptions`

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
    name: "name",
    assistantId: "assistantId",
    squadId: "squadId",
    workflowId: "workflowId",
    page: 1.1,
    sortOrder: "ASC",
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.SessionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

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

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">get</a>(id) -> Vapi.Session</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">delete</a>(id) -> Vapi.Session</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">update</a>(id, { ...params }) -> Vapi.Session</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.update("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.UpdateSessionDto`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PhoneNumbers

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">list</a>({ ...params }) -> Vapi.PhoneNumbersListResponseItem[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.list({
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.PhoneNumbersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">create</a>({ ...params }) -> Vapi.PhoneNumbersCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.create({
    provider: "byo-phone-number",
    credentialId: "credentialId",
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

**request:** `Vapi.PhoneNumbersCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.phoneNumberControllerFindAllPaginated({
    search: "search",
    page: 1.1,
    sortOrder: "ASC",
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.PhoneNumberControllerFindAllPaginatedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">get</a>(id) -> Vapi.PhoneNumbersGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">delete</a>(id) -> Vapi.PhoneNumbersDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">update</a>(id, { ...params }) -> Vapi.PhoneNumbersUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.update("id", {});
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.PhoneNumbersUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tools

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">list</a>({ ...params }) -> Vapi.ToolsListResponseItem[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.list({
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.ToolsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">create</a>({ ...params }) -> Vapi.ToolsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.create({
    type: "apiRequest",
    method: "POST",
    url: "url",
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

**request:** `Vapi.ToolsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">get</a>(id) -> Vapi.ToolsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">delete</a>(id) -> Vapi.ToolsDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">update</a>(id, { ...params }) -> Vapi.ToolsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.update("id", {});
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.ToolsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Files

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">list</a>() -> Vapi.File_[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.list();
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

**requestOptions:** `Files.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.create({
    file: fs.createReadStream("/path/to/your/file"),
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

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">get</a>(id) -> Vapi.File_</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">delete</a>(id) -> Vapi.File_</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">update</a>(id, { ...params }) -> Vapi.File_</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.update("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.UpdateFileDto`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerFindAll({
    id: "id",
    name: "name",
    page: 1.1,
    sortOrder: "ASC",
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.StructuredOutputControllerFindAllRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StructuredOutputs.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerCreate({
    name: "name",
    schema: {
        type: "string",
    },
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

**requestOptions:** `StructuredOutputs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.structuredOutputs.<a href="/src/api/resources/structuredOutputs/client/Client.ts">structuredOutputControllerFindOne</a>(id) -> Vapi.StructuredOutput</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerFindOne("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StructuredOutputs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.structuredOutputs.<a href="/src/api/resources/structuredOutputs/client/Client.ts">structuredOutputControllerRemove</a>(id) -> Vapi.StructuredOutput</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerRemove("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StructuredOutputs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.structuredOutputs.<a href="/src/api/resources/structuredOutputs/client/Client.ts">structuredOutputControllerUpdate</a>(id, { ...params }) -> Vapi.StructuredOutput</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.structuredOutputs.structuredOutputControllerUpdate("id", {
    schemaOverride: "schemaOverride",
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.UpdateStructuredOutputDto`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StructuredOutputs.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerGetPaginated({
    id: "id",
    page: 1.1,
    sortOrder: "ASC",
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.EvalControllerGetPaginatedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Eval.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerCreate({
    messages: [
        {
            role: "assistant",
        },
    ],
    type: "chat.mockConversation",
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

**requestOptions:** `Eval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerGet</a>(id) -> Vapi.Eval</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerGet("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Eval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerRemove</a>(id) -> Vapi.Eval</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerRemove("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Eval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerUpdate</a>(id, { ...params }) -> Vapi.Eval</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerUpdate("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.UpdateEvalDto`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Eval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerGetRun</a>(id) -> Vapi.EvalRun</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerGetRun("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Eval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerRemoveRun</a>(id) -> Vapi.EvalRun</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerRemoveRun("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Eval.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerGetRunsPaginated({
    id: "id",
    page: 1.1,
    sortOrder: "ASC",
    limit: 1.1,
    createdAtGt: "2024-01-15T09:30:00Z",
    createdAtLt: "2024-01-15T09:30:00Z",
    createdAtGe: "2024-01-15T09:30:00Z",
    createdAtLe: "2024-01-15T09:30:00Z",
    updatedAtGt: "2024-01-15T09:30:00Z",
    updatedAtLt: "2024-01-15T09:30:00Z",
    updatedAtGe: "2024-01-15T09:30:00Z",
    updatedAtLe: "2024-01-15T09:30:00Z",
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

**request:** `Vapi.EvalControllerGetRunsPaginatedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Eval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eval.<a href="/src/api/resources/eval/client/Client.ts">evalControllerRun</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eval.evalControllerRun({
    target: {
        type: "assistant",
    },
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

**requestOptions:** `Eval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ProviderResources

<details><summary><code>client.providerResources.<a href="/src/api/resources/providerResources/client/Client.ts">providerResourceControllerGetProviderResourcesPaginated</a>(provider, resourceName, { ...params }) -> Vapi.ProviderResourcePaginatedResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerResources.providerResourceControllerGetProviderResourcesPaginated(
    "11labs",
    "pronunciation-dictionary",
    {
        id: "id",
        resourceId: "resourceId",
        page: 1.1,
        sortOrder: "ASC",
        limit: 1.1,
        createdAtGt: "2024-01-15T09:30:00Z",
        createdAtLt: "2024-01-15T09:30:00Z",
        createdAtGe: "2024-01-15T09:30:00Z",
        createdAtLe: "2024-01-15T09:30:00Z",
        updatedAtGt: "2024-01-15T09:30:00Z",
        updatedAtLt: "2024-01-15T09:30:00Z",
        updatedAtGe: "2024-01-15T09:30:00Z",
        updatedAtLe: "2024-01-15T09:30:00Z",
    },
);
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

**provider:** `"11labs"` — The provider (e.g., 11labs)

</dd>
</dl>

<dl>
<dd>

**resourceName:** `"pronunciation-dictionary"` — The resource name (e.g., pronunciation-dictionary)

</dd>
</dl>

<dl>
<dd>

**request:** `Vapi.ProviderResourceControllerGetProviderResourcesPaginatedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderResources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providerResources.<a href="/src/api/resources/providerResources/client/Client.ts">providerResourceControllerCreateProviderResource</a>(provider, resourceName) -> Vapi.ProviderResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerResources.providerResourceControllerCreateProviderResource("11labs", "pronunciation-dictionary");
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

**provider:** `"11labs"` — The provider (e.g., 11labs)

</dd>
</dl>

<dl>
<dd>

**resourceName:** `"pronunciation-dictionary"` — The resource name (e.g., pronunciation-dictionary)

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderResources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providerResources.<a href="/src/api/resources/providerResources/client/Client.ts">providerResourceControllerGetProviderResource</a>(provider, resourceName, id) -> Vapi.ProviderResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerResources.providerResourceControllerGetProviderResource(
    "11labs",
    "pronunciation-dictionary",
    "id",
);
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

**provider:** `"11labs"` — The provider (e.g., 11labs)

</dd>
</dl>

<dl>
<dd>

**resourceName:** `"pronunciation-dictionary"` — The resource name (e.g., pronunciation-dictionary)

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderResources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providerResources.<a href="/src/api/resources/providerResources/client/Client.ts">providerResourceControllerDeleteProviderResource</a>(provider, resourceName, id) -> Vapi.ProviderResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerResources.providerResourceControllerDeleteProviderResource(
    "11labs",
    "pronunciation-dictionary",
    "id",
);
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

**provider:** `"11labs"` — The provider (e.g., 11labs)

</dd>
</dl>

<dl>
<dd>

**resourceName:** `"pronunciation-dictionary"` — The resource name (e.g., pronunciation-dictionary)

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderResources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providerResources.<a href="/src/api/resources/providerResources/client/Client.ts">providerResourceControllerUpdateProviderResource</a>(provider, resourceName, id) -> Vapi.ProviderResource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerResources.providerResourceControllerUpdateProviderResource(
    "11labs",
    "pronunciation-dictionary",
    "id",
);
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

**provider:** `"11labs"` — The provider (e.g., 11labs)

</dd>
</dl>

<dl>
<dd>

**resourceName:** `"pronunciation-dictionary"` — The resource name (e.g., pronunciation-dictionary)

</dd>
</dl>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderResources.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analytics.get({
    queries: [
        {
            table: "call",
            name: "name",
            operations: [
                {
                    operation: "sum",
                    column: "id",
                },
            ],
        },
    ],
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

**requestOptions:** `Analytics.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
