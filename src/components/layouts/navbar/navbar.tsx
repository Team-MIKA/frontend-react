import { PropsWithChildren } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Container,
    Flex,
    Heading,
    Menu,
    MenuButton,
    IconButton,
    useColorModeValue,
    MenuList,
    Link,
    MenuItem,
    Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import ThemeToggleButton from "@components/layouts/theme-toggle-button";
import Logo from "@components/logo";

abstract class NavBarItem {
    get key(): string {
        return this.href;
    }
    get href(): string {
        return this._href;
    }
    abstract get render(): JSX.Element;
    protected abstract _href: string;
}

class TextNavItem extends NavBarItem {
    get render(): JSX.Element {
        return <>{this._navText}</>;
    }
    constructor(path: string, title: string) {
        super();
        this._href = path;
        this._navText = title;
    }

    protected _href: string;
    private readonly _navText: string = "default";
}

const Navbar = () => {
    const Items: NavBarItem[] = [
        new TextNavItem("/", "Home"),
        new TextNavItem("/settings", "Settings"),
        new TextNavItem("/api/hello", "Api hello"),
        new TextNavItem("/api", "Api"),
    ];

    const LinkItem = ({ href, path, children }: PropsWithChildren<{ href: string; path: string }>) => {
        const active = path === href;
        const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
        const highlightColor = "#202023";
        return (
            <NextLink href={href}>
                <Link p={2} bg={active ? "teal" : undefined} color={active ? highlightColor : inactiveColor}>
                    {children}
                </Link>
            </NextLink>
        );
    };

    const { pathname } = useRouter();

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
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    {Items.map((item) => (
                        <LinkItem href={item.href} path={pathname} key={"nav" + item.key}>
                            {item.render}
                        </LinkItem>
                    ))}
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                {Items.map((item) => (
                                    <NextLink href={item.href} key={"burger-nav" + item.key}>
                                        <MenuItem as={Link}>{item.render}</MenuItem>
                                    </NextLink>
                                ))}
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
