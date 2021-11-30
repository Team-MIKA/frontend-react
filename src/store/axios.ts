import axios from "axios";

export const config = {
    port: process.env.NEXT_PUBLIC_PORT || 3000,
    baseUrl: process.env.NEXT_PUBLIC_PORT || "localhost",
    get host(): string {
        return `https://${this.baseUrl}:${this.port}`;
    },
};
const instance = axios.create({
    baseURL: `${config.host}/api`,
});

export default instance;
