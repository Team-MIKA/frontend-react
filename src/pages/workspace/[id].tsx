import React, { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, useColorModeValue, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import AddWidgetModal from "@components/workspace/add-widget-modal";
import WidgetRender from "@components/workspace/widget-render";
import { WorkspaceListState, WorkspaceState } from "@store/workspace";

const WorkspaceView: NextPage = () => {
    const router = useRouter();

    const [workspaces] = useRecoilState(WorkspaceListState);
    const [workspace, setWorkspace] = useRecoilState(WorkspaceState);

    const { isOpen, onOpen, onClose } = useDisclosure();

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

            <Button
                leftIcon={<AddIcon />}
                onClick={onOpen}
                colorScheme={useColorModeValue("purple", "orange")}
                variant="solid"
            >
                Card
            </Button>

            <AddWidgetModal onClose={onClose} isOpen={isOpen} />

            <Wrap mt={4}>
                {workspace.cards?.map((card, key) => (
                    <WrapItem key={key}>
                        <WidgetRender card={card} />
                    </WrapItem>
                ))}
            </Wrap>
        </>
    );
};

export default WorkspaceView;