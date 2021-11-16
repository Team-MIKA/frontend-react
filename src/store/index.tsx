import { atom } from "recoil";

export const GroupMemberState = atom({
    key: "groupMembers",
    default: [] as string[],
});

export interface Card {
    title: string;
    id: string;
}

export interface Workspace {
    id: string;
    title: string;
    cards: Card[];
}

export const WorkspaceListState = atom({
    key: "workspaces",
    default: [] as Workspace[],
});

export const WorkspaceState = atom({
    key: "workspace",
    default: { id: "", title: "", cards: [] as Card[] } as Workspace,
});
