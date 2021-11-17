import { NextPage } from "next";
import AddGroupMember from "@components/examples/add-group-member";
import GroupList from "@components/examples/group-list";

const Example: NextPage = () => {
    return (
        <>
            <AddGroupMember />
            <GroupList />
        </>
    );
};

export default Example;
