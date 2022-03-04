import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../../store/gameSlice";
import { stateActions } from "../../store/stateSlice";
import useInput from "../../hooks/useInput";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";
import "./Game.css";

export default function Game() {
    const dispatch = useDispatch();

    const words = useSelector(state => state.gameData.words);
    const wordLength = useSelector(state => state.gameData.wordLength);

    const gameOver = useSelector(state => state.gameState.gameOver);
    const gameState = useSelector(state => state.gameState.status);

    const boards = useSelector(state => state.gameData.boards);
    const guess = useSelector(state => state.gameData.currentGuess);
    const guesses = useSelector(state => state.gameData.guesses);
    const remainingGuesses = useSelector(state => state.gameData.remainingGuesses);
    const numGuesses = useSelector(state => state.gameData.maxGuesses);
    
    const addLetter = useInput();

    const [paddedGuesses, setPaddedGuesses] = useState([]);

    useEffect(() => {
        console.log(`Game: ${words}`);

    }, [words]);

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
            dispatch(stateActions.setGameOver(true));
            dispatch(stateActions.setStatus("won"));
        }

        if (remainingGuesses === 0 && !boards.every(solved => solved)) {
            dispatch(stateActions.setGameOver(true));
            dispatch(stateActions.setStatus("lost"));
        }

    }, [boards]);

    useEffect(() => {
        if (gameState === "won")
            alert("You Won!");
        
        if (gameState === "lost")
            alert("You Lost!");

    }, [gameOver]);

    return (
        <main className = "yourdle">
            <section className = "boards">
                {words.map(word =>  <Board
                                        key = {word}
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