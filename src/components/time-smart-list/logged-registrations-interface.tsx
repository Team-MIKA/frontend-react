import React from "react";
import { Tag, TagLabel } from "@chakra-ui/react";
import { registration } from "@components/time-smart/registration";

export interface tableRow {
    category: JSX.Element;
    startTime: string;
    duration: number;
    endTime: string;
    orderId: string;
}

export function tableRowDisplay(registrations: registration[]): tableRow[] {
    return registrations.map((input) => ({
        category: CategoryTag(input.category, "pink"),
        duration: Math.floor((input.endTime.getTime() - input.startTime.getTime()) / 1000),
        startTime: input.startTime.toISOString().substr(11, 8),
        endTime: input.endTime.toISOString().substr(11, 8),
        orderId: input.orderId,
    }));
}

function CategoryTag(tag, color) {
    return (
        <Tag size={"lg"} borderRadius="full" variant="solid" colorScheme={color}>
            <TagLabel>{tag}</TagLabel>
        </Tag>
    );
}
