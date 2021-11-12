import {Box, Text, Heading } from "@chakra-ui/react"
import itemStore from "@store/item";
import React, {useState, useEffect} from "react"


const TestBox = ({title}) => {

    const [itemState, setItemState] = useState(itemStore.initialState);

    useEffect(() => {
        const subscription = itemStore.subscribe(setItemState);
        return () => subscription.unsubscribe();
    }, []); // [] avoids useEffect to be run on every render of component.

    return(
        <Box border="2px solid gray" borderRadius="md"> 
            <Heading> {title}</Heading>
            <Text > 
                {itemState.item.id}
            </Text>
        </Box>
    )
};

export default TestBox;