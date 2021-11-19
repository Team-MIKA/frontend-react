import { FC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import NextLink from "next/link";
import { NavBarProps } from "@components/layouts/navbar/navbar";

export const BurgerNavBar: FC<NavBarProps> = ({ navItems }) => (
    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
        <Menu isLazy id="navbar-menu">
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
            <MenuList>
                {navItems.map((item) => (
                    <NextLink href={item.href} key={"burger-nav" + item.key}>
                        <MenuItem as={Link} data-testid="nav-sidebar-link">
                            {item.render}
                        </MenuItem>
                    </NextLink>
                ))}
            </MenuList>
        </Menu>
    </Box>
);
