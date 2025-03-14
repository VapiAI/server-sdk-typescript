/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Calls } from "./api/resources/calls/client/Client";
import { Assistants } from "./api/resources/assistants/client/Client";
import { PhoneNumbers } from "./api/resources/phoneNumbers/client/Client";
import { Squads } from "./api/resources/squads/client/Client";
import { KnowledgeBases } from "./api/resources/knowledgeBases/client/Client";
import { Blocks } from "./api/resources/blocks/client/Client";
import { Tools } from "./api/resources/tools/client/Client";
import { Files } from "./api/resources/files/client/Client";
import { Analytics } from "./api/resources/analytics/client/Client";
import { Logs } from "./api/resources/logs/client/Client";
import { TestSuites } from "./api/resources/testSuites/client/Client";
import { TestSuiteTests } from "./api/resources/testSuiteTests/client/Client";
import { TestSuiteRuns } from "./api/resources/testSuiteRuns/client/Client";

export declare namespace VapiClient {
    interface Options {
        environment?: core.Supplier<environments.VapiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
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

export class VapiClient {
    constructor(protected readonly _options: VapiClient.Options) {}

    protected _calls: Calls | undefined;

    public get calls(): Calls {
        return (this._calls ??= new Calls(this._options));
    }

    protected _assistants: Assistants | undefined;

    public get assistants(): Assistants {
        return (this._assistants ??= new Assistants(this._options));
    }

    protected _phoneNumbers: PhoneNumbers | undefined;

    public get phoneNumbers(): PhoneNumbers {
        return (this._phoneNumbers ??= new PhoneNumbers(this._options));
    }

    protected _squads: Squads | undefined;

    public get squads(): Squads {
        return (this._squads ??= new Squads(this._options));
    }

    protected _knowledgeBases: KnowledgeBases | undefined;

    public get knowledgeBases(): KnowledgeBases {
        return (this._knowledgeBases ??= new KnowledgeBases(this._options));
    }

    protected _blocks: Blocks | undefined;

    public get blocks(): Blocks {
        return (this._blocks ??= new Blocks(this._options));
    }

    protected _tools: Tools | undefined;

    public get tools(): Tools {
        return (this._tools ??= new Tools(this._options));
    }

    protected _files: Files | undefined;

    public get files(): Files {
        return (this._files ??= new Files(this._options));
    }

    protected _analytics: Analytics | undefined;

    public get analytics(): Analytics {
        return (this._analytics ??= new Analytics(this._options));
    }

    protected _logs: Logs | undefined;

    public get logs(): Logs {
        return (this._logs ??= new Logs(this._options));
    }

    protected _testSuites: TestSuites | undefined;

    public get testSuites(): TestSuites {
        return (this._testSuites ??= new TestSuites(this._options));
    }

    protected _testSuiteTests: TestSuiteTests | undefined;

    public get testSuiteTests(): TestSuiteTests {
        return (this._testSuiteTests ??= new TestSuiteTests(this._options));
    }

    protected _testSuiteRuns: TestSuiteRuns | undefined;

    public get testSuiteRuns(): TestSuiteRuns {
        return (this._testSuiteRuns ??= new TestSuiteRuns(this._options));
    }
}
