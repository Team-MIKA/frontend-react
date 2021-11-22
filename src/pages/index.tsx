import { Box, Container, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Box pt={50}>
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
            <SimpleGrid minChildWidth="200px" spacing="40px">
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                >
                    This could be the first integration
                </Box>
            </SimpleGrid>
        </Box>
    );
};

export default Home;
