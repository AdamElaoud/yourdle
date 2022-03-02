import { useState, useEffect } from "react";
import useGuess from "./hooks/useGuess";
import Board from "./components/Board/Board";
import "./App.css";

/*
    props
    - words         int | number of wordboxes on screen
*/
export default function App() {
    const [words, setWords] = useState(["VALUED", "MONKEY", "RIPPER"]); // built, happy, twist
    const [wordLength, setWordLength] = useState(words[0].length);

    const [boards, setBoards] = useState(Array(words.length).fill(false));
    const [gameOver, setGameOver] = useState(false);

    const [numGuesses, setNumGuesses] = useState(words.length + 5);
    const [guess, guesses] = useGuess(wordLength); // update on guess submission
    const [paddedGuesses, setPaddedGuesses] = useState([])
    const [remainingGuesses, setRemainingGuesses] = useState(numGuesses); // update on guess submission

    useEffect(() => {
        // if there are remaining available guesses
        if (guesses.length < numGuesses) {
            // set guesses array to new array containing previous & new guess along with blank rows for remaining guesses
            setPaddedGuesses([...guesses, guess].concat(Array(remainingGuesses - 1).fill("")));
        }

    }, [guess, guesses]);

    useEffect(() => {
        // if every board has been solved, end the game
        if (boards.every(solved => solved))
            setGameOver(true);

    }, [boards]);

    useEffect(() => {
        if (gameOver)
            alert("You Won!");

    }, [gameOver]);

    const onSolve = (word) => {
        const index = words.indexOf(word);

        setBoards(prevBoards => {
            const temp = [...prevBoards];
            temp[index] = true;
            return temp;
        });
    };

    return (
        <>
            <main className = "boards">
                {words.map(word =>  <Board
                                        key = {word}
                                        onSolve = {onSolve}
                                        word = {word}
                                        display = {paddedGuesses}
                                        guesses = {guesses}
                                        wordLength = {wordLength}
                                        numGuesses = {numGuesses}
                                    />
                )}
            </main>
        </>
        
    );
}