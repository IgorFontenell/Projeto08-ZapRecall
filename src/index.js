import reactDom from "react-dom";
import React from "react";
import InitialScreen from "./Components.js/InitialScreen";
import ScreenQuestions from "./Components.js/ScreenQuestions";



function App () {
    const [condition, setCondition] = React.useState("init");

    return (
        <>
          {
              (condition === "init") ? <InitialScreen setCondition={setCondition} /> : <ScreenQuestions />
          }
        </>
        
    );
}

const elemento = document.querySelector(".root");

reactDom.render(<App />, elemento);

