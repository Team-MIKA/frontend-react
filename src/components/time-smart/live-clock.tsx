import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

function LiveClock() {
    function currentTime() {
        return new Date().toLocaleTimeString("en-UK");
    }
    const now = currentTime();
    const [time, setTime] = useState(now);
    useEffect(() => {
        let isMounted = true;
        let timer = setInterval(() => {
            if (isMounted) {
                setTime(currentTime);
            }
        }, 100);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <Heading data-testid={"time"} suppressHydrationWarning size={"md"}>
                {time}
            </Heading>
        </>
    );
}

export default LiveClock;
