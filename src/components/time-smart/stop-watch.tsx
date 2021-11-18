import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

function StopWatch() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(time + 1);
        }, 1000);
    }, [time]);
    return (
        <>
            <Heading suppressHydrationWarning size={"md"}>
                {new Date(time * 1000).toISOString().substr(14, 5)}
            </Heading>
        </>
    );
}

export default StopWatch;
