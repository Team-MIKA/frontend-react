import React from "react";
import { Box, Heading, Spacer, Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import AddButton from "@components/widgets/time-smart/add-button";
import { TimeClock } from "@components/widgets/time-smart/live-clock";
import { categoriesState } from "@components/widgets/time-smart/registration.store";
import RegistrationButtons from "@components/widgets/time-smart/regitstration-buttons";
import { SubscriberComponent } from "@lib/Widget";
import { Order } from "@store/order";
const TimeSmartCard: SubscriberComponent<Order> = ({ item }) => {
    const categories = useRecoilValue(categoriesState);

    return (
        <Box m={"4"} p={"2"} minW={"600px"}>
            <Flex minH={"55px"}>
                <Heading size="lg">TimeSmart</Heading>
                <Spacer />
                <AddButton />
            </Flex>
            <Box p={"2"}>
                <TimeClock />
            </Box>
            <RegistrationButtons buttons={categories} order={item} />
        </Box>
    );
};

export default TimeSmartCard;
