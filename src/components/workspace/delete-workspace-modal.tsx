import React, { useRef } from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { Workspace, WorkspaceListState } from "@store/index";
import { WorkspaceService } from "../../services/openapi";

const DeleteWorkspaceModal = ({
    workspace,
    onClose,
    isOpen,
}: {
    workspace: Workspace;
    onClose: any;
    isOpen: boolean;
}) => {
    const cancelRef = useRef(null);

    const [workspaces, setWorkspaces] = useRecoilState(WorkspaceListState);

    const removeWorkspace = (workspaceId: string) => {
        WorkspaceService.deleteWorkspace(workspaceId).then((result) => {
            if (result) {
                const filteredWorkspaces = workspaces.filter((x) => x.id !== workspaceId);
                setWorkspaces(filteredWorkspaces);
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
