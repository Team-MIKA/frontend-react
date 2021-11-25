import React, { FC } from "react";
import { Container, Heading } from "@chakra-ui/react";
import { Column } from "react-table";
import TestBox from "@components/test-box";
import Table from "@components/widgets/sap/table";
import { error, log } from "@helpers/logger";
import { Data } from "/src/pages/api/sap";

const SapOrderWidget: FC = () => {
    const [data, updateData] = React.useState([] as Data[]);

    fetch("/api/sap")
        .then((r) => {
            log("URL: ", r.url);
            r.json().then((t) => {
                log("orders: ", t);
                updateData((old) => [...old, t]);
            });
        })
        .catch((e) => error(e));

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
            <Table columns={columns} data={data} title={"Orders"} />
            <TestBox title="Sap Materials" />
            <TestBox title="Time Smart" />
        </Container>
    );
};

export default SapOrderWidget;
