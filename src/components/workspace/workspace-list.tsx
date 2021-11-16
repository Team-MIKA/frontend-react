import { Wrap, WrapItem } from "@chakra-ui/react";

import { useRecoilState } from "recoil";
import { WorkspaceListState } from "@store";

import WorkspaceCard from "./workspace-card";

const WorkspaceList = () => {
    const [workspaces] = useRecoilState(WorkspaceListState);

    return (
        <>
            <Wrap mb={4}>
                {workspaces.map((workspace, key) => (
                    <WrapItem key={key} cursor={"pointer"}>
                        <WorkspaceCard workspace={workspace}></WorkspaceCard>
                    </WrapItem>
                ))}
            </Wrap>
        </>
    );
};

export default WorkspaceList;
