import Validator from "../../utility/validator";
import "./WordRow.css";
import LetterBox from "./LetterBox";

/*
    props
    - word           str | word to solve
    - guess          str | word currently assigned to this WordRow
    - wordLength     int | number of characters in this word
*/
export default function WordRow(props) {
    let letters, guessStates;

    if (props.guess) {
        letters = props.guess.split("").concat(Array(props.wordLength - props.guess.length).fill(""));
        guessStates = Validator(props.guess, props.word);
        
    } else {
        letters = Array(props.wordLength).fill("");
        guessStates = Array(props.wordLength).fill("base");
    }
    
    return (
        <div className = "wordrow">
            {letters.map((char, index) => <LetterBox key = {index} letter = {char} state = {guessStates[index]}/>)}
        </div>
    );
}