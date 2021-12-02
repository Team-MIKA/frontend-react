import TimeSmartCard from "@components/time-smart/time-smart-card";
import { Card } from "@store/index";

const WidgetRender = ({ card }: { card: Card }) => {
    switch (card.title) {
        case "TIME SMART":
            return <TimeSmartCard />;
        default:
            return null;
    }
};

export default WidgetRender;
