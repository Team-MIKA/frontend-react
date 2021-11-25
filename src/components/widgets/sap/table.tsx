import React, { useState } from "react";
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, TableCaption, Box } from "@chakra-ui/react";
import { Column, Row, useTable } from "react-table";

interface TableProps<T extends {}> {
    columns: Column<T>[];
    data: T[];
    title: string;
    onSelect: (arg0: T) => void;
}

const SelectableTable = <T extends object = {}>({ columns, data, title, onSelect }: TableProps<T>) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    const [selectedRow, setSelectedRow] = useState<Row<T>>(rows[0]);
    function selectRow(row: Row<T>) {
        setSelectedRow(row);
        onSelect(row.original);
    }

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
                                    background: row === selectedRow ? "gray" : "",
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
