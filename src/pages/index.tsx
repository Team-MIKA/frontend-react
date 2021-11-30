import { IncomingMessage } from "http";
import { Box, Container, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import TimeSmartCard from "@components/time-smart/time-smart-card";
import { log } from "@helpers/logger";
import { config } from "@store/axios";

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

// @ts-ignore
const absoluteUrl = (req: IncomingMessage | undefined, localhostAddress = "localhost:3000") => {
    var _a;
    var host =
        // @ts-ignore
        (((_a = req) === null || _a === void 0 ? void 0 : _a.headers) ? req.headers.host : window.location.host) ||
        localhostAddress;
    var protocol = /^localhost(:\d+)?$/.test(host) ? "http:" : "https:";
    if (req && req.headers["x-forwarded-host"] && typeof req.headers["x-forwarded-host"] === "string") {
        host = req.headers["x-forwarded-host"];
    }
    if (req && req.headers["x-forwarded-proto"] && typeof req.headers["x-forwarded-proto"] === "string") {
        protocol = req.headers["x-forwarded-proto"] + ":";
    }
    return {
        protocol: protocol,
        host: host,
        origin: protocol + "//" + host,
    };
};

Home.getInitialProps = async ({ req }) => {
    const { origin } = absoluteUrl(req);
    log(origin);
    config.host = origin;
    return {};
};

export default Home;
