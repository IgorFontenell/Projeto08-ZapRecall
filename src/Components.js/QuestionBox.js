import React from "react";
import Escore from "./Escore";
import WhiteBox from "./WhiteBox";
import YellowBox from "./YellowBox";



export default function QuestionBox ( { questionBox, questionAsked, questionAnswered, counter, setCounter }) {


    const [clicked, setClicked] = React.useState(false);
    const [secondClick, setSecondClick] = React.useState(false);
   
    const [ansewered, setAnsewered] = React.useState(false);

    


    return (
        <> 
        {
            (!clicked) ? ( <WhiteBox ansewered={ansewered} questionBox={questionBox} clicked={clicked} setClicked={setClicked} />) : (<YellowBox questionAsked={questionAsked} questionAnswered={questionAnswered} clicked={clicked} setClicked={setClicked} secondClick={secondClick} setSecondClick={setSecondClick} counter={counter} setCounter={setCounter} ansewered={ansewered} setAnsewered={setAnsewered} />)
        }
        </>
        

    );

}



