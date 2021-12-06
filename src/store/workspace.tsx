import { atom } from "recoil";
import { Widget } from "@store/widget";

export interface Workspace {
    id: string;
    title: string;
    widgets: Widget[];
}

export const WorkspaceListState = atom({
    key: "workspaces",
    default: [] as Workspace[],
});

export const WorkspaceState = atom({
    key: "workspace",
    default: { id: "", title: "", widgets: [] as Widget[] } as Workspace,
});

export const HideOptionsState = atom({
    key: "edit",
    default: true,
});
