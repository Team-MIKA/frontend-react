import { atom } from "recoil";

export const publishId = atom({
    key: "publishId",
    default: { id: "" } as Item,
});

// https://www.youtube.com/watch?v=EsIYiRpDZuA
export interface Item {
    id: string;
}
