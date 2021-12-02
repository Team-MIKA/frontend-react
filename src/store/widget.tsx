import { atom } from "recoil";

export interface Widget {
    title: string;
    id: string;
}

export const WidgetListState = atom({
    key: "widgets",
    default: [] as Widget[],
});
