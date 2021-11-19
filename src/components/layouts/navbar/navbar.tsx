import { FC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NavBarItem, TextNavItem } from "@components/layouts/navbar/navbaritem";
import ThemeToggleButton from "@components/layouts/theme-toggle-button";
import Logo from "@components/logo";
import { TopNavBar } from "@components/layouts/navbar/topNavBar";

export interface NavBarProps {
    navItems: NavBarItem[];
}

const BurgerNavBar: FC<NavBarProps> = ({ navItems }) => (
    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
        <Menu isLazy id="navbar-menu">
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
            <MenuList>
                {navItems.map((item) => (
                    <NextLink href={item.href} key={"burger-nav" + item.key}>
                        <MenuItem as={Link}>{item.render}</MenuItem>
                    </NextLink>
                ))}
            </MenuList>
        </Menu>
    </Box>
);

const Navbar = () => {
    const Items: NavBarItem[] = [new TextNavItem("/", "Home"), new TextNavItem("/settings", "Settings")];

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
