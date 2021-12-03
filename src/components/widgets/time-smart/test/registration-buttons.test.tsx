import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegistrationButtons from "@components/widgets/time-smart/regitstration-buttons";

beforeEach(() => {
    const buttonArray = ["hej", "med", "dig"];
    act(() => {
        render(<RegistrationButtons buttons={buttonArray} />);
    });
});

test("Registration buttons should receive an array of strings", () => {
    const buttons = screen.getAllByRole("reg-button");
    expect(buttons[0]).toHaveTextContent("hej");
    expect(buttons[0]).toBeEnabled();
    expect(buttons.length).toBe(3);
});

test("Registration buttons should open a modal when clicked", () => {
    const button = screen.getByText("hej");
    let modalHeader = screen.queryByTestId("modal-header");
    expect(modalHeader).not.toBeInTheDocument();
    userEvent.click(button);
    modalHeader = screen.queryByTestId("modal-header");
    expect(modalHeader).toBeInTheDocument();
});
