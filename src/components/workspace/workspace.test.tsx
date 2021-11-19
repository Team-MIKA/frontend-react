import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import { Workspace } from "@store/index";
import DeleteWorkspaceModal from "./delete-workspace-modal";
import WorkspaceCard from "./workspace-card";

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

    test("Have delete workspace button", () => {
        const button = screen.getByTestId("removeWorkspace");
        expect(button).toBeInTheDocument;
    });

    test("click delete button renders modal", () => {
        const button = screen.getByTestId("removeWorkspace");
        userEvent.click(button);

        const modal = screen.getByTestId("deleteWorkspaceModal");
        expect(modal).toBeVisible;
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
        const cancelBtn = screen.getByRole("cancel");
        expect(cancelBtn).toBeInTheDocument;
    });

    test("Have delete button", () => {
        const deleteBtn = screen.getByRole("delete");
        expect(deleteBtn).toBeInTheDocument;
    });
});
