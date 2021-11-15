import { Box, Container } from "@chakra-ui/react";
import { NextPage } from "next";
import AddWorkspaceModal from "@components/workspace/add-workspace-modal";
import WorkspaceList from "@components/workspace/workspace-list";

const WorkspacePage: NextPage = () => {
    return (
        <Container>
            <Box mb={4}>
                <WorkspaceList />
            </Box>
            <Box>
                <AddWorkspaceModal />
            </Box>
        </Container>
    );
};

export default WorkspacePage;
