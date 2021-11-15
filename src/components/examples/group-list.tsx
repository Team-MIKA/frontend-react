import { ListItem, UnorderedList } from "@chakra-ui/layout";
import { useRecoilState } from "recoil";
import { GroupMemberState } from "@store";

const GroupList = () => {
    const [value, setValue] = useRecoilState(GroupMemberState);

    return (
        <>
            <UnorderedList>
                {value.map((person, key) => (
                    <ListItem key={key}>{person}</ListItem>
                ))}
            </UnorderedList>
        </>
    );
};

export default GroupList;
