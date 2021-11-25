import React, { useState } from "react";
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, TableCaption, Box, useColorModeValue } from "@chakra-ui/react";
import { Column, Row, useTable } from "react-table";

interface TableProps<T extends {}> {
    columns: Column<T>[];
    data: T[];
    title: string;
    onSelect: (row: T) => void;
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
                                onClick={() => selectRow(row)}
                                style={{
                                    cursor: "pointer",
                                    background: rowIndex === row.index ? bg : "",
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
export default SelectableTable;
