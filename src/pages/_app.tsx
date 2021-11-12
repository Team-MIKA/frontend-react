import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import Fonts from "../components/fonts";
import Layout from "../components/layouts/main";
import theme from "../components/layouts/theme";

function Website({ Component, router, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout>
                <AnimatePresence exitBeforeEnter initial={true}>
                    {/* How next js renders our pages */}
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    );
}

export default Website;
