import React, { useState } from "react";
import { Button, SimpleGrid, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addRegistration, registrationsState } from "@components/widgets/time-smart-list/logged-registrations.store";
import TimerModal from "@components/widgets/time-smart/timer-modal";
import { log } from "@helpers/logger";
import { publishId } from "@store/order";
import { CategoryDTO } from "../../../services/openapi";

function RegistrationButtons({ buttonCategories }: { buttonCategories: CategoryDTO[] }) {
    const [selectedCategory, setSelectedCategory] = useState({} as CategoryDTO);
    const state = useRecoilState(registrationsState);
    const order = useRecoilValue(publishId);

    let buttonColors = useColorModeValue("pink", "teal");
    const { isOpen, onOpen, onClose } = useDisclosure();
    let startTime = new Date();

    const opening = (category: CategoryDTO) => {
        onOpen();
        setSelectedCategory(category);
        startTime = new Date();
    };

    const closing = () => {
        const stopTime = new Date();
        const newReg = {
            category: selectedCategory,
            startTime: startTime,
            endTime: stopTime,
            orderId: order.id,
        };
        addRegistration(state, newReg);
        const registrationDuration = Math.floor((stopTime.getTime() - startTime.getTime()) / 1000);
        log(registrationDuration);
        onClose();
    };
    return (
        <SimpleGrid minChildWidth="120px" spacing="20px">
            {buttonCategories.map((category, key) => (
                <Button
                    disabled={order.id === ""}
                    role={"reg-button"}
                    variant={"outline"}
                    bg={buttonColors}
                    key={key}
                    onClick={() => opening(category)}
                >
                    {category.text}
                </Button>
            ))}

            <TimerModal data-testid={"timer-modal"} open={isOpen} onClose={closing} text={selectedCategory.text} />
        </SimpleGrid>
    );
}

export default RegistrationButtons;
