import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

function StopWatch() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        let isMounted = true;
        let stopwatch = setInterval(() => {
            if (isMounted) {
                setTime((time) => time + 1);
            }
        }, 1000);
        return () => clearInterval(stopwatch);
    }, [time]);
    return (
        <>
            <Heading data-testid={"stopwatch"} suppressHydrationWarning size={"md"}>
                {new Date(time * 1000).toISOString().substr(11, 8)}
            </Heading>
        </>
    );
}

export default StopWatch;
