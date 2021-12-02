import React, { FC, ReactElement } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { render, RenderOptions } from "@testing-library/react";
import { AnimatePresence } from "framer-motion";
import { RecoilRoot } from "recoil";
import Fonts from "@components/fonts";
import theme from "@components/layouts/theme";

const AllTheProviders: FC = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            <RecoilRoot>
                <Fonts />
                <AnimatePresence exitBeforeEnter initial={true}>
                    {children}
                </AnimatePresence>
            </RecoilRoot>
        </ChakraProvider>
    );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
