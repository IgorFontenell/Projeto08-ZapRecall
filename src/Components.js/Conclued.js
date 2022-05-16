
import Escore from "./Escore";
import IonIcon from "./IonIcon";


export default function Concluded ( { counter, setCounter } ) {



    function Filter (list) {

       return(list.filter(type => type.props.name === "add-circle-sharp")); 
        
    }
    let wrongCounter = Filter(counter);

    return ( (counter.length < 8) ? (<div className="concluidos">
                                        <span>{counter.length}/8 CONCLUÍDOS</span>
                                        <div className="Icons"> 
                                        {counter}
                                            </div>
                                        </div> ) : (<div className="concluidos">
                                                        <Result wrongCounter={wrongCounter} />
                                                        <span>8/8 CONCLUÍDOS</span>
                                                        <div className="Icons"> 
                                                                {counter}
                                                            </div>
                                                        </div>)
        
    );
}
function Result ( { wrongCounter } ) {

    if (wrongCounter.length === 0) {
        return (<>
                <div className="conclusao">
                    <img src="./Imagens/party.png" alt="Imagem carregando.." width="16" />                                        
                    <span>Parabéns!!</span>
                </div>  
                <span>Você não esqueceu de nenhum flashcard!!</span>
                </>
                );
    } else { <div className="conclusao">
                <img src="./Imagens/sad.png" alt="Imagem carregando.." width="16" />
                <span>Putz...</span>
                <span>Ainda faltam alguns... Mas não desanime</span>
            </div>
    }



}

