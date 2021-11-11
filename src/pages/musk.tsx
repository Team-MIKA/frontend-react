import { Container, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import MikaTable from "@components/mika-table";

const Musk: NextPage = () => {
    return (
        <Container>
            <Heading>Test Site</Heading>
            <MikaTable></MikaTable>
        </Container>
    );
};

export default Musk;
