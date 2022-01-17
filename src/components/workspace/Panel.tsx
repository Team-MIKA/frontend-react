import React, { FC, ReactElement } from "react";
import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";

export const Panel: FC<{ buttons: ReactElement }> = ({ buttons, children }) => {
    return (
        <Flex
            borderWidth="5px"
            borderRadius="lg"
            borderColor={useColorModeValue("#ffffff40", "whiteAlpha.200")}
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
            <Box
                sx={{
                    "&::-webkit-scrollbar": {
                        width: "0px",
                        borderRadius: "8px",
                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                    },
                }}
                maxH={"375px"}
                overflowY={"scroll"}
            >
                {children}
            </Box>
            <Box width={"36px"}>
                <Stack direction="column" spacing={4} align={"center"}>
                    {buttons}
                </Stack>
            </Box>
        </Flex>
    );
};
