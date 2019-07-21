// tslint:disable
/**
 * Connthass API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Event,
    EventFromJSON,
    EventToJSON,
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    InlineObject1,
    InlineObject1FromJSON,
    InlineObject1ToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
} from '../models';

export interface AddBookmarkRequest {
    eventId: string;
}

export interface AddEventRequest {
    Event: Event;
}

export interface DeleteEventRequest {
    eventId: number;
}

export interface EntryEventRequest {
    eventId: number;
    InlineObject1?: InlineObject1;
}

export interface GetEventByIdRequest {
    eventId: number;
    fields?: string;
}

export interface SearchEventsRequest {
    fields?: string;
    query?: number;
    page?: number;
    perPage?: number;
}

export interface UpdateEventRequest {
    eventId: number;
    InlineObject?: InlineObject;
}

/**
 * no description
 */
export class EventApi extends runtime.BaseAPI {

    /**
     * bookmarks関連テーブルにレコードを追加します
     * イベントを「お気に入り」に追加する
     */
    async addBookmarkRaw(requestParameters: AddBookmarkRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling addBookmark.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/event/{eventId}/bookmark`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * bookmarks関連テーブルにレコードを追加します
     * イベントを「お気に入り」に追加する
     */
    async addBookmark(requestParameters: AddBookmarkRequest): Promise<void> {
        await this.addBookmarkRaw(requestParameters);
    }

    /**
     * イベントを追加する
     */
    async addEventRaw(requestParameters: AddEventRequest): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters.Event === null || requestParameters.Event === undefined) {
            throw new runtime.RequiredError('Event','Required parameter requestParameters.Event was null or undefined when calling addEvent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/event`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EventToJSON(requestParameters.Event),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * イベントを追加する
     */
    async addEvent(requestParameters: AddEventRequest): Promise<Event> {
        const response = await this.addEventRaw(requestParameters);
        return await response.value();
    }

    /**
     * 特定のイベントを削除する
     */
    async deleteEventRaw(requestParameters: DeleteEventRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling deleteEvent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/event/{eventId}`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 特定のイベントを削除する
     */
    async deleteEvent(requestParameters: DeleteEventRequest): Promise<void> {
        await this.deleteEventRaw(requestParameters);
    }

    /**
     * entry_eventsの関連テーブルにレコードを追加する
     * 参加者を追加する
     */
    async entryEventRaw(requestParameters: EntryEventRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling entryEvent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/event/{eventId}/entry`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject1ToJSON(requestParameters.InlineObject1),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * entry_eventsの関連テーブルにレコードを追加する
     * 参加者を追加する
     */
    async entryEvent(requestParameters: EntryEventRequest): Promise<InlineResponse200> {
        const response = await this.entryEventRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a single Event
     * IDからイベントを取得する
     */
    async getEventByIdRaw(requestParameters: GetEventByIdRequest): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling getEventById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.fields !== undefined) {
            queryParameters['fields'] = requestParameters.fields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/event/{eventId}`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Returns a single Event
     * IDからイベントを取得する
     */
    async getEventById(requestParameters: GetEventByIdRequest): Promise<Event> {
        const response = await this.getEventByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * 記事の一覧を作成日時の降順で返します。
     * イベントを検索する
     */
    async searchEventsRaw(requestParameters: SearchEventsRequest): Promise<runtime.ApiResponse<Array<Event>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.fields !== undefined) {
            queryParameters['fields'] = requestParameters.fields;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['perPage'] = requestParameters.perPage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EventFromJSON));
    }

    /**
     * 記事の一覧を作成日時の降順で返します。
     * イベントを検索する
     */
    async searchEvents(requestParameters: SearchEventsRequest): Promise<Array<Event>> {
        const response = await this.searchEventsRaw(requestParameters);
        return await response.value();
    }

    /**
     * 特定のイベントを更新する
     */
    async updateEventRaw(requestParameters: UpdateEventRequest): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling updateEvent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/event/{eventId}`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.InlineObject),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * 特定のイベントを更新する
     */
    async updateEvent(requestParameters: UpdateEventRequest): Promise<Event> {
        const response = await this.updateEventRaw(requestParameters);
        return await response.value();
    }

}
