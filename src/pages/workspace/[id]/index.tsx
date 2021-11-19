import React, { useEffect } from "react";
import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import AddCardModal from "@components/workspace/add-card-modal";
import RenderCard from "@components/workspace/render-card";
import { WorkspaceListState, WorkspaceState } from "@store/index";

const WorkspaceView: NextPage = () => {
    const router = useRouter();

    const [workspaces, setWorkspaces] = useRecoilState(WorkspaceListState);
    const [workspace, setWorkspace] = useRecoilState(WorkspaceState);

    useEffect(() => {
        const workspaceId = router.query.id as string;
        let workspace = workspaces.find((x) => x.id == workspaceId);
        if (workspace) setWorkspace(workspace);
    }, [router.query.id, setWorkspace, workspaces]);

    return (
        <>
            <Box display={{ md: "flex" }} mb={4}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        {workspace.title}
                    </Heading>
                </Box>
            </Box>

            <AddCardModal />

            <Wrap mt={4}>
                {workspace.cards?.map((card, key) => (
                    <WrapItem key={key}>
                        <RenderCard card={card} />
                    </WrapItem>
                ))}
            </Wrap>
        </>
    );
};

export default WorkspaceView;
