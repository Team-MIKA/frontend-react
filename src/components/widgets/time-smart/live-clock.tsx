import React, { FC, useCallback, useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

interface ClockProps {
    format: (date: Date) => string;
}

export const TimeClock = () => {
    return (
        <Heading data-testid={"time"} suppressHydrationWarning size={"md"}>
            <LiveClock format={(date) => date.toLocaleTimeString("en-UK")} />
        </Heading>
    );
};

const LiveClock: FC<ClockProps> = ({ format }) => {
    const currentTime = useCallback(() => format(new Date()), [format]);
    const now = currentTime();
    const [time, setTime] = useState<string>(now);
    useEffect(() => {
        let timer = setInterval(() => {
            setTime(currentTime());
        }, 100);
        return () => clearInterval(timer);
    }, [currentTime, setTime]);
    return <>{time}</>;
};

export default LiveClock;
