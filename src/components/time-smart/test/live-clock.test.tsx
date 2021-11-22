import { act, render, screen } from "@testing-library/react";
import LiveClock from "@components/time-smart/live-clock";

beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date());
    jest.spyOn(global, "setInterval");

    act(() => {
        render(<LiveClock />);
    });
});

test("LiveClock should display current time", () => {
    let currentTimeString = new Date().toLocaleTimeString("en-UK");
    const time = screen.getByTestId("time");
    expect(time).toHaveTextContent(currentTimeString);
});

test("LiveClock should update time every 100ms", () => {
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 100);
});

test("LiveClock should update time (by 2 sec) after 2000ms", () => {
    let initTime = new Date();
    act(() => {
        jest.advanceTimersByTime(2000);
    });

    const time = screen.getByTestId("time");
    const timeAfterTwoSec = new Date(initTime.setSeconds(initTime.getSeconds() + 2));
    expect(time).toHaveTextContent(timeAfterTwoSec.toLocaleTimeString("en-UK"));
});
