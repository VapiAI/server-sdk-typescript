/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vapi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace TestSuiteTests {
    export interface Options {
        environment?: core.Supplier<environments.VapiEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class TestSuiteTests {
    constructor(protected readonly _options: TestSuiteTests.Options) {}

    /**
     * @param {string} testSuiteId
     * @param {Vapi.TestSuiteTestControllerFindAllPaginatedRequest} request
     * @param {TestSuiteTests.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.testSuiteTests.testSuiteTestControllerFindAllPaginated("testSuiteId")
     */
    public testSuiteTestControllerFindAllPaginated(
        testSuiteId: string,
        request: Vapi.TestSuiteTestControllerFindAllPaginatedRequest = {},
        requestOptions?: TestSuiteTests.RequestOptions,
    ): core.HttpResponsePromise<Vapi.TestSuiteTestsPaginatedResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__testSuiteTestControllerFindAllPaginated(testSuiteId, request, requestOptions),
        );
    }

    private async __testSuiteTestControllerFindAllPaginated(
        testSuiteId: string,
        request: Vapi.TestSuiteTestControllerFindAllPaginatedRequest = {},
        requestOptions?: TestSuiteTests.RequestOptions,
    ): Promise<core.WithRawResponse<Vapi.TestSuiteTestsPaginatedResponse>> {
        const {
            page,
            sortOrder,
            limit,
            createdAtGt,
            createdAtLt,
            createdAtGe,
            createdAtLe,
            updatedAtGt,
            updatedAtLt,
            updatedAtGe,
            updatedAtLe,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (page !== undefined) {
            _queryParams["page"] = page?.toString() ?? null;
        }

        if (sortOrder !== undefined) {
            _queryParams["sortOrder"] = sortOrder;
        }

        if (limit !== undefined) {
            _queryParams["limit"] = limit?.toString() ?? null;
        }

        if (createdAtGt !== undefined) {
            _queryParams["createdAtGt"] = createdAtGt;
        }

        if (createdAtLt !== undefined) {
            _queryParams["createdAtLt"] = createdAtLt;
        }

        if (createdAtGe !== undefined) {
            _queryParams["createdAtGe"] = createdAtGe;
        }

        if (createdAtLe !== undefined) {
            _queryParams["createdAtLe"] = createdAtLe;
        }

        if (updatedAtGt !== undefined) {
            _queryParams["updatedAtGt"] = updatedAtGt;
        }

        if (updatedAtLt !== undefined) {
            _queryParams["updatedAtLt"] = updatedAtLt;
        }

        if (updatedAtGe !== undefined) {
            _queryParams["updatedAtGe"] = updatedAtGe;
        }

        if (updatedAtLe !== undefined) {
            _queryParams["updatedAtLe"] = updatedAtLe;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `test-suite/${encodeURIComponent(testSuiteId)}/test`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.9.3",
                "User-Agent": "@vapi-ai/server-sdk/0.9.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Vapi.TestSuiteTestsPaginatedResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.VapiTimeoutError("Timeout exceeded when calling GET /test-suite/{testSuiteId}/test.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} testSuiteId
     * @param {Vapi.TestSuiteTestControllerCreateRequest} request
     * @param {TestSuiteTests.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.testSuiteTests.testSuiteTestControllerCreate("testSuiteId", {
     *         scorers: [{
     *                 type: "ai",
     *                 rubric: "rubric"
     *             }],
     *         type: "voice",
     *         script: "script"
     *     })
     */
    public testSuiteTestControllerCreate(
        testSuiteId: string,
        request: Vapi.TestSuiteTestControllerCreateRequest,
        requestOptions?: TestSuiteTests.RequestOptions,
    ): core.HttpResponsePromise<Vapi.TestSuiteTestControllerCreateResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__testSuiteTestControllerCreate(testSuiteId, request, requestOptions),
        );
    }

    private async __testSuiteTestControllerCreate(
        testSuiteId: string,
        request: Vapi.TestSuiteTestControllerCreateRequest,
        requestOptions?: TestSuiteTests.RequestOptions,
    ): Promise<core.WithRawResponse<Vapi.TestSuiteTestControllerCreateResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `test-suite/${encodeURIComponent(testSuiteId)}/test`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.9.3",
                "User-Agent": "@vapi-ai/server-sdk/0.9.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: _response.body as Vapi.TestSuiteTestControllerCreateResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.VapiTimeoutError("Timeout exceeded when calling POST /test-suite/{testSuiteId}/test.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} testSuiteId
     * @param {string} id
     * @param {TestSuiteTests.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.testSuiteTests.testSuiteTestControllerFindOne("testSuiteId", "id")
     */
    public testSuiteTestControllerFindOne(
        testSuiteId: string,
        id: string,
        requestOptions?: TestSuiteTests.RequestOptions,
    ): core.HttpResponsePromise<Vapi.TestSuiteTestControllerFindOneResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__testSuiteTestControllerFindOne(testSuiteId, id, requestOptions),
        );
    }

    private async __testSuiteTestControllerFindOne(
        testSuiteId: string,
        id: string,
        requestOptions?: TestSuiteTests.RequestOptions,
    ): Promise<core.WithRawResponse<Vapi.TestSuiteTestControllerFindOneResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `test-suite/${encodeURIComponent(testSuiteId)}/test/${encodeURIComponent(id)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.9.3",
                "User-Agent": "@vapi-ai/server-sdk/0.9.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: _response.body as Vapi.TestSuiteTestControllerFindOneResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.VapiTimeoutError(
                    "Timeout exceeded when calling GET /test-suite/{testSuiteId}/test/{id}.",
                );
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} testSuiteId
     * @param {string} id
     * @param {TestSuiteTests.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.testSuiteTests.testSuiteTestControllerRemove("testSuiteId", "id")
     */
    public testSuiteTestControllerRemove(
        testSuiteId: string,
        id: string,
        requestOptions?: TestSuiteTests.RequestOptions,
    ): core.HttpResponsePromise<Vapi.TestSuiteTestControllerRemoveResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__testSuiteTestControllerRemove(testSuiteId, id, requestOptions),
        );
    }

    private async __testSuiteTestControllerRemove(
        testSuiteId: string,
        id: string,
        requestOptions?: TestSuiteTests.RequestOptions,
    ): Promise<core.WithRawResponse<Vapi.TestSuiteTestControllerRemoveResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `test-suite/${encodeURIComponent(testSuiteId)}/test/${encodeURIComponent(id)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.9.3",
                "User-Agent": "@vapi-ai/server-sdk/0.9.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: _response.body as Vapi.TestSuiteTestControllerRemoveResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.VapiTimeoutError(
                    "Timeout exceeded when calling DELETE /test-suite/{testSuiteId}/test/{id}.",
                );
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} testSuiteId
     * @param {string} id
     * @param {Vapi.TestSuiteTestControllerUpdateRequest} request
     * @param {TestSuiteTests.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.testSuiteTests.testSuiteTestControllerUpdate("testSuiteId", "id", {
     *         type: "voice"
     *     })
     */
    public testSuiteTestControllerUpdate(
        testSuiteId: string,
        id: string,
        request: Vapi.TestSuiteTestControllerUpdateRequest,
        requestOptions?: TestSuiteTests.RequestOptions,
    ): core.HttpResponsePromise<Vapi.TestSuiteTestControllerUpdateResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__testSuiteTestControllerUpdate(testSuiteId, id, request, requestOptions),
        );
    }

    private async __testSuiteTestControllerUpdate(
        testSuiteId: string,
        id: string,
        request: Vapi.TestSuiteTestControllerUpdateRequest,
        requestOptions?: TestSuiteTests.RequestOptions,
    ): Promise<core.WithRawResponse<Vapi.TestSuiteTestControllerUpdateResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `test-suite/${encodeURIComponent(testSuiteId)}/test/${encodeURIComponent(id)}`,
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.9.3",
                "User-Agent": "@vapi-ai/server-sdk/0.9.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: _response.body as Vapi.TestSuiteTestControllerUpdateResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.VapiTimeoutError(
                    "Timeout exceeded when calling PATCH /test-suite/{testSuiteId}/test/{id}.",
                );
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
