import React from "react";
import Concluded from "./Conclued";
import Escore from "./Escore";
import QuestionBox from "./QuestionBox";


export default function ScreenQuestions ( { counter, setCounter } ) {

    let arr = [0, 1, 2, 3, 4, 5, 6, 7];
    function ShuffleArr(list) {
        const shuffled = list.sort(() => Math.random() - 0.5);
        return shuffled;
    }
    arr = ShuffleArr(arr);

    const questionAsked = ["O que é JSX?", "O React é __", "Componentes devem iniciar com __", "Podemos colocar __ dentro do JSX", " O ReactDOM nos ajuda __", "Usamos o npm para __", "Usamos props para __", "Usamos estado (state) para __ "];

    const questionAnswered = ["R: Uma extensão de linguagem do JavaScript.", "R: uma biblioteca JavaScript para construção de interfaces.", "R: letra maiúscula.", "R: expressões", "R: interagindo com a DOM para colocar componentes React na mesma.", "R: interagindo com a DOM para colocar componentes React na mesma.", "R: passar diferentes informações para componentes.", "R: dizer para o React quais informações quando atualizadas devem renderizar a tela novamente."];
    
    const [ansewered, setAnsewered] = React.useState(false);
    

        return (
                <div className="screenQuestions">
                    <Title />
                    {arr.map((num, index) =>  <QuestionBox ansewered={ansewered} setAnsewered={setAnsewered} key={index} questionBox={`Pergunta ${index + 1}`} questionAsked={questionAsked[num]} questionAnswered={questionAnswered[num]} counter={counter} setCounter={setCounter} />)}
                    <Concluded counter={counter} setCounter={setCounter} />
                </div>
        );
}

function Title () {
    return (
        <div className="title">
            <img src="./Imagens/logo-pequeno.png" alt="Logo carregando..." width="60" height="60"/>
            <h1>ZapRecall</h1>
        </div>


    );
}

