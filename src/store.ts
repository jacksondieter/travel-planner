import React, {createContext, useContext, useReducer} from 'react';

export const LOAD_DATA = 'LOAD_DATA'
export const CLEAN_DATA = 'CLEAN_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'

const initialState:State = {
  data: []
};

function reducer(state:State, action:Action):State {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        data:action.payload
      };
    case CLEAN_DATA:
      return {
        ...state,
        data: []
      };
    case UPDATE_DATA:
      return {
        ...state,
        data:action.payload
      };
    default:
      return state;
  }
};



const StoreContext = createContext();
StoreContext.displayName = 'GlobalStore'

export function StoreProvider(props){
  const [state, dispatch] = useReducer(reducer, initialState);
  return <StoreContext.Provider value={[state, dispatch]} {...props}/>
};

export function useStore(){
  const context = useContext(StoreContext);
  if(context === undefined){
    throw new Error('useStore must be within a StoreProvider')
  }
  return context
} 
