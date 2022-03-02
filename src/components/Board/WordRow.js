import "./WordRow.css";
import LetterBox from "./LetterBox";

/*
    props
    - word       str | word currently assigned to this WordRow
    - size       int | number of characters in this word
*/
export default function WordRow(props) {
    let letters;
    if (props.word != "")
        letters = props.word.split("");
    else
        letters = Array(props.size).fill("H");


    let keyCount = 0;
    
    return (
        <div className = "wordrow">
            {letters.map(char => {
                keyCount++;
                return <LetterBox key = {keyCount} letter = {char}/>;
            })}
        </div>
    );
}