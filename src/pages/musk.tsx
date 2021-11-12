import { Container, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import MikaTable from "@components/mika-table";
import React from "react";

const Musk: NextPage = () => {

    const data = React.useMemo(
        () => [
          { index: "1", title: "Order1" },
          { index: "2", title: "Order2" },
          { index: "3", title: "Order3" },
        ],
        [],
      )
    
      const columns = React.useMemo(
        () => [
          {
             Header: "Index",
            accessor: "index",
          },
          {
            Header: "Title",
            accessor: "title",
          },
        ],
        [],
      )


    return (
        <Container>
            <Heading>Test Site</Heading>
            <MikaTable columns={columns} data={data} title="Orders"></MikaTable>
        </Container>
    );
};

export default Musk;
