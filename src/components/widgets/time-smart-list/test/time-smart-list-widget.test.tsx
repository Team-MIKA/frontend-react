import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { registrationsState } from "@components/widgets/time-smart-list/logged-registrations.store";
import TimeSmartList from "@components/widgets/time-smart-list/time-smart-list-widget";
import { registration } from "@components/widgets/time-smart/registration";

describe("TimeSmart list", () => {
    const rowPause: registration = {
        category: "Pause",
        startTime: new Date(0),
        endTime: new Date(0),
        orderId: "5",
    };

    const rowMeeting: registration = {
        category: "Meeting",
        startTime: new Date(0),
        endTime: new Date(0),
        orderId: "10",
    };
    test("TimeSmartList should render registration with category 'Pause'", () => {
        render(
            <RecoilRoot initializeState={({ set }) => set(registrationsState, [rowPause])}>
                <TimeSmartList />
            </RecoilRoot>
        );
        const cells = screen.getAllByRole("cell");
        expect(cells[0]).toHaveTextContent("Pause");
    });

    test("TimeSmartList should render 2 rows when, given 2 inputs", () => {
        render(
            <RecoilRoot initializeState={({ set }) => set(registrationsState, [rowPause, rowMeeting])}>
                <TimeSmartList />
            </RecoilRoot>
        );
        const rows = screen.getAllByRole("rowgroup");

        expect(rows).toHaveLength(2);
    });
});
