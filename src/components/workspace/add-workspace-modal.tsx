import { useState } from "react";
import {
    useDisclosure,
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
import { WorkspaceState } from "@store";

const AddWorkspaceModal = () => {
    const [title, setTitle] = useState("");

    const [workspaces, setWorkspaces] = useRecoilState(WorkspaceState);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const save = () => {
        // Save to database
        // Insert generated ID from backend
        // Add to state

        //Mock db returning ID.
        const idFromDb = Math.floor(Math.random() * 16).toString();

        setWorkspaces([...workspaces, { title: title, id: idFromDb }]);
        setTitle("");
        return onClose();
    };

    return (
        <>
            <Button onClick={onOpen}>Add Workspace</Button>

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
