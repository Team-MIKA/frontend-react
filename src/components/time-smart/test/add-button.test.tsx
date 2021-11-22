import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddButton from "@components/time-smart/add-button";

beforeEach(() => {
    act(() => {
        render(<AddButton />);
    });
});

test("Add buttons should open a modal when clicked", () => {
    const button = screen.getByRole("add-button");
    let modalHeader = screen.queryByRole("modal-header");
    expect(modalHeader).not.toBeInTheDocument();
    userEvent.click(button);
    modalHeader = screen.queryByTestId("modal-header");
    expect(modalHeader).toBeInTheDocument();
});
