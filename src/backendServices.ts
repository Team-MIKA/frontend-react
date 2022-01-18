import { OpenAPI } from "@generated/core/OpenAPI";

export const setServerUrl = (serverURL = "http://localhost:5000") => {
    OpenAPI.BASE = serverURL;
};
