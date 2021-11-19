import { FC } from "react";
import { Stack } from "@chakra-ui/react";
import { LinkItem } from "@components/layouts/navbar/linkItem";
import { NavBarProps } from "@components/layouts/navbar/navbar";

export const TopNavBar: FC<NavBarProps> = ({ navItems }) => {
    return (
        <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
        >
            {navItems.map((item) => (
                <LinkItem href={item.href} key={"nav" + item.key}>
                    {item.render}
                </LinkItem>
            ))}
        </Stack>
    );
};
