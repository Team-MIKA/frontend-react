import React from "react";
import { Box, Heading, Spacer, Flex, useColorModeValue } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import AddButton from "@components/time-smart/add-button";
import LiveClock from "@components/time-smart/live-clock";
import { categoriesState } from "@components/time-smart/registration.store";
import RegistrationButtons from "@components/time-smart/regitstration-buttons";
function TimeSmartCard() {
    const categories = useRecoilValue(categoriesState);

    return (
        <Box
            borderWidth="5px"
            borderRadius="lg"
            borderColor={useColorModeValue("#ffffff40", "whiteAlpha.200")}
            overflow="hidden"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
            <Box m={"4"} p={"2"}>
                <Flex>
                    <Heading size="lg">TimeSmart</Heading>
                    <Spacer />
                    <AddButton />
                </Flex>
                <Box p={"2"}>
                    <LiveClock />
                </Box>
                <RegistrationButtons buttons={categories} />
            </Box>
        </Box>
    );
}

export default TimeSmartCard;
