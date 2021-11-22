import React from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useColorModeValue,
} from "@chakra-ui/react";
import StopWatch from "@components/time-smart/stop-watch";

function TimerModal(props: { open: boolean; onClose: () => void; text: string }) {
    return (
        <Modal data-testid={"modal"} size={"2xl"} isOpen={props.open} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader data-testid={"modal-header"}>{props.text}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <StopWatch />
                    <>Start time: {new Date().toLocaleTimeString("en-UK")}</>
                </ModalBody>
                <ModalFooter>
                    <Button role={"done-button"} bg={useColorModeValue("pink", "teal")} mr={3} onClick={props.onClose}>
                        Done
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default TimerModal;
