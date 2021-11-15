import { 
    useDisclosure, 
    Button, 
    Modal, 
    ModalOverlay, 
    ModalCloseButton, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    ModalContent,
    Input,
    Text } from "@chakra-ui/react"

import {useState} from "react"

const AddWorkspace = () =>  {

    const [value, setValue]  = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const save = () => {
        console.log("SAVE WORKSPACE: ", value);
        return onClose();
    }

    return (
      <>
        <Button onClick={onOpen}>Add Workspace</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Workspace</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

                <Text mb="8px">Value: {value}</Text>
                <Input
                    value={value}
                    onChange={ (event) => setValue(event.target.value)}
                    placeholder="Title of workspace"
                    size="sm"
                />

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={save}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>


      </>
    )
  }

  export default AddWorkspace