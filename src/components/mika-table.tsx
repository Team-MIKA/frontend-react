import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Box } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"
import { useTable } from "react-table"

import React, {useState, useRef, useEffect} from "react"
import itemStore from "@store/item";

const MikaTable = ({columns, data, title}) => {

    const toast = useToast()

    const [itemState, setItemState] = useState(itemStore.initialState);
    
    useEffect(() => {
        const subscription = itemStore.subscribe(setItemState)
        console.log("Initial Itemstate:", itemState);
        return () => subscription.unsubscribe();
      }, []); // [] avoids useEffect to be run on every render of component.

    const onRowClick = (event) => {
        console.log("Row Clicked: ", event);

        itemState.item.id == event.original.id ? unSelect() : select(event.original.id);
    }

    const unSelect = () => {
        console.log("UnSelecting...")
        itemStore.clearItem();
        addUnselectToast();
    }

    const select = (itemId) => {
        console.log("Selecting: ", itemId)
        itemStore.setItem({id: itemId});
        addSelectToast();
    }

    const addSelectToast = () =>  {
        toast({description: "Item Selected", position: 'top-right', duration: 2000, isClosable: true, status: 'success'})
    }

    const addUnselectToast = () =>  {
        toast({description: "Item Unselected", position: 'top-right', duration: 2000, isClosable: true, status: 'warning'})
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
                        <Tr {...row.getRowProps()} onClick={(() => onRowClick(row))} style={{cursor: 'pointer', background: row.original.id == itemState.item.id ? "gray" : ''}}>
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
