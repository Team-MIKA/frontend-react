import React, { useEffect } from "react";
import { Box, Center, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import AddCardModal from "@components/workspace/add-card-modal";
import { WorkspaceListState, WorkspaceState } from "@store";

const WorkspaceView: NextPage = () => {
    const router = useRouter();

    const [workspaces] = useRecoilState(WorkspaceListState);
    const [workspace, setWorkspace] = useRecoilState(WorkspaceState);

    useEffect(() => {
        const workspaceId = router.query.id as string;
        let workspace = workspaces.find((x) => x.id == workspaceId);
        if (workspace) setWorkspace(workspace);
    }, [router.query.id, setWorkspace, workspaces]);

    return (
        <>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        {workspace.title}
                    </Heading>
                </Box>
            </Box>

            <Wrap>
                {workspace.cards?.map((card, key) => (
                    <WrapItem key={key}>
                        <Center padding={2} border={"2px solid gray"} borderRadius={"md"} minW="80px" minH="60px">
                            {card.title}
                        </Center>
                    </WrapItem>
                ))}
            </Wrap>

            <AddCardModal />
        </>
    );
};

export default WorkspaceView;
