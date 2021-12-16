import { atom } from "recoil";
import { WorkspaceDTO } from "@generated/models/WorkspaceDTO";

export const WorkspaceListState = atom({
    key: "workspaces",
    default: null as WorkspaceDTO[],
});

export const WorkspaceState = atom({
    key: "workspace",
    default: { dto: { id: "", title: "" } } as WorkspaceDTO,
});

export const HideOptionsState = atom({
    key: "edit",
    default: true,
});
