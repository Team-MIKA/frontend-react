import { useState } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalContent,
    Input,
    Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { Widget, WorkspaceListState } from "@store/workspace";
import { WorkspaceDTO, WorkspaceService } from "../../services/openapi";

const AddWorkspaceModal = ({ onClose, isOpen }: { onClose: any; isOpen: boolean }) => {
    const [title, setTitle] = useState("");

    const [workspaces, setWorkspaces] = useRecoilState(WorkspaceListState);

    const save = () => {
        const workSpace: WorkspaceDTO = { title: title };
        WorkspaceService.postWorkspace(workSpace).then((result) => {
            if (result) {
                setWorkspaces([...workspaces, { title: title, id: result, widgets: [] as Widget[] }]);
            }
        });

        setTitle("");
        onClose();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Workspace</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb="8px">Value: {title}</Text>
                        <Input
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Title of workspace"
                            size="sm"
                            maxLength={30}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} disabled={title == ""} onClick={save}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddWorkspaceModal;
