import axios from "axios";

export const config = {
    host: `https://${process.env.NEXT_PUBLIC_HOSTNAME || "localhost"}:${process.env.NEXT_PUBLIC_PORT || 3000}`,
};

const instance = axios.create({
    baseURL: `${config.host}/api`,
});

export default instance;
