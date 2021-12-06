import { Box, Button, Text, Container, Divider, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Custom404() {
    return (
        <Container>
            <Heading as="h1">Not found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <Link href="/" passHref>
                    <Button colorScheme="teal">Return to home</Button>
                </Link>
            </Box>
        </Container>
    );
}
