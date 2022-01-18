import { FC, useState } from "react";
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
import { WorkspaceDto, WorkspaceService } from "../../services/openapi";
interface AddWorkspaceModalProps {
    onClose: any;
    isOpen: boolean;
    setWorkspaces: (setter: (prevState: WorkspaceDto[]) => WorkspaceDto[]) => void;
}
const AddWorkspaceModal: FC<AddWorkspaceModalProps> = ({ onClose, isOpen, setWorkspaces }) => {
    const [title, setTitle] = useState("");

    const save = () => {
        const workSpace: WorkspaceDto = { title: title };
        WorkspaceService.postWorkspace(workSpace).then((result) => {
            if (result) {
                setWorkspaces((prevState: WorkspaceDto[]) => [...prevState, { ...workSpace, id: result }]);
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
