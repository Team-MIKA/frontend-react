import React from "react";
import Clock from "react-live-clock";

function LiveClock() {
    return (
        <>
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"Europe/Copenhagen"} />
        </>
    );
}

export default LiveClock;
