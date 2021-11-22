import React, { useState } from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Input,
    useColorModeValue,
} from "@chakra-ui/react";

function AddModal(props: { open: boolean; onClose: () => void }) {
    const [name, setName] = useState("");
    const closing = () => {
        props.onClose();
        console.log(name);
    };

    const title = "Enter what you want to call the new registration form";
    return (
        <Modal data-testid={"addModal"} size={"2xl"} isOpen={props.open} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader data-testid={"modal-header"}>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input
                        role="user-input"
                        placeholder="E.g. Pause"
                        onChange={(event) => setName(event.currentTarget.value)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button role={"done-button"} bg={useColorModeValue("pink", "teal")} mr={3} onClick={closing}>
                        Done
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default AddModal;
