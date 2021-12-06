import React from "react";
import { IconButton } from "@chakra-ui/button";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { WorkspaceService } from "@generated/services/WorkspaceService";
import { HideOptionsState, WorkspaceState } from "@store/workspace";

const DeleteWidget = ({ widgetId }: { widgetId: string }) => {
    const hide = useRecoilValue(HideOptionsState);
    const [workspace, setWorkspace] = useRecoilState(WorkspaceState);
    const removeWidget = () => {
        WorkspaceService.deleteWorkspace1(widgetId).then((result) => {
            if (result) {
                const filteredWidgets = workspace.widgets.filter((x) => x.id !== widgetId);
                setWorkspace({ ...workspace, widgets: filteredWidgets });
            }
        });
    };
    return (
        <>
            <IconButton
                hidden={hide}
                textColor={"red"}
                position={"absolute"}
                background={"transparent"}
                icon={<DeleteIcon />}
                aria-label={"Remove Widget"}
                onClick={() => removeWidget()}
            />
        </>
    );
};

export default DeleteWidget;
