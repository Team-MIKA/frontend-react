import { Wrap, Heading, WrapItem, Center } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { WorkspaceState } from "@store";

const WorkspaceList = () => {
    const [workspaces] = useRecoilState(WorkspaceState);
    const router = useRouter();

    return (
        <>
            <Heading mb={4}>Workspaces</Heading>

            <Wrap>
                {workspaces.map((workspace, key) => (
                    <WrapItem key={key} cursor={"pointer"} onClick={() => router.push("/workspace/" + workspace.id)}>
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
