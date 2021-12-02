import { AddIcon } from "@chakra-ui/icons";
import { Box, Heading, Button, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import AddWorkspaceModal from "@components/workspace/add-workspace-modal";
import WorkspaceList from "@components/workspace/workspace-list";

const WorkspacePage: NextPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Heading mb={4}>Workspaces</Heading>
            <Box mb={4}>
                <Button
                    leftIcon={<AddIcon />}
                    onClick={onOpen}
                    colorScheme={useColorModeValue("purple", "orange")}
                    variant="solid"
                >
                    Workspace
                </Button>
                <AddWorkspaceModal onClose={onClose} isOpen={isOpen} />
            </Box>
            <Box>
                <WorkspaceList />
            </Box>
        </>
    );
};

export default WorkspacePage;
