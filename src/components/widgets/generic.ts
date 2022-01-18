import { WidgetDTO } from "@generated/models/WidgetDTO";
import { WorkspaceDTO } from "@generated/models/WorkspaceDTO";
import SapOrderWidget from "@components/widgets/sap/sapOrderWidget";
import TimeSmartList from "@components/widgets/time-smart-list/time-smart-list-widget";
import TimeSmartCard from "@components/widgets/time-smart/time-smart-card";
import { Integration } from "@generated/models/Integration";
import { PublisherWidget, SubscriberWidget, Widget } from "@lib/Widget";

export interface IWorkspace {
    dto: WorkspaceDTO;
    widgets: Widget<any>[];
    publisher: PublisherWidget<any>[];
    subscribers: SubscriberWidget<any>[];
}

export class Workspace implements IWorkspace {
    public dto: WorkspaceDTO;
    private factory = new WidgetFactory();
    public publisher: PublisherWidget<any>[];
    public subscribers: SubscriberWidget<any>[];
    public widgets: Widget<any>[];

    constructor(workspace: WorkspaceDTO) {
        this.dto = workspace;
        this.publisher = this.factory.publisherWidgets(workspace.widgets);
        this.subscribers = this.factory.subscriberWidgets(workspace.widgets);
        this.widgets = [...this.publisher, ...this.subscribers];
    }
}

export class WidgetFactory {
    publisherWidgets(widgets: Array<WidgetDTO>): PublisherWidget<any>[] {
        const Publishers = [Integration.SAP];
        console.log(widgets);
        const publisherWidget = widgets.filter((w) => Publishers.some((p) => p == w.type));
        if (publisherWidget === undefined) return null; //throw Error("There's no publisher for this workspace");

        return publisherWidget.map((p) => WidgetFactory.component(p));
    }

    subscriberWidgets(widgets: Array<WidgetDTO>): SubscriberWidget<any>[] {
        if (widgets === undefined) return [];
        const subscribers = widgets.filter((w) => w.type != Integration.SAP);

        return subscribers.map((w) => WidgetFactory.component(w));
    }

    public static component(w: WidgetDTO): Widget<any> {
        let component;
        switch (w.type) {
            case Integration.SAP:
                component = SapOrderWidget;
                break;
            case Integration.TIME_SMART:
                component = TimeSmartCard;
                break;
            case Integration.TIME_SMART_REGISTRATIONS:
                component = TimeSmartList;
                break;
            default:
                throw new Error(`Component: ${w.type} is not registered`);
        }

        return {
            dto: w,
            render: component,
        };
    }
}
