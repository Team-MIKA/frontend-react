import React from 'react';
import { Subject } from 'rxjs'


// https://www.youtube.com/watch?v=EsIYiRpDZuA
export interface Item {
    id: string;
}

export interface ItemState {
    item: Item;
}


const initialState: ItemState = {
    item: {id: ''}
};

const subject = new Subject<ItemState>();


let state = initialState;

    
const itemStore = {

    subscribe: (setItemState: React.Dispatch<React.SetStateAction<ItemState>>) => subject.subscribe((state) => setItemState(state)),

    setItem: (newItem: Item) => {
        state = {
          ...state,
          item: {...state.item, id: newItem.id} // We don't want to "merge" our previous item into our new item. Thus ...state.item is removed
         };
         subject.next(state);
         console.log(state);
      },

      clearItem: () => {
          state = {
              ...state,
              item: {...state.item, id: ''},
          }
          subject.next(state);
          console.log(state);
      },

    initialState,
};



export default itemStore;