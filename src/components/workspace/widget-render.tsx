import { Card } from "@store/index";
import WidgetSap from "./cards/widget-sap-example";
import WidgetTimeSmart from "./cards/widget-time-smart-example";

const WidgetRender = ({ card }: { card: Card }) => {
    switch (card.title) {
        case "TIME SMART":
            return <WidgetTimeSmart card={card} />;
        case "SAP":
            return <WidgetSap card={card} />;
        default:
            return null;
    }
};

export default WidgetRender;
