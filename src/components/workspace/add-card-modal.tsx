import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useColorModeValue,
    useDisclosure,
    Wrap,
    WrapItem,
    Button,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { Card, WorkspaceState } from "@store/index";

const cards = [
    { title: "SAP", id: "1" },
    { title: "TIME SMART", id: "2" },
    { title: "TABLE", id: "3" },
] as Card[];

const AddCardModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [workspace, setWorkspace] = useRecoilState(WorkspaceState);
    const [selectedCard, setSelectedCard] = useState({} as Card);

    const close = () => {
        setSelectedCard({} as Card);

        return onClose();
    };

    const handleClick = (card: Card) => {
        selectedCard == card ? setSelectedCard({} as Card) : setSelectedCard(card);
    };

    const save = () => {
        setWorkspace({
            ...workspace,
            cards: [...workspace.cards, selectedCard],
        });

        setSelectedCard({} as Card);

        return onClose();
    };

    return (
        <>
            <Button
                leftIcon={<AddIcon />}
                onClick={onOpen}
                colorScheme={useColorModeValue("purple", "orange")}
                variant="solid"
            >
                Card
            </Button>

            <Modal size={"2xl"} isOpen={isOpen} onClose={close}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Card</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Wrap>
                            {cards.map((card, key) => (
                                <WrapItem key={key} onClick={() => handleClick(card)} cursor={"pointer"}>
                                    <Button
                                        padding={2}
                                        border={"2px solid gray"}
                                        borderRadius={"md"}
                                        minW="80px"
                                        minH="60px"
                                        background={selectedCard == card ? "gray" : ""}
                                    >
                                        {card.title}
                                    </Button>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={save}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddCardModal;