import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const BackButton = () => {
    const { back, pathname } = useRouter();
    if (pathname == "/") return null;
    return (
        <IconButton
            variant="ghost"
            as="button"
            aria-label="Go back"
            onClick={() => back()}
            icon={<ArrowBackIcon fontSize="20px" />}
        />
    );
};
