import { FC } from "react";
import { Box, Container, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { BurgerNavBar } from "@components/layouts/navbar/burgerNavBar";
import { NavBarItem } from "@components/layouts/navbar/navbaritem";
import { TopNavBar } from "@components/layouts/navbar/topNavBar";
import ThemeToggleButton from "@components/layouts/theme-toggle-button";
import Logo from "@components/logo";

export interface NavBarProps {
    navItems: NavBarItem[];
}

const Navbar: FC<NavBarProps> = ({ navItems }) => {
    if (navItems === null) navItems = [];

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff80", "#30303890")}
            style={{ backdropFilter: "blur(10px)" }}
        >
            <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>
                <TopNavBar navItems={navItems} />

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <BurgerNavBar navItems={navItems} />
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
