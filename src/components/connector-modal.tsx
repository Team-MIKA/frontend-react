import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Select,

} from "@chakra-ui/react"
import { LinkIcon } from "@chakra-ui/icons";
import { useEffect, useState } from 'react'
import logger from "@helpers/logger";
import itemStore from "@store/item";


export enum httpMethod {
  GET, 
  POST,
  PUT,
  DELETE,
}

export interface Connector {
  label: string,
  id: string,
  resources: Ressource[],
}

export interface Ressource {
  label: string,
  id: string,
  url: string,
  httpMethod: httpMethod,
}


const ConnectorModal = () =>  {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [connector, setConnector] = useState("")
    const [ressource, setRessource] = useState("")

    const [itemState, setItemState] = useState(itemStore.initialState);

    const save = () => {
        
        itemStore.setTableRessource(ressource)

      return onClose();
    }

    const getRessources = (connectorId: string): Ressource[] => {
      const connector = connectors.find(x => x.id == connectorId)

      return connector ? connector.ressources : [] as Ressource[]
    }

     const connectors = [
      { label: 'Time Smart', id: 'timesmart', ressources: [
        {label: "Order", id: 'order', url: 'http://localhost:3000/api/timesmart/order/{id}', httpMethod: httpMethod.GET}
      ] as Ressource[] },
      { label: 'Sap Persona', id: 'sappersona', ressources: [
        {label: 'Orders', id: 'orders', url: 'http://localhost:3000/api/sap-persona/orders', httpMethod: httpMethod.GET}
      ] as Ressource[] },
      { label: 'BlackBird', id: 'blackbird', ressources: [
        {label: 'Data', id: 'data', url: 'http://localhost:3000/api/blackbird/somedata', httpMethod: httpMethod.GET}
      ] as Ressource[] },
    ] 
    
    useEffect(() => {
      const subscription = itemStore.subscribe(setItemState);  
      return () => subscription.unsubscribe();
  }, [itemState]); // [] avoids useEffect to be run on every render of component.

    

    return (
      <>
        <IconButton 
            aria-label="Select Connector"
            icon={<LinkIcon />}
            onClick={onOpen}
        />
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add API</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

            <Select mb={4} placeholder="Select connector" 
              value={connector} onChange={(event) => setConnector(event.target.value)} >
                
              {connectors.map((e, key) => {
                      return <option key={key} value={e.id}>{e.label}</option>;
                  })}
            </Select>

            <Select  placeholder="Select ressource" 
              value={ressource} onChange={(event) => setRessource(event.target.value)} >
                
              {getRessources(connector).map((e, key) => {
                      return <option key={key} value={e.id}>{e.label}</option>;
                  })}
            </Select>

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

  export default ConnectorModal;