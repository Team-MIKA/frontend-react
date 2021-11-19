import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => (
    <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Team Mika. All Rights Reserved.
    </Box>
);

export default Footer;
