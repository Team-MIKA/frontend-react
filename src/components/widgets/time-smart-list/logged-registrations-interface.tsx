import React from "react";
import { Tag, TagLabel, useColorModeValue } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { registration } from "@components/widgets/time-smart/registration";
import { categoriesState } from "@components/widgets/time-smart/registration.store";

export interface tableRow {
    category: JSX.Element;
    startTime: string;
    duration: number;
    endTime: string;
    orderId: string;
}

export function tableRowDisplay(registrations: registration[]): tableRow[] {
    console.log(registrations);
    return registrations.map((input) => ({
        category: CategoryTag(input.category.text),
        duration: Math.floor((input.endTime.getTime() - input.startTime.getTime()) / 1000),
        startTime: input.startTime.toISOString().substr(11, 8),
        endTime: input.endTime.toISOString().substr(11, 8),
        orderId: input.orderId,
    }));
}

function CategoryTag(categoryText) {
    function GetTag() {
        const categories = useRecoilValue(categoriesState);
        const color = findColor(
            categoryText,
            categories.map((cat) => cat.text)
        );
        const colorValue = useColorModeValue(color + ".200", color + ".500");
        const textColorValue = useColorModeValue("black", "white");
        return (
            <Tag size={"lg"} borderRadius="full" variant="solid" bg={colorValue} color={textColorValue}>
                <TagLabel>{categoryText}</TagLabel>
            </Tag>
        );
    }
    return <GetTag />;
}

function findColor(category, categories) {
    const colors = ["pink", "teal", "green", "orange", "blue", "purple"];
    const match_category = (element) => category === element;
    return colors[categories.findIndex(match_category)];
}
