import React from "react";
import { TagLabel, useColorModeValue } from "@chakra-ui/react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Tag } from "@chakra-ui/react";
import { useTable, useSortBy } from "react-table";
function TimeSmartList() {
    //const Registrations = useRecoilValue(RegistrationState);
    const data = React.useMemo(
        () => [
            {
                category: CategoryTag(),
                duration: "millimetres (mm)",
                startTime: 25.4,
                endTime: 25.4,
                orderId: 25.4,
            },
        ],
        []
    );

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
                            <Tr key={row} {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <Td key={cell} {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
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

function CategoryTag() {
    //WIP see dis: https://react-table.tanstack.com/docs/examples/filtering
    return (
        <Tag size={"lg"} borderRadius="full" variant="solid" colorScheme="pink">
            <TagLabel>Pause</TagLabel>
        </Tag>
    );
}

export default TimeSmartList;
