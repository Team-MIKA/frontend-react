import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

function LiveClock() {
    function currentTime() {
        return new Date().toLocaleTimeString("en-UK");
    }
    const now = currentTime();
    const [time, setTime] = useState(now);
    useEffect(() => {
        setInterval(() => {
            setTime(currentTime);
        }, 100);
    }, []);
    return (
        <>
            <Heading suppressHydrationWarning size={"md"}>
                {time}
            </Heading>
        </>
    );
}

export default LiveClock;
