import {createContext, useContext, useReducer, FC} from 'react';
import {State, Action, StoreContextProps, Props} from './global'

export const actionTypes = {
  loadData:'load_data',
  cleanData:'clean_data',
  selectData:'select_data',
  deselectData:'deselect_data',
}


const initialState:State = {
  data: [],
  selectedData: null,
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
  case actionTypes.selectData:
    return {
      ...state,
      selectedData: action.payload,
    };
  case actionTypes.deselectData:
    return {
      ...state,
      selectedData: null,
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

export function useStore():any{
  const context = useContext(StoreContext);
  if(context === undefined){
    throw new Error('useStore must be within a StoreProvider')
  }
  const { state, dispatch } = context
  const { data, selectedData } = state
  const loadData = (data:any[]):void => dispatch({type:actionTypes.loadData,payload:data})
  const cleanData = ():void => dispatch({type:actionTypes.cleanData})
  const selectData = (data:number):void => dispatch({type:actionTypes.selectData,payload:data})
  const deselectData = ():void => dispatch({type:actionTypes.deselectData})
  return {
    data,
    selectedData,
    loadData,
    cleanData,
    selectData,
    deselectData
  }
} 
