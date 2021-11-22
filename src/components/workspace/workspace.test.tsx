import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Router from "next/router";
import { RecoilRoot } from "recoil";
import { Workspace, WorkspaceListState } from "@store/index";
import DeleteWorkspaceModal from "./delete-workspace-modal";
import WorkspaceCard from "./workspace-card";
import WorkspaceList from "./workspace-list";

jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("WorkspaceCard", () => {
    const workspace = { title: "test", id: "123" } as Workspace;

    beforeEach(() => {
        render(
            <RecoilRoot>
                <WorkspaceCard workspace={workspace}></WorkspaceCard>
            </RecoilRoot>
        );
    });

    test("Have title equal to input workspace title", () => {
        const heading = screen.getByRole("heading");
        expect(heading).toHaveTextContent(workspace.title);
    });

    test("When clicking card, url changes", () => {
        const link = screen.getByText(workspace.title);
        userEvent.click(link);

        expect(Router).toMatchObject({ asPath: "/workspace/" + workspace.id });
    });

    test("Have delete workspace button", () => {
        const button = screen.getByTestId("removeWorkspace");
        expect(button).toBeInTheDocument;
    });

    test("When clicking delete btn open remove workspace modal", () => {
        const button = screen.getByTestId("removeWorkspace");
        userEvent.click(button);

        const modalTitle = screen.getByTestId("deleteWorkspaceModal");

        expect(modalTitle).toBeInTheDocument;
    });
});

describe("DeleteWorkspaceModal", () => {
    const workspace = { title: "test", id: "123" } as Workspace;
    const onClose = jest.fn();

    beforeEach(() => {
        render(
            <RecoilRoot>
                <DeleteWorkspaceModal workspace={workspace} isOpen={true} onClose={onClose}></DeleteWorkspaceModal>
            </RecoilRoot>
        );
    });

    test("Have cancel button", () => {
        const cancelBtn = screen.getByTestId("cancel");
        expect(cancelBtn).toBeInTheDocument;
    });

    test("Have delete button", () => {
        const deleteBtn = screen.getByTestId("delete");
        expect(deleteBtn).toBeInTheDocument;
    });

    test("Display workspace title", () => {
        const workspaceTitle = screen.findByText("delete" + workspace.title);
        expect(workspaceTitle).toBeInTheDocument;
    });
});

describe("WorkspaceList", () => {
    const workspace1 = { title: "hest", id: "123" } as Workspace;
    const workspace2 = { title: "ged", id: "321" } as Workspace;

    const initializeState = ({ set }: any) => {
        set(WorkspaceListState, [workspace1, workspace2]);
    };

    beforeEach(() => {
        render(
            <RecoilRoot initializeState={initializeState}>
                <WorkspaceList></WorkspaceList>
            </RecoilRoot>
        );
    });

    test("Display title of workspace1", () => {
        const workspaceTitle1 = screen.findByText(workspace1.title);

        expect(workspaceTitle1).toBeInTheDocument;
    });
    test("Display title of workspace2", () => {
        const workspaceTitle2 = screen.findByText(workspace2.title);
        expect(workspaceTitle2).toBeInTheDocument;
    });
});
