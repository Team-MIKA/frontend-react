import { atom } from "recoil";
import { WorkspaceDto } from "@generated/models/WorkspaceDto";

export const WorkspaceListState = atom({
    key: "workspaces",
    default: null as WorkspaceDto[],
});

export const WorkspaceState = atom({
    key: "workspace",
    default: { Dto: { id: "", title: "" } } as WorkspaceDto,
});

export const HideOptionsState = atom({
    key: "edit",
    default: true,
});
