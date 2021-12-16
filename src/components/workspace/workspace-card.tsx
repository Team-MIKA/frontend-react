import { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Stack, Heading, useColorModeValue, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { WorkspaceDTO } from "@generated/models/WorkspaceDTO";
import DeleteWorkspaceModal from "./delete-workspace-modal";

const WorkspaceCard = ({ workspace }: { workspace: WorkspaceDTO }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);

    return (
        <>
            <IconButton
                data-testid={"removeWorkspace"}
                position={"absolute"}
                background={"transparent"}
                icon={<DeleteIcon />}
                aria-label={"Remove Workspace"}
                onClick={() => setIsOpen(true)}
            />

            <DeleteWorkspaceModal isOpen={isOpen} onClose={onClose} workspace={workspace} />

            <Link href={"/workspace/" + workspace.id} passHref data-testid={"workspaceLink"}>
                <Stack
                    boxShadow={"xl"}
                    bg={useColorModeValue("gray.50", "gray.700")}
                    rounded={"md"}
                    p={10}
                    spacing={8}
                    align={"center"}
                    w={"full"}
                    _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
                >
                    <Stack align={"center"} spacing={2}>
                        <Heading
                            role={"heading"}
                            textTransform={"uppercase"}
                            fontSize={"xl"}
                            color={useColorModeValue("gray.800", "gray.200")}
                        >
                            {workspace.title}
                        </Heading>
                    </Stack>
                </Stack>
            </Link>
        </>
    );
};

export default WorkspaceCard;
