import { Container, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import MikaTable from "@components/mika-table";
import React from "react";
import TestBox from "@components/test-box";

const Musk: NextPage = () => {

    const data = React.useMemo(
        () => [
          { id: "1234", title: "Batman" },
          { id: "5678", title: "Superman" },
          { id: "9101", title: "The Joker" },
        ],
        [],
      )
    
      const columns = React.useMemo(
        () => [
          { Header: "Id", accessor: "id" },
          { Header: "Title", accessor: "title" },
        ],
        [],
      )


    return (
        <Container>
            <Heading right="0">Test Site</Heading>
            <MikaTable columns={columns} data={data} title="Orders"></MikaTable>
            <TestBox title="Sap Materials"></TestBox>
            <TestBox title="Time Smart"></TestBox>
        </Container>
    );
};

export default Musk;
