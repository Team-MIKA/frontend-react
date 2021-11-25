import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { publishId } from "@store/order";

const TestBox = ({ title }: { title: string }) => {
    const itemState = useRecoilValue(publishId);

    return (
        <Box border="2px solid gray" borderRadius="md">
            <Heading> {title}</Heading>
            <Text>{itemState.id}</Text>
        </Box>
    );
};

export default TestBox;
