import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import AddWorkspaceModal from "@components/workspace/add-workspace-modal";
import WorkspaceList from "@components/workspace/workspace-list";

const WorkspacePage: NextPage = () => {
    return (
        <>
            <Heading mb={4}>Workspaces</Heading>
            <Box mb={4}>
                <AddWorkspaceModal />
            </Box>
            <Box>
                <WorkspaceList />
            </Box>
        </>
    );
};

export default WorkspacePage;
