import { PropsWithChildren } from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const LinkItem = ({ href, children }: PropsWithChildren<{ href: string }>) => {
    const { pathname } = useRouter();
    const active = pathname === href;
    const activeBackground = useColorModeValue("pink", "teal");

    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? activeBackground : undefined} borderRadius="7px">
                {children}
            </Link>
        </NextLink>
    );
};
