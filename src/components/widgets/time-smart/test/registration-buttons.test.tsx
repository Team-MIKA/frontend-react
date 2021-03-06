import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import RegistrationButtons from "@components/widgets/time-smart/regitstration-buttons";

describe("Registration buttons shuold", () => {
    beforeEach(() => {
        const buttonArray = ["hej", "med", "dig"];

        render(
            <RecoilRoot>
                <RegistrationButtons buttons={buttonArray} order={{ id: "0", title: "test" }} />
            </RecoilRoot>
        );
    });

    test("receive an array of strings", () => {
        const buttons = screen.getAllByRole("reg-button");
        expect(buttons[0]).toHaveTextContent("hej");
        expect(buttons[0]).toBeEnabled();
        expect(buttons.length).toBe(3);
    });

    test("open a modal when clicked", () => {
        const button = screen.getByText("hej");
        let modalHeader = screen.queryByTestId("modal-header");
        expect(modalHeader).not.toBeInTheDocument();
        userEvent.click(button);
        modalHeader = screen.queryByTestId("modal-header");
        expect(modalHeader).toBeInTheDocument();
    });

    test("should be disabled if a order is not selected", () => {
        const { getByText } = render(
            <RecoilRoot>
                <RegistrationButtons buttons={["test"]} order={null} />
            </RecoilRoot>
        );
        const button = getByText("test");
        expect(button).toBeDisabled();
    });
});
