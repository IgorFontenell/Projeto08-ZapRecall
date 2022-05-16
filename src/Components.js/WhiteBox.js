export default function WhiteBox ( { questionBox, clicked, setClicked, ansewered}) {
    return (
             <div className={`questionBox ${ansewered}`} onClick={() => setClicked(!clicked)}> 
                <span>{questionBox}</span>
                <ion-icon name="play-outline"></ion-icon>
              </div>
    );
}