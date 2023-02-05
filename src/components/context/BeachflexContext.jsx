 import { createContext, useState } from "react";

 const BeachflexContext = createContext()

 export const  BeachflexProvider = ({ children }) => {

    const [remove, setRemove] = useState(true);
    const [nav, setNav] = useState(true);

    const handleNav = () => {
      setNav(!nav);
      setRemove(!remove)
      // console.log('hey')
      // console.log(nav);
    };

    return(
        <BeachflexContext.Provider 
         value={{
          remove,
          nav,
          handleNav
          
         }}
        >
         {children}
        </BeachflexContext.Provider>
    )
 }
 export default BeachflexContext;