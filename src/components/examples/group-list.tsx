import { ListItem, UnorderedList } from "@chakra-ui/layout";
import { useRecoilValue } from "recoil";
import { GroupMemberState } from "@store/index";

const GroupList = () => {
    const value = useRecoilValue(GroupMemberState);

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
