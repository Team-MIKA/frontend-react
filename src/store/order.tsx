import { atom } from "recoil";

export const publishId = atom({
    key: "publishId",
    default: { id: "" } as Order,
});

// https://www.youtube.com/watch?v=EsIYiRpDZuA
export interface Order {
    id: string;
}
