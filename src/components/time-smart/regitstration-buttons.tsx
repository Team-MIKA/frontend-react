import React, { useState } from "react";
import { Button, ButtonGroup, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import TimerModal from "@components/time-smart/timer-modal";

function RegistrationButtons({ buttons }: { buttons: string[] }) {
    const [buttonText, setButtonText] = useState("");
    let buttonColors = useColorModeValue("pink", "teal");
    const { isOpen, onOpen, onClose } = useDisclosure();
    let startTime = new Date();

    const opening = (buttonText: string) => {
        onOpen();
        setButtonText(buttonText);
        startTime = new Date();
    };

    const closing = () => {
        onClose();
        let stopTime = new Date();
        console.log(Math.floor((stopTime.getTime() - startTime.getTime()) / 1000));
    };

    return (
        <>
            <ButtonGroup variant="solid" spacing="6">
                {buttons.map((buttonText) => (
                    <Button variant={"outline"} bg={buttonColors} key={buttonText} onClick={() => opening(buttonText)}>
                        {buttonText}
                    </Button>
                ))}
            </ButtonGroup>
            <TimerModal open={isOpen} onClose={closing} text={buttonText} />
        </>
    );
}

export default RegistrationButtons;
