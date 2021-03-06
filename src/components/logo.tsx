import { FC } from "react";
import { useColorModeValue, Text, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import NextLink from "next/link";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    img {
        transition: 200ms ease;
    }

    &:hover img {
        transform: rotate(20deg);
    }
`;

const Logo: FC = () => {
    return (
        <NextLink href="/" passHref>
            <Link>
                <FullLogo />
            </Link>
        </NextLink>
    );
};

export const FullLogo = () => {
    const cloudLogoPath = `/logo.svg`; //TODO ${useColorModeValue("", "-dark")} Make dark mode logo

    return (
        <LogoBox>
            <Image src={cloudLogoPath} width={20} height={20} alt="logo" />
            <Text
                color={useColorModeValue("gray.800", "whiteAlpha.900")}
                fontFamily='M PLUS Rounded 1c", sans-serif'
                fontWeight="bold"
                ml={3}
            >
                Team Mika
            </Text>
        </LogoBox>
    );
};
export default Logo;
