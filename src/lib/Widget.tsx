import { FC } from "react";
import { Option } from "@generated/models/Option";
import { WidgetDto } from "@generated/models/WidgetDto";

export type Widget<T> = PublisherWidget<T> | SubscriberWidget<T>;

export type PublisherWidget<T> = {
    render: PublisherComponent<T>;
    Dto: WidgetDto;
};

export type SubscriberWidget<T> = {
    render: SubscriberComponent<T>;
    Dto: WidgetDto;
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
