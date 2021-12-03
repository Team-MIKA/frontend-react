import { Box, Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { log } from "../helpers/logger";
import { absoluteUrl } from "../lib";
import instance from "../store/axios";

const Home: NextPage<{ origin: string }> = ({ origin }) => {
    instance.defaults.baseURL = origin + "/api";
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
        </Box>
    );
};

Home.getInitialProps = async ({ req }) => {
    log(absoluteUrl(req));
    const { host } = absoluteUrl(req);
    const origin = "http://" + host;
    return { origin };
};

export default Home;
