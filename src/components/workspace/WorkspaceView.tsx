import React, { useEffect, useState } from "react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, IconButton, useColorModeValue, useDisclosure, Wrap } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Workspace } from "@components/widgets/generic";
import AddWidgetModal from "@components/workspace/add-widget-modal";
import DeleteWidget from "@components/workspace/delete-widget";
import { Panel } from "@components/workspace/Panel";
import { OptionsPopOver } from "@components/workspace/widget-render";
import { WorkspaceService } from "@generated/services/WorkspaceService";
import { log } from "@lib/logger";
import { PublisherWidget, SubscriberWidget } from "@lib/Widget";
import { Order } from "@store/order";
import { HideOptionsState, WorkspaceState } from "@store/Workspace";

const WorkspaceView: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [workspace, setWorkspace] = useRecoilState(WorkspaceState);
    const [hide, setHide] = useRecoilState(HideOptionsState);
    const [item, setItem] = useState<Order>(null);
    const [publishers, setPublishers] = useState<PublisherWidget<any>[]>(null);
    const [subscribers, setSubscribers] = useState<SubscriberWidget<any>[]>(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (!id) return;

        const workspaceId = id as string;
        log(workspaceId);
        WorkspaceService.getWorkspace1(workspaceId).then((result) => {
            if (result) {
                log("Get Workspace", result);
                setWorkspace(result);
            }
        });
    }, [id, setWorkspace]);

    useEffect(() => {
        if (!workspace.id) return;

        // Update workspace view, every time the workspace DTO change
        const w = new Workspace(workspace);
        setPublishers(w.publisher);
        setSubscribers(w.subscribers);
    }, [workspace]);

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
                {publishers &&
                    publishers.map((publisher, index) => {
                        const obj = publisher;

                        return (
                            <Panel
                                buttons={
                                    <>
                                        <OptionsPopOver options={obj.dto.options} />
                                        <DeleteWidget widgetId={obj.dto.id} />
                                    </>
                                }
                                key={"subscriberWidget" + index}
                            >
                                <obj.render item={item} setItem={setItem} options={obj.dto.options} />
                            </Panel>
                        );
                    })}

                {subscribers &&
                    subscribers.map((subscriber, index) => {
                        const obj = subscriber;
                        return (
                            <Panel
                                buttons={
                                    <>
                                        <OptionsPopOver options={obj.dto.options} />
                                        <DeleteWidget widgetId={obj.dto.id} />
                                    </>
                                }
                                key={"subscriberWidget" + index}
                            >
                                <obj.render item={item} options={obj.dto.options} />
                            </Panel>
                        );
                    })}
            </Wrap>
        </>
    );
};
export default WorkspaceView;
