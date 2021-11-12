import { Table, Thead, Tbody, Tr, Th, Td, chakra, TableCaption } from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { useTable, useSortBy } from "react-table"

import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.css';

import React, {useState, useRef} from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';

const MikaTable = ({columns, data, title}) => {

    /* const [selectedItem, setSelectedItem] = useState(null);
    const toast = useRef(null);

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Item Unselected', detail: `Name: ${event.data.title}`, life: 3000 });
    }

    return (
        <div>
            <Toast ref={toast} />
            <div>
                <DataTable value={data} header={title} 
                metaKeySelection={false}
                responsiveLayout="scroll" selectionMode="single" selection={selectedItem} 
                onSelectionChange={e => setSelectedItem(e.value)} 
                dataKey="id" 
                onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}>
                    {dynamicColumns}
                </DataTable> 
            </div>
        </div>
             
    
    ); */


    const onRowSelect = (event) => {
        console.log(event)
    }

    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)

     return (
         <div> 
            <Table {...getTableProps()} >
                <TableCaption>{title}</TableCaption>
            <Thead>
                {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                    <Th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                        {column.render("Header")}
                        <chakra.span pl="4">
                        {column.isSorted ? (
                            column.isSortedDesc ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                            ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                            )
                        ) : null}
                        </chakra.span>
                    </Th>
                    ))}
                </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                prepareRow(row)
                return (
                    <Tr {...row.getRowProps()} onClick={(() => onRowSelect(row))} style={{cursor: 'pointer'}}>
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
        </div>
       
      )
    
};
export default MikaTable;
