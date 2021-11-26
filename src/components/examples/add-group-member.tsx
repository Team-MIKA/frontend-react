import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { GroupMemberState } from "@store/index";

function AddGroupMember() {
    const [users, setUsers] = useRecoilState(GroupMemberState);

    const [name, setName] = useState("");

    const addNameToUsers = () => {
        setUsers([...users, name]);
        setName("");
    };

    return (
        <>
            <Input
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
                placeholder="Add Group Member"
                size="sm"
            />
            <Button onClick={addNameToUsers}>Add</Button>
        </>
    );
}
export default AddGroupMember;
