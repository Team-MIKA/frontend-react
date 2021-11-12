import React from "react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import LiveClock from "@components/time-smart/live-clock";
import RegistrationButtons from "@components/time-smart/regitstration-buttons";

function TimeSmartCard() {
    return (
        <Box borderWidth="5px" borderRadius="lg" borderColor={useColorModeValue("lightgray", "gray")} overflow="hidden">
            <Box m={"4"} p={"2"}>
                <Heading size="lg">TimeSmart</Heading>
                <Box p={"2"}>
                    <LiveClock />
                </Box>
                <RegistrationButtons buttons={["Kvalitet", "Fejl", "Møde", "Pause"]} />
            </Box>
        </Box>
    );
}

export default TimeSmartCard;
