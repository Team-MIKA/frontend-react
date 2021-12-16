import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Wrap,
    WrapItem,
    Button,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { log } from "@lib/logger";
import { WorkspaceState } from "@store/Workspace";
import { WidgetDTO, WidgetService, WorkspaceDTO, WorkspaceService } from "../../services/openapi";

const AddWidgetModal = ({ onClose, isOpen }: { onClose: () => void; isOpen: boolean }) => {
    const [workspace, setWorkspace] = useRecoilState(WorkspaceState);
    const [widgets, setWidgets] = useState<WidgetDTO[]>(null);
    type Widget = WidgetDTO;
    const [selectedWidget, setSelectedWidget] = useState<Widget>(null);

    useEffect(() => {
        WidgetService.getWidget().then((result) => {
            if (result) {
                setWidgets(result);
            }
        });
    }, [setWidgets]);

    const close = () => {
        onClose();
    };

    const handleClick = (widget: WidgetDTO) => {
        setSelectedWidget(selectedWidget == widget ? null : widget);
    };

    const save = () => {
        WorkspaceService.postWorkspace1(workspace.id, { id: selectedWidget.id }).then((result) => {
            if (result) {
                const newDto = {
                    ...workspace,
                    widgets: [...workspace.widgets, { ...selectedWidget, id: result }],
                } as WorkspaceDTO;

                setWorkspace(newDto);
                log("workspace:", workspace);
            }
        });

        setSelectedWidget(null);
        onClose();
    };

    return (
        <>
            <Modal size={"2xl"} isOpen={isOpen} onClose={close}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Card</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Wrap>
                            {widgets &&
                                widgets.map((widget, key) => (
                                    <WrapItem key={key} onClick={() => handleClick(widget)} cursor={"pointer"}>
                                        <Button
                                            padding={2}
                                            border={"2px solid gray"}
                                            borderRadius={"md"}
                                            minW="80px"
                                            minH="60px"
                                            background={selectedWidget == widget ? "gray" : ""}
                                        >
                                            {widget.title}
                                        </Button>
                                    </WrapItem>
                                ))}
                        </Wrap>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={save}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddWidgetModal;
