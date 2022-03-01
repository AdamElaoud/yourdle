import "./WordRow.css";
import WordBox from "./LetterBox";

/*
    props
    - word       str | word currently assigned to this WordRow
    - size       int | number of characters in this word
*/
export default function WordRow(props) {
    const word = props.word.split("");
    const keyCount = 0;
    
    return (
        <div className = "wordrow">
            {word.map(char => {
                keyCount++;
                return <LetterBox key = {keyCount} letter = {char}/>;
            })}
        </div>
    );
}