import React from "react";
import Container from "./components/Container";
import Provider from "./context/provider";

const App = ()=>{
    return(
        <>
            <Provider>
            <h1>hamza</h1>
            <Container></Container>
            </Provider>
        </>
    )
}

export default App;