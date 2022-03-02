import WordRow from "./WordRow";
import "./Board.css";

/*
    props
    - word           str | word to solve
    - guesses         [] | array of submitted guesses
    - wordLength     int | length of word to guess
    - numGuesses     int | number of WordRows in board
*/
export default function Board(props) {
    let wordRows = [];

    for (let i = 0; i < props.numGuesses; i++) {
        wordRows.push(<WordRow key = {i} wordLength = {props.wordLength} guess = {props.guesses[i]} word = {props.word}/>);
    }

    return (
        <div className = "board">
            {wordRows}
        </div>
    );
}