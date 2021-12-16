import React, { FC } from "react";
import { IconButton } from "@chakra-ui/button";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { WorkspaceDTO } from "@generated/models/WorkspaceDTO";
import { WorkspaceService } from "@generated/services/WorkspaceService";
import { HideOptionsState, WorkspaceState } from "@store/Workspace";

interface DeleteWidgetProps {
    widgetId: string;
}
const DeleteWidget: FC<DeleteWidgetProps> = ({ widgetId }) => {
    const setWorkspace = useSetRecoilState(WorkspaceState);
    const hide = useRecoilValue(HideOptionsState);
    const removeWidget = () => {
        WorkspaceService.deleteWorkspace1(widgetId).then((result) => {
            if (result) {
                setWorkspace((w) => {
                    return { ...w, widgets: w.widgets.filter((x) => x.id !== widgetId) } as WorkspaceDTO;
                });
            }
        });
    };
    return (
        <>
            <IconButton
                hidden={hide}
                textColor={"red"}
                background={"transparent"}
                icon={<DeleteIcon />}
                size="sm"
                aria-label={"Remove Widget"}
                onClick={() => removeWidget()}
            />
        </>
    );
};

export default DeleteWidget;
