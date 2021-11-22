import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Button, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import AddModal from "@components/time-smart/add-modal";

function AddButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                role={"add-button"}
                bg={useColorModeValue("#ffffff40", "whiteAlpha.200")}
                variant={"outline"}
                onClick={() => onOpen()}
            >
                {<AddIcon w={6} h={6} />}
            </Button>
            <AddModal data-testid={"timer-modal"} open={isOpen} onClose={onClose} />
        </>
    );
}

export default AddButton;
