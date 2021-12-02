import { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Heading, Button, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRecoilState } from "recoil";
import AddWorkspaceModal from "@components/workspace/add-workspace-modal";
import WorkspaceList from "@components/workspace/workspace-list";
import { WorkspaceListState } from "@store/workspace";
import { WorkspaceService } from "../../services/openapi";

const WorkspacePage: NextPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [, setWorkspaces] = useRecoilState(WorkspaceListState);

    useEffect(() => {
        WorkspaceService.getWorkspace().then((result) => {
            setWorkspaces(result);
        });
    }, []);
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
