import React, { useEffect, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import { Column } from "react-table";
import SelectableTable from "@components/widgets/sap/table";
import { log } from "@lib/logger";
import { PublisherComponent } from "@lib/Widget";
import api from "@store/axios";
import { Order } from "@store/order";

const SapOrderWidget: PublisherComponent<Order> = ({ item, setItem }) => {
    const [orders, setOrders] = useState([] as Order[]);

    const toast = useToast();

    useEffect(() => {
        return () => {
            setItem({ title: "Virker det?", id: "nej" });
        };
    }, [setItem]);

    useEffect(() => {
        api("/sap").then((o) => {
            const orders: Order[] = o.data;
            log("orders: ", orders);
            setOrders(orders);
        });
    }, [setOrders]);

    const columns = [
        { Header: "Id", accessor: "id" } as Column<Order>,
        { Header: "Title", accessor: "title" } as Column<Order>,
    ];

    const onRowClick = (order: Order) => {
        log("Selecting ID: ", order);
        if (order !== item) selectToast(`Order #${order.id} is selected`);
        else selectToast(`Order #${order.id} is already selected`);
        setItem(order);
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
