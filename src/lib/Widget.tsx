import { FC } from "react";
import { WidgetDTO } from "@generated/models/WidgetDTO";

export type Option = string;

export type Widget<T> = PublisherWidget<T> | SubscriberWidget<T>;

export type PublisherWidget<T> = {
    render: PublisherComponent<T>;
    dto: WidgetDTO;
};

export type SubscriberWidget<T> = {
    render: SubscriberComponent<T>;
    dto: WidgetDTO;
};

export type PublisherComponent<T> = FC<PublisherProps<T>>;
export interface PublisherProps<T> {
    item: T;
    setItem: (item: T) => void;
    options: Array<Option>;
}

export type SubscriberComponent<T> = FC<SubscriberProps<T>>;
interface SubscriberProps<T> {
    item: T;
    options: Array<Option>;
}
