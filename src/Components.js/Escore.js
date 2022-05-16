import IonIcon from "./IonIcon";

export default function Escore(num, setSecondClick, secondClick, counter, setCounter) {
    let newCounter = [];
    setSecondClick(!secondClick);

    if (num === 1) {
        newCounter = [...counter, <IonIcon name="add-circle-sharp" cor="#FF3030" />]
        setCounter(newCounter);
        console.log(num);
        console.log(counter);

    }
    if (num === 2) {
        newCounter = [...counter, <IonIcon name="help-circle-sharp" cor="#FF922E" />]
        setCounter(newCounter);

    }
    if (num === 3) {
        newCounter = [...counter, <IonIcon name="checkmark-circle" cor="#2FBE34" />]
        setCounter(newCounter);
    }
}