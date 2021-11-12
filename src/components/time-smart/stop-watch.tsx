import React from "react";
import { Heading } from "@chakra-ui/react";
import ReactStopwatch from "react-stopwatch";

function StopWatch() {
    return (
        <>
            <ReactStopwatch
                seconds={0}
                minutes={0}
                hours={0}
                onChange={() => {
                    // do something
                }}
                onCallback={() => console.log("Finish")}
                render={({ formatted }) => {
                    return (
                        <>
                            <Heading size={"lg"}>{formatted}</Heading>
                        </>
                    );
                }}
            />
        </>
    );
}

export default StopWatch;
