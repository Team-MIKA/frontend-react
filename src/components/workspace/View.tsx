import React, { useEffect, useState } from "react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, IconButton, useColorModeValue, useDisclosure, Wrap } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Workspace } from "@components/widgets/generic";
import AddWidgetModal from "@components/workspace/add-widget-modal";
import DeleteWidget from "@components/workspace/delete-widget";
import { WorkspaceService } from "@generated/services/WorkspaceService";
import { log } from "@lib/logger";
import { PublisherWidget, SubscriberWidget } from "@lib/Widget";
import { Order } from "@store/order";
import { HideOptionsState, WorkspaceState } from "@store/Workspace";

const View: NextPage = () => {
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
        const h = new Workspace(workspace);
        setPublishers(h.publisher);
        setSubscribers(h.subscribers);
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
                            <Box
                                maxW="m"
                                minW={"s"}
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                key={"subscriberWidget" + index}
                            >
                                <DeleteWidget widgetId={obj.dto.id} />
                                <obj.render item={item} setItem={setItem} options={["skrrt"]} />
                            </Box>
                        );
                    })}

                {subscribers &&
                    subscribers.map((subscriber, index) => {
                        const obj = subscriber;
                        return (
                            <Box
                                maxW="m"
                                minW={"200px"}
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                key={"subscriberWidget" + index}
                            >
                                <DeleteWidget widgetId={obj.dto.id} />
                                <obj.render item={item} options={["hej"]} />
                            </Box>
                        );
                    })}
            </Wrap>
        </>
    );
};
export default View;
