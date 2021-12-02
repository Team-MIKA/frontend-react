/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WidgetDTO } from "../models/WidgetDTO";
import type { WorkspaceDTO } from "../models/WorkspaceDTO";
import type { CancelablePromise } from "../core/CancelablePromise";
import { request as __request } from "../core/request";

export class WorkspaceService {
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getWorkspace(): CancelablePromise<any> {
        return __request({
            method: "GET",
            path: `/Workspace`,
        });
    }

    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static getWorkspace1(id: string): CancelablePromise<any> {
        return __request({
            method: "GET",
            path: `/Workspace/GetById/${id}`,
        });
    }

    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postWorkspace(requestBody?: WorkspaceDTO): CancelablePromise<any> {
        return __request({
            method: "POST",
            path: `/Workspace/CreateWorkspace`,
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static deleteWorkspace(requestBody?: WorkspaceDTO): CancelablePromise<any> {
        return __request({
            method: "DELETE",
            path: `/Workspace/DeleteWorkspace`,
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postWorkspace1(id: string, requestBody?: WidgetDTO): CancelablePromise<any> {
        return __request({
            method: "POST",
            path: `/Workspace/AddWidgetToWorkspace/${id}`,
            body: requestBody,
            mediaType: "application/json",
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static deleteWorkspace1(id: string, requestBody?: string): CancelablePromise<any> {
        return __request({
            method: "DELETE",
            path: `/Workspace/RemoveWidgetFromWorkspace/${id}`,
            body: requestBody,
            mediaType: "application/json",
        });
    }
}
