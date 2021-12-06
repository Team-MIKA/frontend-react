import React, { useEffect } from "react";
import { Box, Heading, Spacer, Flex, useColorModeValue } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import AddButton from "@components/widgets/time-smart/add-button";
import LiveClock from "@components/widgets/time-smart/live-clock";
import { categoriesState } from "@components/widgets/time-smart/registration.store";
import RegistrationButtons from "@components/widgets/time-smart/regitstration-buttons";
import { TimeSmartService } from "../../../services/openapi";
function TimeSmartCard() {
    const [categories, setCategories] = useRecoilState(categoriesState);

    useEffect(() => {
        TimeSmartService.getTimeSmart()
            .then((cats) => {
                setCategories(cats);
            })
            .catch(() => {
                setCategories([]);
            });
    }, [setCategories]);

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
                <RegistrationButtons buttonCategories={categories} />
            </Box>
        </Box>
    );
}

export default TimeSmartCard;
