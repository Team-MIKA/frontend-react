import { NextPage } from "next";
import SapOrderWidget from "@components/widgets/sap/sapOrderWidget";
import { config, refresh } from "@store/axios";
import { absoluteUrl } from "../../lib";

// @ts-ignore
const Example: NextPage = ({ origin }) => {
    config.host = origin;
    refresh();

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
