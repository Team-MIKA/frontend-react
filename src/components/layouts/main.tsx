import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./footer";
import NavBar from "./navbar";

const Main = ({ children, router }) => {
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
