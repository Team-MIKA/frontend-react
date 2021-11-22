import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Button, useColorModeValue } from "@chakra-ui/react";

function AddButton() {
    return (
        <Button role={"reg-button"} bg={useColorModeValue("pink", "teal")} variant={"outline"} onClick={() => {}}>
            {<AddIcon w={6} h={6} />}
        </Button>
    );
}

export default AddButton;
