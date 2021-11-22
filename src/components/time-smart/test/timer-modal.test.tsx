import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TimerModal from "@components/time-smart/timer-modal";

test("TimerModal should render with text 'test1'", () => {
    render(<TimerModal open={true} onClose={jest.fn()} text={"test1"} />);
    const title = screen.getByTestId("modal-header").textContent;
    expect(title).toBe("test1");
});

test("TimerModal NOT should render if open is false", () => {
    render(<TimerModal open={false} onClose={jest.fn()} text={"test1"} />);
    const modal = screen.queryByTestId("modal");
    const modalHeader = screen.queryByTestId("modal-header");
    expect(modal).not.toBeInTheDocument();
    expect(modalHeader).not.toBeInTheDocument();
});

test("TimerModal should call onClose function once", () => {
    const onCloseFunc = jest.fn();
    render(<TimerModal open={true} onClose={onCloseFunc} text={"test1"} />);
    const doneButton = screen.getByRole("done-button");
    userEvent.click(doneButton);
    expect(onCloseFunc).toHaveBeenCalledTimes(1);
});
