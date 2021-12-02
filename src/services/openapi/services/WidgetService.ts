/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WidgetDTO } from "../models/WidgetDTO";
import type { CancelablePromise } from "../core/CancelablePromise";
import { request as __request } from "../core/request";

export class WidgetService {
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postWidget(requestBody?: WidgetDTO): CancelablePromise<any> {
        return __request({
            method: "POST",
            path: `/Widget/CreateWidget`,
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getWidget(): CancelablePromise<any> {
        return __request({
            method: "GET",
            path: `/Widget/ListWidgets`,
        });
    }

    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static deleteWidget(id: string): CancelablePromise<any> {
        return __request({
            method: "DELETE",
            path: `/Widget/DeleteWidget/${id}`,
        });
    }
}
