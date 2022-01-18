import { OpenAPI } from "@generated/core/OpenAPI";


export const setServerUrl = (serverURL = "https://api.aaen.cloud") => {
    OpenAPI.BASE = serverURL;
};
