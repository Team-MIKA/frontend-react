import { Box, Container } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { NavBarItem, TextNavItem } from "@components/layouts/navbar/navbaritem";
import Footer from "./footer";
import NavBar from "./navbar/navbar";

const Main: NextPage = ({ children }) => {
    const Items: NavBarItem[] = [new TextNavItem("/", "Home"), new TextNavItem("/settings", "Settings")];

    return (
        <Box as="main" pb={8}>
            <Head>
                <title>Business assistant</title>
            </Head>

            <NavBar navItems={Items} />

            <Container maxW="container.md" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
