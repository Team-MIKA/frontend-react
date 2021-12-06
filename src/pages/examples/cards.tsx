import { NextPage } from "next";
import SapOrderWidget from "@components/widgets/sap/sapOrderWidget";
import { absoluteUrl } from "@lib/absoluteUrl";
import instance from "@store/axios";

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
