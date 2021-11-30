import { Box, Container, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import TimeSmartCard from "@components/time-smart/time-smart-card";

const Home: NextPage = () => {
    return (
        <Box>
            <Container>
                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Business assistant
                        </Heading>
                        <p>By team MIKA | Martin, Mads, Ida, Kaare, Kasper & Anders</p>
                    </Box>
                </Box>
            </Container>
            <SimpleGrid minChildWidth="25%" spacing="40px">
                <Box
                    maxW="100%"
                    borderRadius="lg"
                    textAlign="center"
                    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                >
                    This could be the first integration
                </Box>
                <TimeSmartCard />
            </SimpleGrid>
        </Box>
    );
};

export default Home;
