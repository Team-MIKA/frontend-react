import React, { useEffect } from "react";
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, TableCaption, Box } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Column, Row, useTable } from "react-table";
import { useRecoilState } from "recoil";
import { log } from "@helpers/logger";
import { publishId } from "@store/item";

const Table = ({ columns, data, title }: { columns: Column<JSON>[]; data: JSON[]; title: string }) => {
    const toast = useToast();

    const [itemState, setItemState] = useRecoilState(publishId);

    useEffect(() => {
        log("Initial Item state:", itemState);
    }, [itemState]); // [] avoids useEffect to be run on every render of component.

    const onRowClick = (event: Row<JSON>) => {
        log("Row Clicked: ", event);
        setItemState(event.values.id == itemState.id ? unSelect() : select(event.values.id));
    };

    const unSelect = () => {
        log("UnSelecting...");
        addUnselectToast();
        return { id: "" };
    };

    const select = (itemId: string) => {
        log("Selecting ID: ", itemId);
        addSelectToast();
        return { id: itemId };
    };

    const addSelectToast = () => {
        toast({
            description: "Item Selected",
            position: "top-right",
            duration: 2000,
            isClosable: true,
            status: "success",
        });
    };

    const addUnselectToast = () => {
        toast({
            description: "Item Unselected",
            position: "top-right",
            duration: 2000,
            isClosable: true,
            status: "warning",
        });
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <Box border="2px solid gray" borderRadius="md">
            <ChakraTable {...getTableProps()}>
                <TableCaption>{title}</TableCaption>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map((column) => (
                                <Th {...column.getHeaderProps()} key={column.id}>
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
                            <Tr
                                {...row.getRowProps()}
                                onClick={() => onRowClick(row)}
                                style={{
                                    cursor: "pointer",
                                    background: row.values.id == itemState.id ? "gray" : "",
                                }}
                                key={row.id}
                            >
                                {row.cells.map((cell) => (
                                    <Td {...cell.getCellProps()} key={cell.row.id + cell.column.id}>
                                        {cell.render("Cell")}
                                    </Td>
                                ))}
                            </Tr>
                        );
                    })}
                </Tbody>
            </ChakraTable>
        </Box>
    );
};
export default Table;
