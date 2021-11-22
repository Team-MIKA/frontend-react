import React from "react";
import { act, render, screen } from "@testing-library/react";
import RegistrationButtons from "@components/time-smart/regitstration-buttons";

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

//test("Registration buttons should open a modal when clicked", () => {
//const button = screen.getAllByRole("reg-button")[0];
//userEvent.click(button);
//});
