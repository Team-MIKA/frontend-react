import { DeleteIcon } from "@chakra-ui/icons";
import { Stack, Heading, Text, useColorModeValue, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { Workspace, WorkspaceListState } from "@store/workspace";

const WorkspaceCard = ({ workspace }: { workspace: Workspace }) => {
    const [workspaces, setWorkspaces] = useRecoilState(WorkspaceListState);

    const removeWorkspace = () => {
        const idx = workspaces.findIndex((x) => x.id == workspace.id);
        setWorkspaces([...workspaces.splice(idx, 1)]);
    };

    return (
        <>
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
                <IconButton
                    background={"transparent"}
                    icon={<DeleteIcon />}
                    aria-label={"Remove Workspace"}
                    onClick={() => removeWorkspace}
                />

                <Link href={"/workspace/" + workspace.id} passHref>
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
                </Link>
            </Stack>
        </>
    );
};

export default WorkspaceCard;
