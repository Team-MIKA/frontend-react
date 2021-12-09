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
import { useRecoilState } from "recoil";
import { addCategory, categoriesState } from "@components/widgets/time-smart/registration.store";
import { log } from "@lib/logger";

function AddModal(props: { open: boolean; onClose: () => void }) {
    const initialRef = React.useRef(null);
    const [name, setName] = useState("");
    const state = useRecoilState(categoriesState);

    const closing = () => {
        props.onClose();
        log(name);
        addCategory(state, name);
    };

    const handleKeypress = (event: React.KeyboardEvent) => {
        if (event.code === "Enter") {
            closing();
        }
    };

    const title = "Enter what you want to call the new registration form";
    return (
        <Modal
            data-testid={"addModal"}
            size={"2xl"}
            isOpen={props.open}
            onClose={props.onClose}
            initialFocusRef={initialRef}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader data-testid={"modal-header"}>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input
                        ref={initialRef}
                        role="user-input"
                        maxLength={12}
                        placeholder="E.g. Pause"
                        onKeyDown={handleKeypress}
                        onChange={(event) => setName(event.currentTarget.value)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        type="submit"
                        role={"done-button"}
                        bg={useColorModeValue("pink", "teal")}
                        mr={3}
                        onClick={closing}
                    >
                        Done
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default AddModal;
