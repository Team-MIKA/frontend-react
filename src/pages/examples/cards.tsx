import { NextPage } from "next";
import SapOrderWidget from "@components/widgets/sap/sapOrderWidget";
import { log } from "@helpers/logger";
import { config } from "@store/axios";
import { absoluteUrl } from "../../lib";

// @ts-ignore
const Example: NextPage = ({ origin }) => {
    config.host = origin;
    log("origin: ", origin);
    log("config.host: ", config);
    return (
        <>
            <SapOrderWidget />
        </>
    );
};

Example.getInitialProps = async ({ req }) => {
    const { origin } = absoluteUrl(req);
    return { origin };
};

export default Example;
