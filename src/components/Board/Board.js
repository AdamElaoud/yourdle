import WordRow from "./WordRow";
import "./Board.css";

/*
    props
    - word           str | word to solve
    - length         int | length of word to guess
    - height         int | number of WordRows in board
*/
export default function Board(props) {
    let wordRows = [];

    for (let i = 0; i < props.height; i++) {
        wordRows.push(<WordRow key = {i} size = {props.length} word = ""/>);
    }

    return (
        <div className = "board">
            {wordRows}
        </div>
    );
}