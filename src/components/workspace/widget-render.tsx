import SapOrderWidget from "@components/widgets/sap/sapOrderWidget";
import TimeSmartList from "@components/widgets/time-smart-list/time-smart-list-widget";
import TimeSmartCard from "@components/widgets/time-smart/time-smart-card";
import { Widget } from "@store/widget";

const WidgetRender = ({ widget }: { widget: Widget }) => {
    switch (widget.title) {
        case "Timesmart Registration":
            return <TimeSmartCard />;
        case "Timesmart List":
            return <TimeSmartList />;
        case "SAP List":
            return <SapOrderWidget />;
        default:
            return null;
    }
};

export default WidgetRender;
