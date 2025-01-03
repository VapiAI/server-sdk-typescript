/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface CreateTrieveKnowledgeBaseDto {
    provider: "trieve";
    /** This is the name of the knowledge base. */
    name?: string;
    /** This is the plan on how to search the vector store while a call is going on. */
    vectorStoreSearchPlan: Vapi.TrieveKnowledgeBaseVectorStoreSearchPlan;
    /** This is the plan if you want us to create a new vector store on your behalf. To use an existing vector store from your account, use `vectoreStoreProviderId` */
    vectorStoreCreatePlan?: Vapi.TrieveKnowledgeBaseVectorStoreCreatePlan;
    /**
     * This is an vector store that you already have on your account with the provider. To create a new vector store, use vectorStoreCreatePlan.
     *
     * Usage:
     * - To bring your own vector store from Trieve, go to https://trieve.ai
     * - Create a dataset, and use the datasetId here.
     */
    vectorStoreProviderId?: string;
}
