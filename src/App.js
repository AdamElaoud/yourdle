import { useState, useEffect } from "react";
import Board from "./components/Board/Board";
import "./App.css";

/*
    props
    - words         int | number of wordboxes on screen
*/
export default function App() {
    const [words, setWords] = useState(["tests", "happy", "twist"]);
    const [wordLength, setWordLength] = useState(words[0].length);
    const [numGuesses, setNumGuesses] = useState(words.length + 5);
    const [guess, setGuess] = useState("")
    const [guesses, setGuesses] = useState([]); // update on guess submission
    const [paddedGuesses, setPaddedGuesses] = useState([])
    const [remainingGuesses, setRemainingGuesses] = useState(numGuesses); // update on guess submission

    useEffect(() => {
        // if there are remaining available guesses
        if (guesses.length < numGuesses) {
            // set guesses array to new array containing previous & new guess along with blank rows for remaining guesses
            setPaddedGuesses([...guesses, guess].concat(Array(remainingGuesses - 1).fill("")));
        }

    }, [guess]);  
    
    const onEnterGuessHandler = (event) => {
        // if enter was pressed
        if (event.key === "Enter") {
            if (guess.length === wordLength)
            setGuesses(prevGuesses => [...prevGuesses, guess]);
        }
        
    };

    const onGuessChangeHandler = (event) => {
        if (event.target.value.length <= wordLength)
            setGuess(event.target.value);
    };

    return (
        <>
            <input type = "text" onChange = {onGuessChangeHandler} onKeyPress = {onEnterGuessHandler}/>
            <main className = "boards">
                {words.map(word => <Board key = {word} word = {word} guesses = {paddedGuesses} wordLength = {wordLength} numGuesses = {numGuesses} />)}
            </main>
        </>
        
    );
}