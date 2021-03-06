import React, { useState } from "react";
import { Button, SimpleGrid, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { addRegistration, registrationsState } from "@components/widgets/time-smart-list/logged-registrations.store";
import TimerModal from "@components/widgets/time-smart/timer-modal";
import { log } from "@lib/logger";
import { Order } from "@store/order";

function RegistrationButtons({ buttons, order }: { buttons: string[]; order: Order }) {
    const [buttonText, setButtonText] = useState("");
    let buttonColors = useColorModeValue("pink", "teal");
    const { isOpen, onOpen, onClose } = useDisclosure();
    let startTime = new Date();
    const state = useRecoilState(registrationsState);

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
                    disabled={!order}
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
