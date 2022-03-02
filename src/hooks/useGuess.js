import { useState, useEffect } from "react";

const LETTERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export default function useGuess(wordLength) {
    const [guess, setGuess] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [guessAdded, setGuessAdded] = useState(null);

    const onKeyDown = (event) => {
        setGuess(prevGuess => {
            const newGuess = prevGuess + event.key.toUpperCase();

            switch (event.key) {
                case "Enter":
                    // (only allow unique guesses)
                    if (prevGuess.length === wordLength && !guesses.includes(prevGuess)) {
                        setGuessAdded(prevGuess);
                        return "";
                    
                    } else {
                        return prevGuess;
                    }
                
                case "Backspace":
                    if (prevGuess.length > 0) {
                        return prevGuess.slice(0, -1);
                    
                    } else {
                        return prevGuess;
                    }
                
                default:
                    const letter = event.key.toUpperCase();
                    if (prevGuess.length < wordLength && LETTERS.includes(letter)) {
                        return newGuess;

                    } else {
                        return prevGuess;
                    }
            }
        });
    };

    useEffect(() => {
        if (guessAdded) {
            console.log(guess);
            setGuesses(prevGuesses => [...prevGuesses, guessAdded]);
            setGuessAdded(null);
        }
    }, [guess]);

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
    
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }
    }, []);

    return [guess, guesses];
}