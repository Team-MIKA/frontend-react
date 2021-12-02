import React, { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, useColorModeValue, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import AddWidgetModal from "@components/workspace/add-widget-modal";
import WidgetRender from "@components/workspace/widget-render";
import { log } from "@helpers/logger";
import { WorkspaceState } from "@store/workspace";
import { WorkspaceService } from "../../services/openapi";

const WorkspaceView: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [workspace, setWorkspace] = useRecoilState(WorkspaceState);

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (!id) return;

        const workspaceId = id as string;
        log(workspaceId);

        WorkspaceService.getWorkspace1(workspaceId).then((result) => {
            if (result) {
                setWorkspace(result);
            }
        });
    }, [id, setWorkspace]);

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
                {workspace.widgets?.map((widget, key) => (
                    <WrapItem key={key}>
                        <WidgetRender widget={widget} />
                    </WrapItem>
                ))}
            </Wrap>
        </>
    );
};

export default WorkspaceView;
