import { PropsWithChildren } from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const LinkItem = ({ href, children }: PropsWithChildren<{ href: string }>) => {
    const { pathname } = useRouter();
    const active = pathname === href;
    const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
    const highlightColor = "#202023";

    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? "teal" : undefined}
                borderRadius="7px"
                color={active ? highlightColor : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    );
};
