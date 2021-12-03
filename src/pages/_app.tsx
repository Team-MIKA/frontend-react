import { ChakraProvider, SlideFade } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Fonts from "../components/fonts";
import Layout from "../components/layouts/main";
import theme from "../components/layouts/theme";

function Website({ Component, router, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <RecoilRoot>
                <Fonts />
                <Layout>
                    <AnimatePresence exitBeforeEnter initial={true}>
                        <SlideFade key={router.route} in={true}>
                            <Component {...pageProps} key={router.route} />
                        </SlideFade>
                    </AnimatePresence>
                </Layout>
            </RecoilRoot>
        </ChakraProvider>
    );
}

export default Website;
