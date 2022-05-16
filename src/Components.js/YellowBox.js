import Escore from "./Escore";






export default function YellowBox ( { questionAsked, questionAnswered, clicked, setClicked, secondClick, setSecondClick, counter, setCounter,  ansewered, setAnsewered }) {

    
    function Answers () {

        return (
                                <div className="answers" onClick={() => setClicked(!clicked)}>
                                    <div style={{backgroundColor: "#FF3030"}} onClick={() => Escore(1, setSecondClick, secondClick, counter, setCounter, ansewered, setAnsewered("wrong") )}>
                                        <span>Não </span><span>lembrei!</span>
                                    </div>
                                    <div style={{backgroundColor: "#FF922E"}} onClick={() => Escore(2, setSecondClick, secondClick, counter, setCounter, ansewered, setAnsewered("almost_right") )}>
                                        <span>Quase não </span><span>lembrei!</span>
                                    </div>
                                    <div style={{backgroundColor: "#2FBE34"}} onClick={() => Escore(3, setSecondClick, secondClick, counter, setCounter, ansewered, setAnsewered("right") )}>
                                        <span>Zap</span>
                                    </div>
                                </div>
        );

    }







    return (
            (!secondClick) ? (<div className="yellowCard face front">
                    <span>{questionAsked}</span>
                    <img src="./Imagens/setinha.png" alt="setinha carregando..." width="30" onClick={() => setSecondClick(true)}/>
                </div>) : (<div className="yellowCard face back">
                                <span style={{fontWeight: "bold"}}>{questionAnswered}</span>
                                <Answers />
                            </div>

                )
    );
    
}

