import { Wrap, WrapItem } from "@chakra-ui/react";

import { useRecoilValue } from "recoil";
import { WorkspaceListState } from "@store/workspace";

import WorkspaceCard from "./workspace-card";

const WorkspaceList = () => {
    const workspaces = useRecoilValue(WorkspaceListState);

    return (
        <Wrap mb={4}>
            {workspaces.map((workspace, key) => (
                <WrapItem key={key} cursor={"pointer"}>
                    <WorkspaceCard workspace={workspace} />
                </WrapItem>
            ))}
        </Wrap>
    );
};

export default WorkspaceList;
