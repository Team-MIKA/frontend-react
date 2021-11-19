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
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NavBarItem, TextNavItem } from "@components/layouts/navbar/navbaritem";
import ThemeToggleButton from "@components/layouts/theme-toggle-button";
import Logo from "@components/logo";
import { LinkItem } from "@components/layouts/navbar/linkItem";

interface Props {
    navItems: NavBarItem[];
}

const TopNavBar: FC<Props> = ({ navItems }) => {
    return (
        <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
        >
            {navItems.map((item) => (
                <LinkItem href={item.href} key={"nav" + item.key}>
                    {item.render}
                </LinkItem>
            ))}
        </Stack>
    );
};
const BurgerNavBar: FC<Props> = ({ navItems }) => (
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
