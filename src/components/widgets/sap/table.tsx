import React, { useState } from "react";
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, TableCaption, Box, useColorModeValue } from "@chakra-ui/react";
import { Column, Row, useTable } from "react-table";

interface TableProps<T extends {}> {
    columns: Column<T>[];
    data: T[];
    title: string;
    onSelect: (obj: T) => void;
}

const SelectableTable = <T extends object = {}>({ columns, data, title, onSelect }: TableProps<T>) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    const [rowIndex, setRowIndex] = useState<number | null>(null);
    function selectRow(row: Row<T>) {
        setRowIndex(row.index);
        onSelect(row.original);
    }

    const bg = useColorModeValue("pink", "teal");

    return (
        <Box border="2px solid gray" borderRadius="md">
            <ChakraTable {...getTableProps()}>
                <TableCaption>{title}</TableCaption>
                <Thead>
                    {headerGroups.map((headerGroup) => {
                        const { key, ...restOfProps } = headerGroup.getHeaderGroupProps();
                        return (
                            <Tr key={key} {...restOfProps}>
                                {headerGroup.headers.map((column) => {
                                    const { key, ...restOfProps } = column.getHeaderProps();
                                    return (
                                        <Th key={key} {...restOfProps}>
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
                        const { key, ...restOfProps } = row.getRowProps();
                        return (
                            <Tr
                                key={key}
                                {...restOfProps}
                                onClick={() => selectRow(row)}
                                style={{
                                    cursor: "pointer",
                                    background: rowIndex === row.index ? bg : "",
                                }}
                            >
                                {row.cells.map((cell) => {
                                    const { key, ...restOfProps } = cell.getCellProps();
                                    return (
                                        <Td key={key} {...restOfProps}>
                                            {cell.render("Cell")}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </ChakraTable>
        </Box>
    );
};
export default SelectableTable;
