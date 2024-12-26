/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TrieveKnowledgeBaseVectorStoreCreatePlan {
    /** These are the file ids that will be used to create the vector store. To upload files, use the `POST /files` endpoint. */
    fileIds: string[];
    /** This is an optional field which allows you to specify the number of splits you want per chunk. If not specified, the default 20 is used. However, you may want to use a different number. */
    targetSplitsPerChunk?: number;
    /** This is an optional field which allows you to specify the delimiters to use when splitting the file before chunking the text. If not specified, the default [.!?\n] are used to split into sentences. However, you may want to use spaces or other delimiters. */
    splitDelimiters?: string[];
    /** This is an optional field which allows you to specify whether or not to rebalance the chunks created from the file. If not specified, the default true is used. If true, Trieve will evenly distribute remainder splits across chunks such that 66 splits with a target_splits_per_chunk of 20 will result in 3 chunks with 22 splits each. */
    rebalanceChunks?: boolean;
}