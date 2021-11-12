import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Container, Box } from "@chakra-ui/react"
import { useTable } from "react-table"


import React, {useState, useRef} from "react"

const MikaTable = ({columns, data, title}) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const onRowSelect = (event) => {
        selectedItem == event.id ? setSelectedItem(null) : setSelectedItem(event.id)
        console.log(event)
    }

    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

     return (
         <Box  border="2px solid gray" borderRadius="md">
            <Table {...getTableProps()}  >
                <TableCaption>{title}</TableCaption>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <Th {...column.getHeaderProps()}>
                            {column.render("Header")}
                        </Th>
                        ))}
                    </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <Tr {...row.getRowProps()} onClick={(() => onRowSelect(row))} style={{cursor: 'pointer', background: row.id == selectedItem ? "gray" : ''}}>
                        {row.cells.map((cell) => (
                            <Td {...cell.getCellProps()}>
                                {cell.render("Cell")}
                            </Td>
                        ))}
                        </Tr>
                    )
                    })}
                </Tbody>
            </Table>
        </Box>
      )
    
};
export default MikaTable;
