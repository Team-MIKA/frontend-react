import { httpMethod, Ressource } from '@components/connector-modal';
import logger from '@helpers/logger';
import React from 'react';
import { Subject } from 'rxjs'


// https://www.youtube.com/watch?v=EsIYiRpDZuA
export interface Item {
    id: string;
}

export interface ItemState {
    item: Item;
    tableRessource: Ressource;
}


const initialState: ItemState = {
    item: {id: ''},
    tableRessource: {label: '', id: '', httpMethod: httpMethod.GET, url: ''},
    
};

const subject = new Subject<ItemState>();


let state = initialState;

    
const itemStore = {

    subscribe: (setItemState: React.Dispatch<React.SetStateAction<ItemState>>) => subject.subscribe((state) => setItemState(state)),

    setItem: (newItem: Item) => {
        state = {
          ...state,
          item: {id: newItem.id} // We don't want to "merge" our previous item into our new item. Thus ...state.item is removed
         };
         subject.next(state);
         logger.log(state);
    },

    clearItem: () => {
        state = {
            ...state,
            item: {id: ''},
        }
        subject.next(state);
        logger.log(state);
    },

    setTableRessource: (dataSource: Ressource) => {
        state = {
            ...state,
            tableRessource: dataSource 
           };
           subject.next(state);
    },

    initialState,
};



export default itemStore;