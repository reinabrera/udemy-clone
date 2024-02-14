import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchBarMobileContext = createContext();

export default function SearchBarMobileProvider({children}) {
  const [ isVisible, setIsVisible ] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
  }, [location]);
  
  return (
    <SearchBarMobileContext.Provider value={{isVisible, setIsVisible}}>
      {children}
    </SearchBarMobileContext.Provider>
  )
}

export function useSearchBarMobileContext() {
  return useContext(SearchBarMobileContext);
}