import { NextPage } from "next";
import SapOrderWidget from "@components/widgets/sap/sapOrderWidget";
import instance from "@store/axios";
import { absoluteUrl } from "../../lib";

// @ts-ignore
const Example: NextPage = ({ origin }: { origin: string }) => {
    instance.defaults.baseURL = origin + "/api";
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
