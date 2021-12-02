import { NextPage } from "next";
import AddGroupMember from "@components/examples/add-group-member";
import GroupList from "@components/examples/group-list";
import { log } from "../../helpers/logger";
import { SettingsService } from "../../services/openapi";

const Example: NextPage = () => {
    SettingsService.getSettings().then((settings) => {
        log(settings);
    });
    return (
        <>
            <AddGroupMember />
            <GroupList />
        </>
    );
};

export default Example;
