
import { useState, useEffect } from "react";
import WordRow from "./WordRow";
import "./Board.css";

/*
    props
    - onSolve        fun | function to call when board has been solved
    - word           str | word to solve
    - display         [] | array of live guesses to display
    - guesses         [] | array of submitted guesses
    - wordLength     int | length of word to guess
    - numGuesses     int | number of WordRows in board
*/
export default function Board(props) {
    const [solved, setSolved] = useState(false);
    
    let solutionFound = false;
    let wordRows = [];

    for (let i = 0; i < props.numGuesses; i++) {
        if (!solutionFound) {
            let submitted = false;

            // if row has been submitted (guesses must be unique)
            if (props.guesses.includes(props.display[i]))
                submitted = true;

            wordRows.push(<WordRow key = {i} wordLength = {props.wordLength} submitted = {submitted} guess = {props.display[i]} word = {props.word}/>);

        } else {
            wordRows.push(<WordRow key = {i} wordLength = {props.wordLength} submitted = {false} guess = {null} word = {props.word}/>);
        }

        // if the word has been solved (check after row insert to prevent solved row from being blanked)
        if (!solutionFound && props.guesses[i] === props.word) {
            solutionFound = true;
            
            if (!solved)
                setSolved(true);
        }
    }

    // extracted to useEffect to prevent update/rerender conflict between App.js and Board.js
    useEffect(() => {
      if (solved)
        props.onSolve(props.word);
    
    }, [solved])
    

    return (
        <div className = {`board ${solved ? "solved" : ""}`}>
            {wordRows}
        </div>
    );
}