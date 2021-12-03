import { atom } from "recoil";
import { WidgetDTO } from "@generated/models/WidgetDTO";
import { WorkspaceDTO } from "@generated/models/WorkspaceDTO";

export const WorkspaceListState = atom({
    key: "workspaces",
    default: [] as WorkspaceDTO[],
});

export const WorkspaceState = atom({
    key: "workspace",
    default: { id: "", title: "", widgets: [] as WidgetDTO[] } as WorkspaceDTO,
});

export const HideOptionsState = atom({
    key: "edit",
    default: true,
});
