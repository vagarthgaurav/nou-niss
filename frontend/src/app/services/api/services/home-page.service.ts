/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { HomePageListResponse } from '../models/home-page-list-response';
import { HomePageRequest } from '../models/home-page-request';
import { HomePageResponse } from '../models/home-page-response';

@Injectable({
  providedIn: 'root',
})
export class HomePageService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getHomePage
   */
  static readonly GetHomePagePath = '/home-page';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHomePage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHomePage$Response(params?: {

    /**
     * Sort by attributes ascending (asc) or descending (desc)
     */
    sort?: string;

    /**
     * Return page/pageSize (default: true)
     */
    'pagination[withCount]'?: boolean;

    /**
     * Page number (default: 0)
     */
    'pagination[page]'?: number;

    /**
     * Page size (default: 25)
     */
    'pagination[pageSize]'?: number;

    /**
     * Offset value (default: 0)
     */
    'pagination[start]'?: number;

    /**
     * Number of entities to return (default: 25)
     */
    'pagination[limit]'?: number;

    /**
     * Fields to return (ex: title,author)
     */
    fields?: string;

    /**
     * Relations to return
     */
    populate?: string;

    /**
     * Filters to apply
     */
    filters?: {
};

    /**
     * Locale to apply
     */
    locale?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<HomePageListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, HomePageService.GetHomePagePath, 'get');
    if (params) {
      rb.query('sort', params.sort, {});
      rb.query('pagination[withCount]', params['pagination[withCount]'], {});
      rb.query('pagination[page]', params['pagination[page]'], {});
      rb.query('pagination[pageSize]', params['pagination[pageSize]'], {});
      rb.query('pagination[start]', params['pagination[start]'], {});
      rb.query('pagination[limit]', params['pagination[limit]'], {});
      rb.query('fields', params.fields, {});
      rb.query('populate', params.populate, {});
      rb.query('filters', params.filters, {"style":"deepObject"});
      rb.query('locale', params.locale, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HomePageListResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHomePage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHomePage(params?: {

    /**
     * Sort by attributes ascending (asc) or descending (desc)
     */
    sort?: string;

    /**
     * Return page/pageSize (default: true)
     */
    'pagination[withCount]'?: boolean;

    /**
     * Page number (default: 0)
     */
    'pagination[page]'?: number;

    /**
     * Page size (default: 25)
     */
    'pagination[pageSize]'?: number;

    /**
     * Offset value (default: 0)
     */
    'pagination[start]'?: number;

    /**
     * Number of entities to return (default: 25)
     */
    'pagination[limit]'?: number;

    /**
     * Fields to return (ex: title,author)
     */
    fields?: string;

    /**
     * Relations to return
     */
    populate?: string;

    /**
     * Filters to apply
     */
    filters?: {
};

    /**
     * Locale to apply
     */
    locale?: string;
  },
  context?: HttpContext

): Observable<HomePageListResponse> {

    return this.getHomePage$Response(params,context).pipe(
      map((r: StrictHttpResponse<HomePageListResponse>) => r.body as HomePageListResponse)
    );
  }

  /**
   * Path part for operation putHomePage
   */
  static readonly PutHomePagePath = '/home-page';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putHomePage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putHomePage$Response(params: {
    body: HomePageRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<HomePageResponse>> {

    const rb = new RequestBuilder(this.rootUrl, HomePageService.PutHomePagePath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HomePageResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putHomePage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putHomePage(params: {
    body: HomePageRequest
  },
  context?: HttpContext

): Observable<HomePageResponse> {

    return this.putHomePage$Response(params,context).pipe(
      map((r: StrictHttpResponse<HomePageResponse>) => r.body as HomePageResponse)
    );
  }

  /**
   * Path part for operation deleteHomePage
   */
  static readonly DeleteHomePagePath = '/home-page';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteHomePage()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteHomePage$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, HomePageService.DeleteHomePagePath, 'delete');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteHomePage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteHomePage(params?: {
  },
  context?: HttpContext

): Observable<number> {

    return this.deleteHomePage$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
