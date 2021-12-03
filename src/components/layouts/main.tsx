import { Box } from "@chakra-ui/react";
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
        <Box as="main" pb={8}>
            <Head>
                <title>Business assistant</title>
            </Head>

            <NavBar navItems={Items} />

            <Box w="100%" p={4} pt={20}>
                <Breadcrumbs />
                {children}
                <Footer />
            </Box>
        </Box>
    );
};

export default Main;
