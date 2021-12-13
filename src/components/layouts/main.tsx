import React from "react";
import { Box, Center, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { BackButton } from "@components/layouts/backButton";
import { NavBarItem, TextNavItem } from "@components/layouts/navbar/navbaritem";
import Footer from "./footer";
import NavBar from "./navbar/navbar";

const Main: NextPage = ({ children }) => {
    const Items: NavBarItem[] = [new TextNavItem("/", "Home"), new TextNavItem("/workspace", "Workspaces")];

    return (
        <Flex as="main" direction="column" align="center" maxW={"container.xl"} m="0 auto">
            <Head>
                <title>Business assistant</title>
            </Head>

            <NavBar navItems={Items} />

            <Box w="100%" p={4} pt={20}>
                <Flex>
                    <Box p={4}>
                        <BackButton />
                    </Box>
                    <Center>
                        <Breadcrumbs />
                    </Center>
                </Flex>
                {children}
            </Box>
            <Footer />
        </Flex>
    );
};

export default Main;
