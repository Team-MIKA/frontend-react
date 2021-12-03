import { Link, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import AddGroupMember from "@components/examples/add-group-member";
import GroupList from "@components/examples/group-list";

const Example: NextPage = () => {
    const subppages = ["cards"];
    const SubpagesLinks = () => (
        <>
            <Text> There are these subpages</Text>
            <>
                {subppages.map((file) => (
                    <NextLink href={"examples/" + file} key={"link" + file}>
                        <Link>{file}</Link>
                    </NextLink>
                ))}
            </>
        </>
    );

    return (
        <>
            <SubpagesLinks />
            <AddGroupMember />
            <GroupList />
        </>
    );
};

export default Example;
