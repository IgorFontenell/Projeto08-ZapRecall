import React from "react";

export default function QuestionBox ( { questionBox, questionAsked, questionAnswered} ) {


    const [clicked, setClicked] = React.useState(false);
    const [secondClick, setSecondClick] = React.useState(false);

    function WhiteBox ( { questionBox }) {
        return (
                 <div className="questionBox" onClick={() => setClicked(true)}> 
                    <span>{questionBox}</span>
                    <ion-icon name="play-outline"></ion-icon>
                  </div>
        );
}
    function YellowBox ( { questionAsked, questionAnswered }) {
        return (
                (!secondClick) ? (<div className="yellowCard face sfront">
                        <span>{questionAsked}</span>
                        <img src="./Imagens/setinha.png" alt="setinha carregando..." width="30" onClick={() => setSecondClick(true)}/>
                    </div>) : (<div className="yellowCard face back">
                                    <span style={{fontWeight: "bold"}}>{questionAnswered}</span>
                                    <div className="answers">
                                        <div style={{backgroundColor: "#FF3030"}}>
                                            <span>Não </span><span>lembrei!</span>
                                        </div>
                                        <div style={{backgroundColor: "#FF922E"}}>
                                            <span>Quase não </span><span>lembrei!</span>
                                        </div>
                                        <div style={{backgroundColor: "#2FBE34"}}>
                                            <span>Zap</span>
                                        </div>
                                    </div>
                                </div>

                    )
        );
        
    }



    return (
        <> 
        {
            (!clicked) ? ( <WhiteBox questionBox={questionBox}/>) : (<YellowBox questionAsked={questionAsked} questionAnswered={questionAnswered} />)
        }
        </>
        

    );

}



