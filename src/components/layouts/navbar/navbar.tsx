import { Box, Container, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { BurgerNavBar } from "@components/layouts/navbar/burgerNavBar";
import { NavBarItem, TextNavItem } from "@components/layouts/navbar/navbaritem";
import { TopNavBar } from "@components/layouts/navbar/topNavBar";
import ThemeToggleButton from "@components/layouts/theme-toggle-button";
import Logo from "@components/logo";

export interface NavBarProps {
    navItems: NavBarItem[];
}

const Navbar = () => {
    const Items: NavBarItem[] = [
        new TextNavItem("/", "Home"),
        new TextNavItem("/settings", "Settings"),
        new TextNavItem("/examples", "Example"),
    ];

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
                <TopNavBar navItems={Items} />

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <BurgerNavBar navItems={Items} />
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
