import React from "react";
import { Heading } from "@chakra-ui/react";
import Clock from "react-live-clock";

function LiveClock() {
    return (
        <>
            <Heading size={"md"}>
                <Clock format={"HH:mm:ss"} ticking={true} timezone={"Europe/Copenhagen"} />
            </Heading>
        </>
    );
}

export default LiveClock;
