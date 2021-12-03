import React from "react";
import { Box, Heading, Spacer, Flex, useColorModeValue } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import AddButton from "@components/widgets/time-smart/add-button";
import LiveClock from "@components/widgets/time-smart/live-clock";
import { categoriesState } from "@components/widgets/time-smart/registration.store";
import RegistrationButtons from "@components/widgets/time-smart/regitstration-buttons";
function TimeSmartCard() {
    const categories = useRecoilValue(categoriesState);

    return (
        <Box
            borderWidth="5px"
            borderRadius="lg"
            borderColor={useColorModeValue("#ffffff40", "whiteAlpha.200")}
            overflow="hidden"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            minW={"600px"}
        >
            <Box m={"4"} p={"2"}>
                <Flex minH={"55px"}>
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
