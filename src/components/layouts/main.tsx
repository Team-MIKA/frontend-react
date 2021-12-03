import { Box, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { NavBarItem, TextNavItem } from "@components/layouts/navbar/navbaritem";
import Footer from "./footer";
import NavBar from "./navbar/navbar";

const Main: NextPage = ({ children }) => {
    const Items: NavBarItem[] = [
        new TextNavItem("/", "Home"),
        new TextNavItem("/settings", "Settings"),
        new TextNavItem("/workspace", "Workspaces"),
        new TextNavItem("/examples", "Examples"),
    ];

    return (
        <Flex as="main" direction="column" align="center" maxW={"container.xl"} m="0 auto">
            <Head>
                <title>Business assistant</title>
            </Head>

            <NavBar navItems={Items} />

            <Box w="100%" p={4} pt={20}>
                <Breadcrumbs />
                {children}
            </Box>
            <Footer />
        </Flex>
    );
};

export default Main;
