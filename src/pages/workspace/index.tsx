import { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Heading, Button, useColorModeValue, useDisclosure, Spinner } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRecoilState } from "recoil";
import AddWorkspaceModal from "@components/workspace/add-workspace-modal";
import WorkspaceList from "@components/workspace/workspace-list";
import { WorkspaceListState } from "@store/Workspace";
import { WorkspaceService } from "../../services/openapi";

const WorkspacePage: NextPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [workspaces, setWorkspaces] = useRecoilState(WorkspaceListState);
    const colorScheme = useColorModeValue("purple", "orange");
    useEffect(() => {
        WorkspaceService.getWorkspace().then((result) => {
            if (result) {
                setWorkspaces(result);
            }
        });
    }, [setWorkspaces]);

    if (!workspaces) return <Spinner />;

    return (
        <>
            <Heading mb={4}>Workspaces</Heading>
            <Box mb={4}>
                <Button leftIcon={<AddIcon />} onClick={onOpen} colorScheme={colorScheme} variant="solid">
                    Workspace
                </Button>
                <AddWorkspaceModal onClose={onClose} isOpen={isOpen} setWorkspaces={setWorkspaces} />
            </Box>
            <Box>
                <WorkspaceList />
            </Box>
        </>
    );
};

export default WorkspacePage;
