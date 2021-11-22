import React from "react";
import { render, screen } from "@testing-library/react";
import TimeSmartCard from "@components/time-smart/time-smart-card";

test("TimerModal should render button with text 'test1'", () => {
    render(<TimeSmartCard categories={["test1"]} />);
    const regButtons = screen.getAllByRole("reg-button");
    expect(regButtons[0]).toHaveTextContent("test1");
});

test("TimerModal should render 2 buttons on input ['1', '2']", () => {
    render(<TimeSmartCard categories={["1", "2"]} />);
    const regButtons = screen.getAllByRole("reg-button");
    expect(regButtons).toHaveLength(2);
});

test("TimerModal should render correct labels on multiple buttons", () => {
    render(<TimeSmartCard categories={["0", "1"]} />);
    const regButtons = screen.getAllByRole("reg-button");
    expect(regButtons[0]).toHaveTextContent("0");
    expect(regButtons[1]).toHaveTextContent("1");
});
