import { useState, useEffect } from "react";

const LETTERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export default function useGuess(wordLength, numGuesses) {
    const [guess, setGuess] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [guessAdded, setGuessAdded] = useState(null);
    const [remainingGuesses, setRemainingGuesses] = useState(numGuesses);

    const onKeyDown = (event) => {
        addLetter(event.key);
    };

    useEffect(() => {
        if (guessAdded) {
            setGuesses(prevGuesses => [...prevGuesses, guessAdded]);
            setGuessAdded(null);
            setRemainingGuesses((prevRemainingGuesses => prevRemainingGuesses - 1));
        }
    }, [guess]);

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
    
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }
    }, []);

    const addLetter = (input) => {
        setGuess(prevGuess => {
            const newGuess = prevGuess + input.toUpperCase();

            switch (input) {
                case "Enter":
                    // (only allow unique guesses)
                    if (prevGuess.length === wordLength && !guesses.includes(prevGuess)) {
                        setGuessAdded(prevGuess);
                        return "";
                    
                    } else {
                        return prevGuess;
                    }
                
                case "Backspace":
                    if (prevGuess.length > 0)
                        return prevGuess.slice(0, -1);                    
                    else
                        return prevGuess;
                
                default:
                    const letter = input.toUpperCase();
                    if (prevGuess.length < wordLength && LETTERS.includes(letter))
                        return newGuess;
                    else
                        return prevGuess;
            }
        });
    };

    return [guess, guesses, remainingGuesses, addLetter];
}