import { Stack, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { Workspace } from "@store";

const WorkspaceCard = ({ workspace }: { workspace: Workspace }) => {
    return (
        <>
            <Link href={"/workspace/" + workspace.id} passHref>
                <Stack
                    boxShadow={"xl"}
                    bg={useColorModeValue("gray.50", "gray.700")}
                    rounded={"xl"}
                    p={10}
                    spacing={8}
                    align={"center"}
                    w={"full"}
                    _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
                >
                    <Stack align={"center"} spacing={2}>
                        <Heading
                            textTransform={"uppercase"}
                            fontSize={"xl"}
                            color={useColorModeValue("gray.800", "gray.200")}
                        >
                            {workspace.title}
                        </Heading>
                        <Text fontSize={"lg"} color={"gray.500"}></Text>
                    </Stack>
                </Stack>
            </Link>
        </>
    );
};

export default WorkspaceCard;
