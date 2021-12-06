import { OpenAPI } from "@generated/core/OpenAPI";

export const setServerUrl = (serverURL = "http://api.timesmart.tech:5000") => {
    OpenAPI.BASE = serverURL;
};
