import {createContext, useContext, useReducer, FC} from 'react';
import {State, Action, StoreContextProps, Props} from './global'

export const actionTypes = {
  loadData:'load_data',
  cleanData:'clean_data',
}


const initialState:State = {
  data: []
};

function reducer(state:State, action:Action):State {
  switch (action.type) {
  case actionTypes.loadData:
    return {
      ...state,
      data: action.payload,
    };
  case actionTypes.cleanData:
    return {
      ...state,
      data: [],
    };
  default:
    return state;
  }
}



const StoreContext = createContext<StoreContextProps>({state:initialState, dispatch:()=>{}});
StoreContext.displayName = 'GlobalStore'

export const StoreProvider:FC<Props> = ({children}) => {  
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>  
  )
};

export function useStore():StoreContextProps{
  const context = useContext(StoreContext);
  if(context === undefined){
    throw new Error('useStore must be within a StoreProvider')
  }
  return context
} 
