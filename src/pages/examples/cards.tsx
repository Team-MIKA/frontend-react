import { NextPage } from "next";
import SapOrderWidget from "@components/widgets/sap/sapOrderWidget";
import { log } from "@helpers/logger";
import { config } from "@store/axios";
import { absoluteUrl } from "../../lib";

const Example: NextPage = () => {
    return (
        <>
            <SapOrderWidget />
        </>
    );
};

Example.getInitialProps = async ({ req }) => {
    const { origin } = absoluteUrl(req);
    log(origin);
    config.host = origin;
    return {};
};

export default Example;
