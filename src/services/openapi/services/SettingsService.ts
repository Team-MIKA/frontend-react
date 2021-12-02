/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SettingDTO } from "../models/SettingDTO";
import type { CancelablePromise } from "../core/CancelablePromise";
import { request as __request } from "../core/request";

export class SettingsService {
    /**
     * @returns SettingDTO Success
     * @throws ApiError
     */
    public static getSettings(): CancelablePromise<Array<SettingDTO>> {
        return __request({
            method: "GET",
            path: `/Settings`,
        });
    }

    /**
     * @param requestBody
     * @returns boolean Success
     * @throws ApiError
     */
    public static postSettings(requestBody?: SettingDTO): CancelablePromise<boolean> {
        return __request({
            method: "POST",
            path: `/Settings`,
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @param id
     * @returns SettingDTO Success
     * @throws ApiError
     */
    public static getSettings1(id: string): CancelablePromise<SettingDTO> {
        return __request({
            method: "GET",
            path: `/Settings/test/${id}`,
        });
    }
}
