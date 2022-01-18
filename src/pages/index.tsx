import { FC, ReactNode } from "react";
import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { absoluteUrl } from "@lib/absoluteUrl";
import { log } from "@lib/logger";
import instance from "@store/axios";
import LiveClock from "../components/widgets/time-smart/live-clock";

const Home: NextPage<{ origin: string }> = ({ origin }) => {
    console.log(origin);
    instance.defaults.baseURL = origin + "/api";
    return (
        <Container maxW={"container.xl"}>
            <BasicStatistics />
        </Container>
    );
};

Home.getInitialProps = async ({ req }) => {
    log(absoluteUrl(req));
    const { host } = absoluteUrl(req);
    const origin = "https://" + host;
    return { origin };
};

export default Home;

interface StatsCardProps {
    title: string;
    stats: string[];
    icon: ReactNode;
}
const StatsCard: FC<StatsCardProps> = ({ title, stats, icon }) => (
    <Stat
        height={"100%"}
        px={{ base: 2, md: 4 }}
        py={"5"}
        shadow={"xl"}
        border={"1px solid"}
        borderColor={useColorModeValue("gray.800", "gray.500")}
        rounded={"lg"}
    >
        <Flex justifyContent={"space-between"}>
            <Box pl={{ base: 2, md: 4 }}>
                <StatLabel fontWeight={"medium"} isTruncated>
                    {title}
                </StatLabel>
                {stats.map((stat, index) => (
                    <StatNumber fontSize={"2xl"} fontWeight={"medium"} key={index}>
                        {stat}
                    </StatNumber>
                ))}
            </Box>
            <Box my={"auto"} color={useColorModeValue("gray.800", "gray.200")} alignContent={"center"}>
                {icon}
            </Box>
        </Flex>
    </Stat>
);

const BasicStatistics = () => (
    <Box maxW="container.Xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Heading as="h1" textAlign={"center"} fontSize={"4xl"} py={10} fontWeight={"bold"}>
            <LiveClock format={(date) => `${date.toLocaleDateString("da-DK")} ${date.toLocaleTimeString("da-DK")}`} />
        </Heading>
        <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem rowSpan={2} colSpan={1}>
                <StatsCard
                    title={"This weeks menu"}
                    stats={[
                        "M: Jomfruhummerhaler",
                        "T: Laksetatar",
                        "O: Stegt andebryst",
                        "T: Vesterhavsost",
                        "F: Amarene kirsebær",
                    ]}
                    icon={<span>🍖</span>}
                />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
                <StatsCard
                    title={"Absent today"}
                    stats={["Anders Andersen", "Mads Mikkelsen"]}
                    icon={<span>🤒</span>}
                />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
                <StatsCard title={"Birthday"} stats={["Lars Larsen", "Bageren"]} icon={<span>🇩🇰</span>} />
            </GridItem>
        </Grid>
    </Box>
);
