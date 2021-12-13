import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Button, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import AddModal from "@components/widgets/time-smart/add-modal";
import { HideOptionsState } from "@store/Workspace";

function AddButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const hide = useRecoilValue(HideOptionsState);
    return (
        <>
            <Button
                role={"add-button"}
                bg={useColorModeValue("#ffffff40", "whiteAlpha.200")}
                variant={"outline"}
                onClick={() => onOpen()}
                hidden={hide}
            >
                {<AddIcon w={6} h={6} />}
            </Button>
            <AddModal data-testid={"timer-modal"} open={isOpen} onClose={onClose} />
        </>
    );
}

export default AddButton;
