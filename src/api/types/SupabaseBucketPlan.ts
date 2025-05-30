/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface SupabaseBucketPlan {
    /**
     * This is the S3 Region. It should look like us-east-1
     * It should be one of the supabase regions defined in the SUPABASE_REGION enum
     * Check https://supabase.com/docs/guides/platform/regions for up to date regions
     */
    region: Vapi.SupabaseBucketPlanRegion;
    /**
     * This is the S3 compatible URL for Supabase S3
     * This should look like https://<project-ID>.supabase.co/storage/v1/s3
     */
    url: string;
    /**
     * This is the Supabase S3 Access Key ID.
     * The user creates this in the Supabase project Storage settings
     */
    accessKeyId: string;
    /**
     * This is the Supabase S3 Secret Access Key.
     * The user creates this in the Supabase project Storage settings along with the access key id
     */
    secretAccessKey: string;
    /**
     * This is the Supabase S3 Bucket Name.
     * The user must create this in Supabase under Storage > Buckets
     * A bucket that does not exist will not be checked now, but file uploads will fail
     */
    name: string;
    /**
     * This is the Supabase S3 Bucket Folder Path.
     * The user can create this in Supabase under Storage > Buckets
     * A path that does not exist will not be checked now, but file uploads will fail
     * A Path is like a folder in the bucket
     * Eg. If the bucket is called "my-bucket" and the path is "my-folder", the full path is "my-bucket/my-folder"
     */
    path?: string;
}
