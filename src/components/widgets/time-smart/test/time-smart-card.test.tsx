import React from "react";
import { render, screen } from "@testing-library/react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { categoriesState } from "@components/widgets/time-smart/registration.store";
import TimeSmartCard from "@components/widgets/time-smart/time-smart-card";

test("TimerModal should render button with text 'test1'", () => {
    const initializeState = ({ set }: MutableSnapshot) => {
        set(categoriesState, ["test1"]);
    };

    render(
        <RecoilRoot initializeState={initializeState}>
            <TimeSmartCard />
        </RecoilRoot>
    );
    const regButtons = screen.getAllByRole("reg-button");
    expect(regButtons[0]).toHaveTextContent("test1");
});

test("TimerModal should render 2 buttons on input ['1', '2']", () => {
    const initializeState = ({ set }: MutableSnapshot) => {
        set(categoriesState, ["1", "2"]);
    };

    render(
        <RecoilRoot initializeState={initializeState}>
            <TimeSmartCard />
        </RecoilRoot>
    );
    const regButtons = screen.getAllByRole("reg-button");
    expect(regButtons).toHaveLength(2);
});

test("TimerModal should render correct labels on multiple buttons", () => {
    const initializeState = ({ set }: MutableSnapshot) => {
        set(categoriesState, ["0", "1"]);
    };

    render(
        <RecoilRoot initializeState={initializeState}>
            <TimeSmartCard />
        </RecoilRoot>
    );
    const regButtons = screen.getAllByRole("reg-button");
    expect(regButtons[0]).toHaveTextContent("0");
    expect(regButtons[1]).toHaveTextContent("1");
});
