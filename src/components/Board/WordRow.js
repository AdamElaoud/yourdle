import Validator from "../../utility/validator";
import "./WordRow.css";
import LetterBox from "./LetterBox";

/*
    props
    - word           str | word to solve
    - guess          str | word currently assigned to this WordRow
    - size           int | number of characters in this word
*/
export default function WordRow(props) {
    const letters = props.guess.split("");
    const guessStates = Validator(props.guess, props.word);
    
    return (
        <div className = "wordrow">
            {letters.map((char, index) => <LetterBox key = {index} letter = {char} state = {guessStates[index]}/>)}
        </div>
    );
}