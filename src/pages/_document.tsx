// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react";
// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "@components/layouts/theme";

/* Error in linter. There should only be title on pages, not in the _document file https://nextjs.org/docs/advanced-features/custom-document */
// noinspection HtmlRequiredTitleElement
export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
