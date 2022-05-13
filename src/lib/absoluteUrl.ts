// @ts-ignore
import { IncomingMessage } from "http";

export const absoluteUrl = (req: IncomingMessage | undefined, localhostAddress = "localhost:3000") => {
    let _a;
    let host =
        // @ts-ignore
        (((_a = req) === null || _a === void 0 ? void 0 : _a.headers) ? req.headers.host : window.location.host) ||
        localhostAddress;
    let protocol = /^localhost(:\d+)?$/.test(host) ? "http:" : "https:";
    if (req && req.headers["x-forwarded-host"] && typeof req.headers["x-forwarded-host"] === "string") {
        host = req.headers["x-forwarded-host"];
    }
    if (req && req.headers["x-forwarded-proto"] && typeof req.headers["x-forwarded-proto"] === "string") {
        protocol = req.headers["x-forwarded-proto"] + ":";
    }
    return {
        protocol: protocol,
        host: host,
        origin: protocol + "//" + host,
    };
};
