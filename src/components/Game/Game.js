import { useState, useEffect } from "react";
import useGuess from "../../hooks/useGuess";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";
import "./Game.css";

/*
    props
    - words          [] | words for game
*/
export default function Game(props) {
    const wordLength = props.words[0].length;
    const numGuesses = props.words.length + 5;

    const [boards, setBoards] = useState(Array(props.words.length).fill(false));

    const [gameOver, setGameOver] = useState(false);
    const [gameState, setGameState] = useState("playing");

    const [guess, guesses, remainingGuesses, addLetter] = useGuess(wordLength, numGuesses); // update on guess submission
    const [paddedGuesses, setPaddedGuesses] = useState([])

    useEffect(() => {
        console.log(`Game: ${props.words}`);

    }, [props.words]);

    useEffect(() => {
        // if there are remaining available guesses, pad the board
        if (remainingGuesses > 0) {
            // set guesses array to new array containing previous & new guess along with blank rows for remaining guesses
            setPaddedGuesses([...guesses, guess].concat(Array(remainingGuesses - 1).fill("")));
        
        // otherwise just display guesses
        } else {
            setPaddedGuesses([...guesses]);
        }

    }, [guess, guesses]);

    useEffect(() => {
        // if every board has been solved, end the game
        if (boards.every(solved => solved)) {
            setGameOver(true);
            setGameState("won");
        }

        if (remainingGuesses === 0 && !boards.every(solved => solved)) {
            setGameOver(true);
            setGameState("lost");
        }
            

    }, [boards]);

    useEffect(() => {
        if (gameState === "won")
            alert("You Won!");
        
        if (gameState === "lost")
            alert("You Lost!");

    }, [gameOver]);

    const onSolve = (word) => {
        const index = props.words.indexOf(word);

        setBoards(prevBoards => {
            const temp = [...prevBoards];
            temp[index] = true;
            return temp;
        });
    };

    return (
        <main className = "yourdle">
            <section className = "boards">
                {props.words.map(word =>  <Board
                                        key = {word}
                                        onSolve = {onSolve}
                                        word = {word}
                                        display = {paddedGuesses}
                                        guesses = {guesses}
                                        wordLength = {wordLength}
                                        numGuesses = {numGuesses}
                                    />
                )}
            </section>
            <Keyboard addLetter = {addLetter}/>
        </main>
    );
}