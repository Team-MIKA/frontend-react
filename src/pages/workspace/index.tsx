import { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Heading, Button, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRecoilState } from "recoil";
import AddWorkspaceModal from "@components/workspace/add-workspace-modal";
import WorkspaceList from "@components/workspace/workspace-list";
import { WidgetListState } from "@store/widget";
import { WorkspaceListState } from "@store/workspace";
import { WidgetService, WorkspaceService } from "../../services/openapi";

const WorkspacePage: NextPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [, setWorkspaces] = useRecoilState(WorkspaceListState);
    const [, setWidgets] = useRecoilState(WidgetListState);

    useEffect(() => {
        WorkspaceService.getWorkspace().then((result) => {
            if (result) setWorkspaces(result);
        });

        WidgetService.getWidget().then((result) => {
            if (result) setWidgets(result);
        });
    }, [setWidgets, setWorkspaces]);
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
