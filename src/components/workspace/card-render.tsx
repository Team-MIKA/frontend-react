import { Card } from "@store/index";
import CardSap from "./cards/card-sap-example";
import CardTimeSmart from "./cards/card-time-smart-example";

const CardRender = ({ card }: { card: Card }) => {
    switch (card.title) {
        case "TIME SMART":
            return <CardTimeSmart card={card} />;
        case "SAP":
            return <CardSap card={card} />;
        default:
            return null;
    }
};

export default CardRender;
