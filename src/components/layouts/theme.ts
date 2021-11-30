import { extendTheme } from "@chakra-ui/react";
import { ThemingProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// https://chakra-ui.com/docs/theming/advanced#theme-typings
// https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/foundations
const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const styles = {
    global: (props: ThemingProps) => ({
        body: {
            bg: mode("#f0e7db", "#202023")(props),
        },
    }),
};

const fonts = {
    heading: "'M PLUS Rounded 1c'",
    colors: {
        grassTeal: "#88ccca",
    },
};

const components = {
    Heading: {
        variants: {
            "section-title": {
                textDecoration: "underline",
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
    Link: {
        baseStyle: (props: ThemingProps) => ({
            color: mode("#3d7aed", "#ff63c3")(props),
            textUnderlineOffset: 3,
        }),
    },
};

const theme = extendTheme({
    config,
    styles,
    fonts,
    components,
});
export default theme;
