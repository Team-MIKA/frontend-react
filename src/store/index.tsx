import { atom } from "recoil";

export const GroupMemberState = atom({
    key: "groupMembers",
    default: [] as string[],
});

export interface Workspace {
    id: string;
    title: string;
}

export const WorkspaceState = atom({
    key: "workspaces",
    default: [] as Workspace[],
});
