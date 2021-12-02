import React, { useState } from "react";
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
import { Widget, WidgetListState } from "@store/widget";
import { WorkspaceState } from "@store/workspace";
import { WorkspaceService } from "../../services/openapi";

const AddWidgetModal = ({ onClose, isOpen }: { onClose: () => void; isOpen: boolean }) => {
    const [workspace, setWorkspace] = useRecoilState(WorkspaceState);
    const [widgets] = useRecoilState(WidgetListState);
    const [selectedWidget, setSelectedWidget] = useState({} as Widget);

    const close = () => {
        setSelectedWidget({} as Widget);

        onClose();
    };

    const handleClick = (widget: Widget) => {
        setSelectedWidget(selectedWidget == widget ? ({} as Widget) : widget);
    };

    const save = () => {
        WorkspaceService.postWorkspace1(workspace.id, { id: selectedWidget.id }).then((result) => {
            if (result) {
                setWorkspace({
                    ...workspace,
                    widgets: [...workspace.widgets, selectedWidget],
                });
            }
        });

        setSelectedWidget({} as Widget);

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
                            {widgets.map((widget, key) => (
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
