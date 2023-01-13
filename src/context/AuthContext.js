import React,{useEffect,useReducer,createContext} from 'react'
import {authReducer} from './AuthReducer';

export const AuthDB = createContext(null);
const initialValue = {
    currentUser:null
}
function AuthContext({children}) {
    const [state,dispatch] = useReducer(authReducer,initialValue);
    return (
    <AuthDB.Provider value={{state,dispatch}}>{children}</AuthDB.Provider>
  )
}

export default AuthContext