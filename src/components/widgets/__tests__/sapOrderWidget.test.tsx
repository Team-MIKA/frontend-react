import { fireEvent, waitForElementToBeRemoved } from "@testing-library/dom";
import axios from "axios";
import nock from "nock";
import { useRecoilValue } from "recoil";
import SapOrderWidget from "@components/widgets/sap/sapOrderWidget";
import { Order, publishId } from "@store/order";
import { render } from "test-utils";

describe("sap ting", () => {
    const mockOrders = [
        { id: "1", title: "Order 1" },
        { id: "2", title: "Order 2" },
    ] as Order[];
    beforeAll(() => {
        axios.defaults.adapter = require("axios/lib/adapters/http"); //Flyt til test utils
    });

    beforeEach(
        () => nock("http://localhost:3000").get("/api/sap").reply(200, mockOrders) // Skriv eksempel på det her.
    );

    test("test mock", async () => {
        const orders = await axios.get("http://localhost:3000/api/sap");

        expect(orders.data).toEqual(mockOrders);
    });

    const SubscriberWidget = () => {
        const order = useRecoilValue(publishId);
        return <p> Subscribing on: {order.id}</p>;
    };

    test("adds 1 + 2 to equal 3", async () => {
        const { getByText } = render(
            <>
                <SapOrderWidget />
                <SubscriberWidget />
            </>
        );
        await waitForElementToBeRemoved(() => getByText("Loading..."));
        const row_one = await getByText("Order 1");
        fireEvent.click(row_one);

        const orderOnSubscribeWidget = getByText("Subscribing on: 1");
        expect(orderOnSubscribeWidget).toBeInTheDocument();
    });
});
