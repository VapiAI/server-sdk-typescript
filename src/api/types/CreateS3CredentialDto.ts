/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateS3CredentialDto {
    /** Credential provider. Only allowed value is s3 */
    provider: "s3";
    /** AWS access key ID. */
    awsAccessKeyId: string;
    /** AWS access key secret. This is not returned in the API. */
    awsSecretAccessKey: string;
    /** AWS region in which the S3 bucket is located. */
    region: string;
    /** AWS S3 bucket name. */
    s3BucketName: string;
    /** The path prefix for the uploaded recording. Ex. "recordings/" */
    s3PathPrefix: string;
    /** This is the name of credential. This is just for your reference. */
    name?: string;
}
