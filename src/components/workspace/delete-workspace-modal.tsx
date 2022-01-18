import React, { FC, useRef } from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { WorkspaceListState } from "@store/Workspace";
import { WorkspaceDto, WorkspaceService } from "../../services/openapi";

const DeleteWorkspaceModal: FC<{ workspace: WorkspaceDto; onClose: any; isOpen: boolean }> = ({
    workspace,
    onClose,
    isOpen,
}) => {
    const setWorkspaces = useSetRecoilState(WorkspaceListState);
    const cancelRef = useRef(null);

    const removeWorkspace = (workspaceId: string) => {
        WorkspaceService.deleteWorkspace(workspaceId).then((result) => {
            if (result) {
                setWorkspaces((w) => w.filter((x) => x.id !== workspaceId));
            }
        });
        onClose();
    };

    return (
        <>
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay data-testid={"deleteWorkspaceModal"}>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Workspace
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure you want to delete the Workspace {workspace.title}?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose} data-testid={"cancel"}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={() => removeWorkspace(workspace.id)}
                                ml={3}
                                data-testid={"delete"}
                            >
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
