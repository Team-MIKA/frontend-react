import React from "react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import LiveClock from "@components/time-smart/live-clock";

function TimeSmartCard() {
    return (
        <Box bg={useColorModeValue("pink", "teal")} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p={"2"}>
                <Heading size="lg">TimeSmart</Heading>
                <Box p={"2"}>
                    <LiveClock />
                </Box>
            </Box>
        </Box>
    );
}

export default TimeSmartCard;
