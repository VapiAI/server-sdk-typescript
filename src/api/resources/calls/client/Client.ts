/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vapi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Calls {
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

export class Calls {
    constructor(protected readonly _options: Calls.Options) {}

    /**
     * @param {Vapi.CallsListRequest} request
     * @param {Calls.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.calls.list()
     */
    public list(
        request: Vapi.CallsListRequest = {},
        requestOptions?: Calls.RequestOptions,
    ): core.HttpResponsePromise<Vapi.Call[]> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Vapi.CallsListRequest = {},
        requestOptions?: Calls.RequestOptions,
    ): Promise<core.WithRawResponse<Vapi.Call[]>> {
        const {
            id,
            assistantId,
            phoneNumberId,
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
        if (id !== undefined) {
            _queryParams["id"] = id;
        }

        if (assistantId !== undefined) {
            _queryParams["assistantId"] = assistantId;
        }

        if (phoneNumberId !== undefined) {
            _queryParams["phoneNumberId"] = phoneNumberId;
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
                "call",
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
            return { data: _response.body as Vapi.Call[], rawResponse: _response.rawResponse };
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
                throw new errors.VapiTimeoutError("Timeout exceeded when calling GET /call.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {Vapi.CreateCallDto} request
     * @param {Calls.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.calls.create()
     */
    public create(
        request: Vapi.CreateCallDto = {},
        requestOptions?: Calls.RequestOptions,
    ): core.HttpResponsePromise<Vapi.CallsCreateResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Vapi.CreateCallDto = {},
        requestOptions?: Calls.RequestOptions,
    ): Promise<core.WithRawResponse<Vapi.CallsCreateResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                "call",
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
            return { data: _response.body as Vapi.CallsCreateResponse, rawResponse: _response.rawResponse };
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
                throw new errors.VapiTimeoutError("Timeout exceeded when calling POST /call.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} id
     * @param {Calls.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.calls.get("id")
     */
    public get(id: string, requestOptions?: Calls.RequestOptions): core.HttpResponsePromise<Vapi.Call> {
        return core.HttpResponsePromise.fromPromise(this.__get(id, requestOptions));
    }

    private async __get(id: string, requestOptions?: Calls.RequestOptions): Promise<core.WithRawResponse<Vapi.Call>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `call/${encodeURIComponent(id)}`,
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
            return { data: _response.body as Vapi.Call, rawResponse: _response.rawResponse };
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
                throw new errors.VapiTimeoutError("Timeout exceeded when calling GET /call/{id}.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} id
     * @param {Calls.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.calls.delete("id")
     */
    public delete(id: string, requestOptions?: Calls.RequestOptions): core.HttpResponsePromise<Vapi.Call> {
        return core.HttpResponsePromise.fromPromise(this.__delete(id, requestOptions));
    }

    private async __delete(
        id: string,
        requestOptions?: Calls.RequestOptions,
    ): Promise<core.WithRawResponse<Vapi.Call>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `call/${encodeURIComponent(id)}`,
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
            return { data: _response.body as Vapi.Call, rawResponse: _response.rawResponse };
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
                throw new errors.VapiTimeoutError("Timeout exceeded when calling DELETE /call/{id}.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} id
     * @param {Vapi.UpdateCallDto} request
     * @param {Calls.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.calls.update("id")
     */
    public update(
        id: string,
        request: Vapi.UpdateCallDto = {},
        requestOptions?: Calls.RequestOptions,
    ): core.HttpResponsePromise<Vapi.Call> {
        return core.HttpResponsePromise.fromPromise(this.__update(id, request, requestOptions));
    }

    private async __update(
        id: string,
        request: Vapi.UpdateCallDto = {},
        requestOptions?: Calls.RequestOptions,
    ): Promise<core.WithRawResponse<Vapi.Call>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.VapiEnvironment.Default,
                `call/${encodeURIComponent(id)}`,
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
            return { data: _response.body as Vapi.Call, rawResponse: _response.rawResponse };
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
                throw new errors.VapiTimeoutError("Timeout exceeded when calling PATCH /call/{id}.");
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
