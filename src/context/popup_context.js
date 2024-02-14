import { createContext, useState, useContext } from "react";

const PopupContext = createContext();

export function PopupProvider({children}) {

  const [course, setCourse] = useState({show: false});
  return(
    <PopupContext.Provider value={{course, setCourse}}>
      {children}
    </PopupContext.Provider>
  )
}

export function usePopupContext() {
  return useContext(PopupContext);
}

