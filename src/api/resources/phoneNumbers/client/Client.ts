/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vapi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace PhoneNumbers {
    interface Options {
        environment?: core.Supplier<environments.VapiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
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

export class PhoneNumbers {
    constructor(protected readonly _options: PhoneNumbers.Options = {}) {}

    /**
     * @param {Vapi.PhoneNumbersListRequest} request
     * @param {PhoneNumbers.RequestOptions} requestOptions - Request-specific configuration.
     */
    public async list(
        request: Vapi.PhoneNumbersListRequest = {},
        requestOptions?: PhoneNumbers.RequestOptions
    ): Promise<Vapi.PhoneNumbersListResponseItem[]> {
        const {
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
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
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
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                "phone-number"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.2.1",
                "User-Agent": "@vapi-ai/server-sdk/0.2.1",
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
            return _response.body as Vapi.PhoneNumbersListResponseItem[];
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
                throw new errors.VapiTimeoutError("Timeout exceeded when calling GET /phone-number.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Vapi.PhoneNumbersCreateRequest} request
     * @param {PhoneNumbers.RequestOptions} requestOptions - Request-specific configuration.
     */
    public async create(
        request: Vapi.PhoneNumbersCreateRequest,
        requestOptions?: PhoneNumbers.RequestOptions
    ): Promise<Vapi.PhoneNumbersCreateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                "phone-number"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.2.1",
                "User-Agent": "@vapi-ai/server-sdk/0.2.1",
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
            return _response.body as Vapi.PhoneNumbersCreateResponse;
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
                throw new errors.VapiTimeoutError("Timeout exceeded when calling POST /phone-number.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} id
     * @param {PhoneNumbers.RequestOptions} requestOptions - Request-specific configuration.
     */
    public async get(id: string, requestOptions?: PhoneNumbers.RequestOptions): Promise<Vapi.PhoneNumbersGetResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                `phone-number/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.2.1",
                "User-Agent": "@vapi-ai/server-sdk/0.2.1",
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
            return _response.body as Vapi.PhoneNumbersGetResponse;
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
                throw new errors.VapiTimeoutError("Timeout exceeded when calling GET /phone-number/{id}.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} id
     * @param {PhoneNumbers.RequestOptions} requestOptions - Request-specific configuration.
     */
    public async delete(
        id: string,
        requestOptions?: PhoneNumbers.RequestOptions
    ): Promise<Vapi.PhoneNumbersDeleteResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                `phone-number/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.2.1",
                "User-Agent": "@vapi-ai/server-sdk/0.2.1",
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
            return _response.body as Vapi.PhoneNumbersDeleteResponse;
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
                throw new errors.VapiTimeoutError("Timeout exceeded when calling DELETE /phone-number/{id}.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} id
     * @param {Vapi.UpdatePhoneNumberDto} request
     * @param {PhoneNumbers.RequestOptions} requestOptions - Request-specific configuration.
     */
    public async update(
        id: string,
        request: Vapi.UpdatePhoneNumberDto = {},
        requestOptions?: PhoneNumbers.RequestOptions
    ): Promise<Vapi.PhoneNumbersUpdateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                `phone-number/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vapi-ai/server-sdk",
                "X-Fern-SDK-Version": "0.2.1",
                "User-Agent": "@vapi-ai/server-sdk/0.2.1",
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
            return _response.body as Vapi.PhoneNumbersUpdateResponse;
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
                throw new errors.VapiTimeoutError("Timeout exceeded when calling PATCH /phone-number/{id}.");
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
