import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Box>
            <Container>
                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Business Assistant
                        </Heading>
                        <p>By team MIKA |Anders, Mads, Martin, Ida, Kaare & Kasper </p>
                    </Box>
                </Box>
            </Container>
            <SimpleGrid minChildWidth="25%" spacing="40px"></SimpleGrid>
        </Box>
    );
};

export default Home;
