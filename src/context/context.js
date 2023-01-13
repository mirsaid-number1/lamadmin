import React,{useState,useContext,createContext} from 'react'

const Contextdb = createContext();

function Context({children}) {
    let [darkMode, setDarkMode] = useState(false);
  return (
    <Contextdb.Provider value={{darkMode,setDarkMode}}>{children}</Contextdb.Provider>
  )
}

export default Context


export const useProvider = () => {
    return useContext(Contextdb);
}