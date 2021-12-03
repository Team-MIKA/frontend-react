import { act, render, screen } from "@testing-library/react";
import StopWatch from "@components/widgets/time-smart/stop-watch";

beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date());
    jest.spyOn(global, "setInterval");

    act(() => {
        render(<StopWatch />);
    });
});

test("StopWatch should start at time 00:00:00", () => {
    const stopwatch = screen.getByTestId("stopwatch");
    expect(stopwatch).toHaveTextContent("00:00:00");
});

test("StopWatch should update time every 1000ms", () => {
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test("StopWatch should update time to '00:00:02' after 2000ms", () => {
    act(() => {
        jest.advanceTimersByTime(2000);
    });
    let stopwatch = screen.getByTestId("stopwatch");
    expect(stopwatch).toHaveTextContent("00:00:02");
});

test("StopWatch should update time to '00:00:03' after 3000ms", () => {
    act(() => {
        jest.advanceTimersByTime(3000);
    });
    let stopwatch = screen.getByTestId("stopwatch");
    expect(stopwatch).toHaveTextContent("00:00:03");
});

test("StopWatch should update time to '00:01:00' after 60.000ms", () => {
    act(() => {
        jest.advanceTimersByTime(60000);
    });
    let stopwatch = screen.getByTestId("stopwatch");
    expect(stopwatch).toHaveTextContent("00:01:00");
});

test("StopWatch should update time to '01:00:00' after 3.600.000ms", () => {
    act(() => {
        jest.advanceTimersByTime(3600000);
    });
    let stopwatch = screen.getByTestId("stopwatch");
    expect(stopwatch).toHaveTextContent("01:00:00");
});
