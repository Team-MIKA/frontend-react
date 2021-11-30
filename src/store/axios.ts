import axios from "axios";

export const config = {
    host: `http://${process.env.NEXT_PUBLIC_HOSTNAME || "localhost"}:${process.env.NEXT_PUBLIC_PORT || 3000}`,
};

export const refresh = () => {
    instance = axios.create({
        baseURL: `${config.host}/api`,
    });
};

let instance = axios.create({
    baseURL: `${config.host}/api`,
});

export default instance;
