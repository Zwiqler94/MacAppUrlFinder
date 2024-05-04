import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'icnfndr/4 (api/6.1.1)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * List all public icon sets in descending order of when they were published.
   *
   * @summary List all public icon sets
   * @throws FetchError<400, types.GettingStartedWithYourApi1Response400> 400
   */
  gettingStartedWithYourApi1(metadata?: types.GettingStartedWithYourApi1MetadataParam): Promise<FetchResponse<200, types.GettingStartedWithYourApi1Response200>> {
    return this.core.fetch('/v4/iconsets', 'get', metadata);
  }

  /**
   * List public icon sets in a category in descending order of when they were published.
   *
   * @summary List icon sets in a category
   * @throws FetchError<400, types.ListIconSetsInACategoryResponse400> 400
   */
  listIconSetsInACategory(metadata: types.ListIconSetsInACategoryMetadataParam): Promise<FetchResponse<200, types.ListIconSetsInACategoryResponse200>> {
    return this.core.fetch('/v4/categories/{category_identifier}/iconsets', 'get', metadata);
  }

  /**
   * List all public icon sets owned by a specific user in descending order of when they were
   * published.
   *
   * @summary List a user’s icon sets
   * @throws FetchError<400, types.ListAUsersIconSetsResponse400> 400
   */
  listAUsersIconSets(metadata: types.ListAUsersIconSetsMetadataParam): Promise<FetchResponse<200, types.ListAUsersIconSetsResponse200>> {
    return this.core.fetch('/v4/users/{user_id}/iconsets', 'get', metadata);
  }

  /**
   * List public icon sets of a specific style in descending order of when they were
   * published.
   *
   * @summary List icon sets of a specific style
   * @throws FetchError<400, types.ListIconSetsOfASpecificStyle1Response400> 400
   */
  listIconSetsOfASpecificStyle1(metadata: types.ListIconSetsOfASpecificStyle1MetadataParam): Promise<FetchResponse<200, types.ListIconSetsOfASpecificStyle1Response200>> {
    return this.core.fetch('/v4/styles/{style_identifier}/iconsets', 'get', metadata);
  }

  /**
   * List all public icon sets owned by a specific author in descending order of when they
   * were published.
   *
   * @summary List an author’s icon sets
   * @throws FetchError<400, types.ListAnAuthorsIconSetsResponse400> 400
   */
  listAnAuthorsIconSets(metadata: types.ListAnAuthorsIconSetsMetadataParam): Promise<FetchResponse<200, types.ListAnAuthorsIconSetsResponse200>> {
    return this.core.fetch('/v4/authors/{author_id}/iconsets', 'get', metadata);
  }

  /**
   * Get details about a specific icon set.
   *
   * @summary Get icon set details
   * @throws FetchError<400, types.GetIconSetDetailsResponse400> 400
   */
  getIconSetDetails(metadata: types.GetIconSetDetailsMetadataParam): Promise<FetchResponse<200, types.GetIconSetDetailsResponse200>> {
    return this.core.fetch('/v4/iconsets/{iconset_id}', 'get', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { GetIconSetDetailsMetadataParam, GetIconSetDetailsResponse200, GetIconSetDetailsResponse400, GettingStartedWithYourApi1MetadataParam, GettingStartedWithYourApi1Response200, GettingStartedWithYourApi1Response400, ListAUsersIconSetsMetadataParam, ListAUsersIconSetsResponse200, ListAUsersIconSetsResponse400, ListAnAuthorsIconSetsMetadataParam, ListAnAuthorsIconSetsResponse200, ListAnAuthorsIconSetsResponse400, ListIconSetsInACategoryMetadataParam, ListIconSetsInACategoryResponse200, ListIconSetsInACategoryResponse400, ListIconSetsOfASpecificStyle1MetadataParam, ListIconSetsOfASpecificStyle1Response200, ListIconSetsOfASpecificStyle1Response400 } from './types';
