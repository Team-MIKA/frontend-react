import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { WorkspaceState } from "@store";

const WorkspaceView: NextPage = () => {
    const router = useRouter();

    const workspaceId = router.query.id;
    const [workspaces] = useRecoilState(WorkspaceState);

    const getWorkspace = () => {
        return workspaces.find((x) => x.id == workspaceId);
    };

    const workspace = getWorkspace();

    return (
        <>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        {workspace?.title}
                    </Heading>
                </Box>
            </Box>
        </>
    );
};

export default WorkspaceView;
