import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, useColorModeValue } from "@chakra-ui/react";
import { useSortBy, useTable } from "react-table";
import { useRecoilValue } from "recoil";
import { tableRowState } from "@components/time-smart-list/logged-registrations.store";

function TimeSmartList() {
    const data = useRecoilValue(tableRowState);
    console.log(data);

    //const Registrations = useRecoilValue(RegistrationState);

    const columns = React.useMemo(
        () => [
            {
                Header: "Category",
                accessor: "category",
            },
            {
                Header: "Duration",
                accessor: "duration",
                isNumeric: true,
            },
            {
                Header: "Start Time",
                accessor: "startTime",
                isNumeric: true,
            },
            {
                Header: "End Time",
                accessor: "endTime",
                isNumeric: true,
            },
            {
                Header: "Order ID",
                accessor: "orderId",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

    return (
        <Box
            borderWidth="5px"
            borderRadius="lg"
            borderColor={useColorModeValue("#ffffff40", "whiteAlpha.200")}
            overflow="hidden"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
            <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th
                                    key={column}
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    isNumeric={column.isNumeric}
                                >
                                    {column.render("Header")}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <Tr key={row} {...row.getRowProps()} role={"row"}>
                                {row.cells.map((cell) => (
                                    <Td
                                        key={cell}
                                        {...cell.getCellProps()}
                                        isNumeric={cell.column.isNumeric}
                                        role={"cell"}
                                    >
                                        {cell.render("Cell")}
                                    </Td>
                                ))}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Box>
    );
}

export default TimeSmartList;
