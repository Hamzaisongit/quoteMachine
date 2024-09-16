import React, { useState } from "react";
import Context from "./creator";
import { data } from "./data";

const Provider = ({children})=>{

    const [globalObj, setGlobalObj] = useState(data)

    return(
      <Context.Provider value={{globalObj, setGlobalObj}}>
        {children}
      </Context.Provider>
    )
}

export default Provider;
