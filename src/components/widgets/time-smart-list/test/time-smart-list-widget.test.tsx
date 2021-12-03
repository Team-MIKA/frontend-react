import React from "react";
import { render, screen } from "@testing-library/react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { registrationsState } from "@components/widgets/time-smart-list/logged-registrations.store";
import TimeSmartList from "@components/widgets/time-smart-list/time-smart-list-widget";
import { categoriesState } from "@components/widgets/time-smart/registration.store";

let rowPause;
let rowMeeting;

beforeEach(() => {
    rowPause = {
        category: "Pause",
        startTime: new Date(0),
        endTime: new Date(0),
        orderId: "5",
    };
    rowMeeting = {
        category: "Meeting",
        startTime: new Date(0),
        endTime: new Date(0),
        orderId: "10",
    };
});

test("TimeSmartList should render registration with category 'Pause'", () => {
    const initializeState = ({ set }: MutableSnapshot) => {
        set(registrationsState, [rowPause]);
    };
    render(
        <RecoilRoot initializeState={initializeState}>
            <TimeSmartList />
        </RecoilRoot>
    );
    const cells = screen.getAllByRole("cell");
    expect(cells[0]).toHaveTextContent("Pause");
});

test("TimeSmartList should render 2 rows when, given 2 inputs", () => {
    const initializeState = ({ set }: MutableSnapshot) => {
        set(categoriesState, [rowPause, rowMeeting]);
    };

    render(
        <RecoilRoot initializeState={initializeState}>
            <TimeSmartList />
        </RecoilRoot>
    );
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(2);
});
