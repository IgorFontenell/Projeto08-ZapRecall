import QuestionBox from "./QuestionBox";



export default function ScreenQuestions () {
        return (
                <div className="screenQuestions">
                    <Title />
                    <QuestionBox />
                    <QuestionBox />
                    <QuestionBox />
                    <QuestionBox />
                    <QuestionBox />
                    <QuestionBox />
                    <QuestionBox />
                    <QuestionBox />
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
