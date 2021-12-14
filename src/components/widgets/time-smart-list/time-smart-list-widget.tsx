import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Box } from "@chakra-ui/react";
import { Column, useSortBy, useTable } from "react-table";
import { useRecoilValue } from "recoil";
import { tableRow } from "@components/widgets/time-smart-list/logged-registrations-interface";
import { tableRowState } from "@components/widgets/time-smart-list/logged-registrations.store";
import { log } from "@lib/logger";
import { SubscriberComponent } from "@lib/Widget";
import { Order } from "@store/order";

const TimeSmartList: SubscriberComponent<Order> = () => {
    const data = useRecoilValue(tableRowState);
    log(data);

    //const Registrations = useRecoilValue(RegistrationState);

    const columns = React.useMemo<Column<tableRow>[]>(
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
            overflowY={"scroll"}
            maxH={"375px"}
            sx={{
                "&::-webkit-scrollbar": {
                    width: "6px",
                    borderRadius: "8px",
                    backgroundColor: `rgb(0,0,0, 0.1)`,
                },
                "&::-webkit-scrollbar-thumb": {
                    borderRadius: "8px",
                    backgroundColor: `rgba(255,255,255,0.4)`,
                },
            }}
        >
            <Table {...getTableProps()}>
                <TableCaption>TimeSmart Registrations</TableCaption>

                <Thead>
                    {headerGroups.map((headerGroup) => {
                        const { key, ...restOfProps } = headerGroup.getHeaderGroupProps();
                        return (
                            <Tr key={key} {...restOfProps}>
                                {headerGroup.headers.map((column) => {
                                    const { key, ...restOfProps } = column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    );
                                    return (
                                        <Th key={key} {...restOfProps} isNumeric={column.isNumeric}>
                                            {column.render("Header")}
                                        </Th>
                                    );
                                })}
                            </Tr>
                        );
                    })}
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
};

export default TimeSmartList;
