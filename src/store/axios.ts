import axios from "axios";

export const config = {
    port: process.env.PORT || 3000,
    baseUrl: process.env.HOSTNAME || "localhost",
    get host(): string {
        return `http://${this.baseUrl}:${this.port}`;
    },
};
const instance = axios.create({
    baseURL: `${config.host}/api`,
});

export default instance;
