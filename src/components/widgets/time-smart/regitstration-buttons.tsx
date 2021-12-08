import React, { useState } from "react";
import { Button, SimpleGrid, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addRegistration, registrationsState } from "@components/widgets/time-smart-list/logged-registrations.store";
import TimerModal from "@components/widgets/time-smart/timer-modal";
import { log } from "@helpers/logger";
import { publishId } from "@store/order";

function RegistrationButtons({ buttons }: { buttons: string[] }) {
    const [buttonText, setButtonText] = useState("");
    let buttonColors = useColorModeValue("pink", "teal");
    const { isOpen, onOpen, onClose } = useDisclosure();
    let startTime = new Date();
    const state = useRecoilState(registrationsState);

    const order = useRecoilValue(publishId);
    log("order id", order);

    const opening = (buttonText: string) => {
        onOpen();
        setButtonText(buttonText);
        startTime = new Date();
    };

    const closing = () => {
        const stopTime = new Date();
        const newReg = { category: buttonText, buttons, startTime: startTime, endTime: stopTime, orderId: order.id };
        addRegistration(state, newReg);
        const registrationDuration = Math.floor((stopTime.getTime() - startTime.getTime()) / 1000);
        log(registrationDuration);
        onClose();
    };
    return (
        <SimpleGrid minChildWidth="120px" spacing="20px">
            {buttons.map((buttonText) => (
                <Button
                    disabled={order.id === ""}
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
