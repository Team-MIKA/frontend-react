import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { GroupMemberState } from "@store";

function AddGroupMember() {
    const [users, setUsers] = useRecoilState(GroupMemberState);

    const [name, setName] = useState("");

    const handleSave = () => {
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
            <Button onClick={handleSave}>Add</Button>
        </>
    );
}
export default AddGroupMember;
