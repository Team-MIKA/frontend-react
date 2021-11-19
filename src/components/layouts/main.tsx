import { Box, Container } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Footer from "./footer";
import NavBar from "./navbar/navbar";

const Main: NextPage = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <title>Business assistant</title>
            </Head>

            <NavBar />

            <Container maxW="container.md" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
