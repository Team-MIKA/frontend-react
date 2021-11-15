import { AddIcon } from "@chakra-ui/icons";
import {
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";

const AddCardModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <IconButton
                aria-label="Add Card"
                colorScheme={useColorModeValue("purple", "orange")}
                icon={<AddIcon />}
                onClick={onOpen}
            />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Card</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{"insert body"}</ModalBody>

                    <ModalFooter>{"insert footer"}</ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddCardModal;
