import { NextPage } from "next";
import SapOrderWidget from "@components/widgets/sap/sapOrderWidget";
import { absoluteUrl } from "../../lib";

// @ts-ignore
const Example: NextPage = ({ origin }: { origin: string }) => {
    return (
        <>
            <SapOrderWidget origin={origin} />
        </>
    );
};

Example.getInitialProps = async ({ req }) => {
    const { origin } = absoluteUrl(req);
    return { origin };
};

export default Example;
