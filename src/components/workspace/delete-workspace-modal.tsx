import React, { useRef, useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    IconButton,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { Workspace, WorkspaceListState } from "@store/index";

const DeleteWorkspaceModal = ({ workspace }: { workspace: Workspace }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef(null);

    const [workspaces, setWorkspaces] = useRecoilState(WorkspaceListState);

    const removeWorkspace = () => {
        const filteredWorkspaces = workspaces.filter((x) => x.id !== workspace.id);
        setWorkspaces(filteredWorkspaces);

        return onClose();
    };

    return (
        <>
            <IconButton
                position={"absolute"}
                background={"transparent"}
                icon={<DeleteIcon />}
                aria-label={"Remove Workspace"}
                onClick={() => setIsOpen(true)}
            />
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Workspace
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure you want to delete the Workspace {workspace.title}?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={removeWorkspace} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default DeleteWorkspaceModal;
