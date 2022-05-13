
export default function InitialScreen ({ setCondition }) {
        return (
                <div className="initialScreen">
                    <img src="./Imagens/logo.png" alt="Logo carregando..." width="136" height="161" />
                    <h1>ZapRecall</h1>
                    <div className="startButton" onClick={() => setCondition("page2")}> 
                        <span>Iniciar Recall!!</span>
                    </div>
                </div>
            )


}