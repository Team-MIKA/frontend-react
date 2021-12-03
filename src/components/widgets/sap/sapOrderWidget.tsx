import React, { FC, useEffect, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import { Column } from "react-table";
import { useRecoilState } from "recoil";
import SelectableTable from "@components/widgets/sap/table";
import { log } from "@helpers/logger";
import api from "@store/axios";
import { Order, publishId } from "@store/order";

const SapOrderWidget: FC = () => {
    const [orders, setOrders] = useState([] as Order[]);
    const [itemState, setItemState] = useRecoilState(publishId);
    const toast = useToast();

    useEffect(() => {
        api("/sap").then((o) => {
            const orders: Order[] = o.data;
            log("orders: ", orders);
            setOrders(orders);
        });
    }, []);

    const columns = [
        { Header: "Id", accessor: "id" } as Column<Order>,
        { Header: "Title", accessor: "title" } as Column<Order>,
    ];

    const onRowClick = (order: Order) => {
        log("Selecting ID: ", order);
        if (order !== itemState) selectToast(`Order #${order.id} is selected`);
        else selectToast(`Order #${order.id} is already selected`);
        setItemState(order);
    };

    const selectToast = (message: string) => {
        toast({
            description: message,
            position: "top-right",
            duration: 2000,
            isClosable: true,
            status: "success",
        });
    };

    if (orders.length == 0) return <Spinner />;

    return <SelectableTable columns={columns} data={orders} title={"Orders"} onSelect={onRowClick} />;
};

export default SapOrderWidget;
