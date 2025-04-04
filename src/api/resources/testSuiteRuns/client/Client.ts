/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vapi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace TestSuiteRuns {
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

export class TestSuiteRuns {
    constructor(protected readonly _options: TestSuiteRuns.Options) {}

    /**
     * @param {string} testSuiteId
     * @param {Vapi.TestSuiteRunControllerFindAllPaginatedRequest} request
     * @param {TestSuiteRuns.RequestOptions} requestOptions - Request-specific configuration.
     */
    public async testSuiteRunControllerFindAllPaginated(
        testSuiteId: string,
        request: Vapi.TestSuiteRunControllerFindAllPaginatedRequest = {},
        requestOptions?: TestSuiteRuns.RequestOptions,
    ): Promise<Vapi.TestSuiteRunsPaginatedResponse> {
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
        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (sortOrder != null) {
            _queryParams["sortOrder"] = sortOrder;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (createdAtGt != null) {
            _queryParams["createdAtGt"] = createdAtGt;
        }

        if (createdAtLt != null) {
            _queryParams["createdAtLt"] = createdAtLt;
        }

        if (createdAtGe != null) {
            _queryParams["createdAtGe"] = createdAtGe;
        }

        if (createdAtLe != null) {
            _queryParams["createdAtLe"] = createdAtLe;
        }

        if (updatedAtGt != null) {
            _queryParams["updatedAtGt"] = updatedAtGt;
        }

        if (updatedAtLt != null) {
            _queryParams["updatedAtLt"] = updatedAtLt;
        }

        if (updatedAtGe != null) {
            _queryParams["updatedAtGe"] = updatedAtGe;
        }

        if (updatedAtLe != null) {
            _queryParams["updatedAtLe"] = updatedAtLe;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `test-suite/${encodeURIComponent(testSuiteId)}/run`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.5.2",
                "User-Agent": "@vapi-ai/server-sdk/0.5.2",
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
            return _response.body as Vapi.TestSuiteRunsPaginatedResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError("Timeout exceeded when calling GET /test-suite/{testSuiteId}/run.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} testSuiteId
     * @param {Vapi.CreateTestSuiteRunDto} request
     * @param {TestSuiteRuns.RequestOptions} requestOptions - Request-specific configuration.
     */
    public async testSuiteRunControllerCreate(
        testSuiteId: string,
        request: Vapi.CreateTestSuiteRunDto = {},
        requestOptions?: TestSuiteRuns.RequestOptions,
    ): Promise<Vapi.TestSuiteRun> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `test-suite/${encodeURIComponent(testSuiteId)}/run`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.5.2",
                "User-Agent": "@vapi-ai/server-sdk/0.5.2",
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
            return _response.body as Vapi.TestSuiteRun;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError("Timeout exceeded when calling POST /test-suite/{testSuiteId}/run.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} testSuiteId
     * @param {string} id
     * @param {TestSuiteRuns.RequestOptions} requestOptions - Request-specific configuration.
     */
    public async testSuiteRunControllerFindOne(
        testSuiteId: string,
        id: string,
        requestOptions?: TestSuiteRuns.RequestOptions,
    ): Promise<Vapi.TestSuiteRun> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `test-suite/${encodeURIComponent(testSuiteId)}/run/${encodeURIComponent(id)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.5.2",
                "User-Agent": "@vapi-ai/server-sdk/0.5.2",
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
            return _response.body as Vapi.TestSuiteRun;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError(
                    "Timeout exceeded when calling GET /test-suite/{testSuiteId}/run/{id}.",
                );
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} testSuiteId
     * @param {string} id
     * @param {TestSuiteRuns.RequestOptions} requestOptions - Request-specific configuration.
     */
    public async testSuiteRunControllerRemove(
        testSuiteId: string,
        id: string,
        requestOptions?: TestSuiteRuns.RequestOptions,
    ): Promise<Vapi.TestSuiteRun> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `test-suite/${encodeURIComponent(testSuiteId)}/run/${encodeURIComponent(id)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.5.2",
                "User-Agent": "@vapi-ai/server-sdk/0.5.2",
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
            return _response.body as Vapi.TestSuiteRun;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError(
                    "Timeout exceeded when calling DELETE /test-suite/{testSuiteId}/run/{id}.",
                );
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} testSuiteId
     * @param {string} id
     * @param {Vapi.UpdateTestSuiteRunDto} request
     * @param {TestSuiteRuns.RequestOptions} requestOptions - Request-specific configuration.
     */
    public async testSuiteRunControllerUpdate(
        testSuiteId: string,
        id: string,
        request: Vapi.UpdateTestSuiteRunDto = {},
        requestOptions?: TestSuiteRuns.RequestOptions,
    ): Promise<Vapi.TestSuiteRun> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `test-suite/${encodeURIComponent(testSuiteId)}/run/${encodeURIComponent(id)}`,
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.5.2",
                "User-Agent": "@vapi-ai/server-sdk/0.5.2",
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
            return _response.body as Vapi.TestSuiteRun;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError(
                    "Timeout exceeded when calling PATCH /test-suite/{testSuiteId}/run/{id}.",
                );
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
