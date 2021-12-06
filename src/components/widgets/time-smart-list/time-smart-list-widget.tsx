import React, { useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, useColorModeValue, TableCaption } from "@chakra-ui/react";
import { useSortBy, useTable } from "react-table";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { registrationsState, tableRowState } from "@components/widgets/time-smart-list/logged-registrations.store";
import { registration } from "@components/widgets/time-smart/registration";
import { publishId } from "@store/order";
import { TimeSmartService } from "../../../services/openapi";

function TimeSmartList() {
    const data = useRecoilValue(tableRowState);
    const setRegistrations = useSetRecoilState(registrationsState);
    const order = useRecoilValue(publishId);

    useEffect(() => {
        console.log(order.id);
        TimeSmartService.getTimeSmart1(order.id == "" ? null : order.id)
            .then((registrations) => {
                setRegistrations(
                    registrations.map((regDto) => {
                        return {
                            category: regDto.category,
                            startTime: new Date(Date.parse(regDto.startTime)),
                            endTime: new Date(Date.parse(regDto.endTime)),
                            orderId: regDto.orderId,
                        } as registration;
                    })
                );
            })
            .catch(() => {
                setRegistrations([]);
            });
    }, [setRegistrations, order]);

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
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            sx={{
                "&::-webkit-scrollbar": {
                    width: "0px",
                    borderRadius: "8px",
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
            }}
            maxH={"375px"}
            overflowY={"scroll"}
        >
            <Table {...getTableProps()}>
                <TableCaption>TimeSmart Registrations</TableCaption>
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
