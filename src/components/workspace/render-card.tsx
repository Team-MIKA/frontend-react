import { Card } from "@store/workspace";
import CardSap from "./cards/card-sap";
import CardTimeSmart from "./cards/card-time-smart";

const RenderCard = ({ card }: { card: Card }) => {
    switch (card.title) {
        case "TIME SMART":
            return <CardTimeSmart card={card} />;
        case "SAP":
            return <CardSap card={card} />;
        default:
            return null;
    }
};

export default RenderCard;
