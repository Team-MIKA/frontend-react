import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { Column } from "react-table";
import MikaTable from "@components/mika-table";
import TestBox from "@components/test-box";

const Musk: NextPage = () => {
    const data = React.useMemo(
        () => [
            JSON.parse('{ "id": "1234", "title": "Batman" }'),
            JSON.parse('{ "id": "5678", "title": "Superman" }'),
            JSON.parse('{ "id": "9101", "title": "The Joker" }'),
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: "Id", accessor: "id" } as Column<JSON>,
            { Header: "Title", accessor: "title" } as Column<JSON>,
        ],
        []
    );

    return (
        <Container>
            <Heading right="0">Test Site</Heading>
            <MikaTable columns={columns} data={data} title={"Orders"} />
            <TestBox title="Sap Materials" />
            <TestBox title="Time Smart" />
        </Container>
    );
};

export default Musk;
