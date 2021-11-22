import { Box } from "@chakra-ui/react";
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

            <Box w="100%" p={4}>
                {children}
                <Footer />
            </Box>
        </Box>
    );
};

export default Main;
