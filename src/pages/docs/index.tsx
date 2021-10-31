import { Link } from "@chakra-ui/react";
import { NextPage } from "next";
const Documentation: NextPage = () => (
    <>
        <p>Document page</p>
        <Link href={"https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/index.js"} isExternal>
            Goto here to setup mdx documentation
        </Link>
    </>
);

export default Documentation;
