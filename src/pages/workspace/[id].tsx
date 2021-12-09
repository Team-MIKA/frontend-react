import React, { useEffect } from "react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, IconButton, useColorModeValue, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import AddWidgetModal from "@components/workspace/add-widget-modal";
import DeleteWidget from "@components/workspace/delete-widget";
import WidgetRender from "@components/workspace/widget-render";
import { WorkspaceService } from "@generated/services/WorkspaceService";
import { log } from "@lib/logger";
import { Widget } from "@store/widget";
import { WorkspaceState, HideOptionsState, Workspace } from "@store/workspace";

const WorkspaceView: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [workspace, setWorkspace] = useRecoilState(WorkspaceState);
    const [hide, setHide] = useRecoilState(HideOptionsState);

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (!id) return;

        const workspaceId = id as string;
        log(workspaceId);

        WorkspaceService.getWorkspace1(workspaceId).then((result) => {
            if (result) {
                setWorkspace({
                    id: result.id,
                    title: result.title,
                    widgets: result.widgets as Widget[],
                } as Workspace);
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

            <IconButton
                float={"right"}
                marginLeft={"2"}
                colorScheme={useColorModeValue("purple", "orange")}
                variant="solid"
                aria-label="Edit Workspace"
                icon={<EditIcon />}
                onClick={() => setHide(!hide)}
            />

            <Button
                float={"right"}
                hidden={hide}
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
                        <DeleteWidget widgetId={widget.id} />
                        <WidgetRender widget={widget} />
                    </WrapItem>
                ))}
            </Wrap>
        </>
    );
};

export default WorkspaceView;
