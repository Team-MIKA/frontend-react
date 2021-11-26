import React, { useState } from "react";
import { Button, SimpleGrid, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import TimerModal from "@components/time-smart/timer-modal";
import { log } from "@helpers/logger";

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
        let registrationDuration = Math.floor((stopTime.getTime() - startTime.getTime()) / 1000);
        log(registrationDuration);
    };

    return (
        <SimpleGrid minChildWidth="120px" spacing="20px">
            {buttons.map((buttonText) => (
                <Button
                    role={"reg-button"}
                    variant={"outline"}
                    bg={buttonColors}
                    key={buttonText}
                    onClick={() => opening(buttonText)}
                >
                    {buttonText}
                </Button>
            ))}

            <TimerModal data-testid={"timer-modal"} open={isOpen} onClose={closing} text={buttonText} />
        </SimpleGrid>
    );
}

export default RegistrationButtons;
