import TimeSmartCard from "@components/time-smart/time-smart-card";
import { Widget } from "@store/widget";

const WidgetRender = ({ widget }: { widget: Widget }) => {
    switch (widget.title) {
        case "Timesmart Registration":
            return <TimeSmartCard />;
        default:
            return null;
    }
};

export default WidgetRender;
