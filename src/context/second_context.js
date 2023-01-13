import React,{useContext,createContext,useReducer} from 'react';
import {DispatchFunction} from './reducer'

let db = {
    darkmode:false,
}

const DbContext = createContext(db)

function Second_Context({children}) {
    let [state,dispatch] = useReducer(DispatchFunction,db);

    function setDark(){
        dispatch({
            type:'Dark',
            darkmode:true,
        })
    }

    function setLight() {
        dispatch({
            type:'Light',
            darkmode:false,
        })
    }

    function Toggle() {
        dispatch({
            type:"Toggle",
            darkmode: !state.darkmode,
        })
    }
  return (
    <DbContext.Provider value={{state,setDark,setLight,Toggle}}>{children}</DbContext.Provider>
  )
}

export default Second_Context

export const ShowDb = () => {
    return useContext(DbContext);
} 