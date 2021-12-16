import { FC, useState } from "react";
import { fireEvent, waitForElementToBeRemoved } from "@testing-library/dom";
import nock from "nock";
import SapOrderWidget from "@components/widgets/sap/sapOrderWidget";
import { SubscriberComponent } from "@lib/Widget";
import api, { config } from "@store/axios";
import { Order } from "@store/order";
import { render, setupUrlMock } from "test-utils";

describe("sap ting", () => {
    const mockOrders = [
        { id: "1", title: "Order 1" },
        { id: "2", title: "Order 2" },
    ] as Order[];

    beforeAll(() => {
        setupUrlMock();
    });

    beforeEach(() => {
        nock(config.host + "/api")
            .get("/sap")
            .reply(200, mockOrders);
    });

    test("test mock", async () => {
        const orders = await api.get("/sap");

        expect(orders.data).toEqual(mockOrders);
    });

    const SubscriberWidget: SubscriberComponent<Order> = ({ item }) => {
        if (!item) return <p>Waiting</p>;
        return <p> Subscribing on: {item.id}</p>;
    };

    const TestComponent: FC = () => {
        const [defaultOrder, setDefaultOrder] = useState<Order>(null);
        return (
            <>
                <SapOrderWidget item={defaultOrder} setItem={setDefaultOrder} options={[""]} />
                <SubscriberWidget item={defaultOrder} options={[""]} />
            </>
        );
    };

    test("adds 1 + 2 to equal 3", async () => {
        const { getByText } = render(<TestComponent />);
        await waitForElementToBeRemoved(() => getByText("Loading..."));
        const row_one = await getByText("Order 1");
        fireEvent.click(row_one);

        const orderOnSubscribeWidget = getByText("Subscribing on: 1");
        expect(orderOnSubscribeWidget).toBeInTheDocument();
    });
});
