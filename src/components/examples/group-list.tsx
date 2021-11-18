import { ListItem, UnorderedList } from "@chakra-ui/layout";
import { GroupMemberState } from "@store/index2";
import { useRecoilState } from "recoil";

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
