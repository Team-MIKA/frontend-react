import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import AddButton from "@components/widgets/time-smart/add-button";
import { HideOptionsState } from "@store/workspace";

beforeEach(() => {
    render(
        <RecoilRoot initializeState={({ set }) => set(HideOptionsState, false)}>
            <AddButton />
        </RecoilRoot>
    );
});

test("Add buttons should open a modal when clicked", () => {
    const button = screen.getByRole("add-button");
    let modalHeader = screen.queryByRole("modal-header");
    expect(modalHeader).not.toBeInTheDocument();
    userEvent.click(button);
    modalHeader = screen.queryByTestId("modal-header");
    expect(modalHeader).toBeInTheDocument();
});
