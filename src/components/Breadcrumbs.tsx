import { FC, useEffect, useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb as ChakraBreadcrumb, BreadcrumbItem, BreadcrumbLink, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export interface Breadcrumb {
    /** Breadcrumb title. Example: 'blog-entries' */
    breadcrumb: string;

    /** The URL which the breadcrumb points to. Example: 'blog/blog-entries' */
    href: string;
}

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const Breadcrumbs: FC = () => {
    const router = useRouter();

    const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb> | null>(null);

    useEffect(() => {
        if (router) {
            let linkPath = router.asPath.split("/");
            linkPath.shift();

            let pathArray = linkPath.map((path, i) => {
                return {
                    breadcrumb: path ? capitalizeFirstLetter(path) : path,
                    href: "/" + linkPath.slice(0, i + 1).join("/"),
                };
            });
            if (router.asPath != "/")
                pathArray = [
                    {
                        breadcrumb: "Home",
                        href: "/",
                    },
                    ...pathArray,
                ];

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <ChakraBreadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            {breadcrumbs.map((bc, i) => (
                <BreadcrumbItem key={bc.href + bc.breadcrumb}>
                    <BreadcrumbLink as={NextLink} href={bc.href}>
                        <Link>{bc.breadcrumb}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </ChakraBreadcrumb>
    );
};
