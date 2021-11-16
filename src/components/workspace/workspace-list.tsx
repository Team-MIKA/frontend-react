import { Wrap, Heading, WrapItem, Center } from "@chakra-ui/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { WorkspaceListState } from "@store";

const WorkspaceList = () => {
    const [workspaces] = useRecoilState(WorkspaceListState);

    return (
        <>
            <Heading mb={4}>Workspaces</Heading>

            <Wrap>
                {workspaces.map((workspace, key) => (
                    <WrapItem key={key} cursor={"pointer"}>
                        <Link href={"/workspace/" + workspace.id} passHref>
                            <Center padding={2} border={"2px solid gray"} borderRadius={"md"} minW="80px" minH="60px">
                                {workspace.title}
                            </Center>
                        </Link>
                    </WrapItem>
                ))}
            </Wrap>
        </>
    );
};

export default WorkspaceList;
