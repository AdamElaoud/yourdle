import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/gameSlice";

const LETTERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export default function useInput() {
    const currentGuess = useSelector(state => state.gameData.currentGuess);
    const wordLength = useSelector(state => state.gameData.wordLength);
    const guesses = useSelector(state => state.gameData.guesses);
    const remainingGuesses = useSelector(state => state.gameData.remainingGuesses);

    const dispatch = useDispatch();

    const onKeyDown = (event) => {
        addLetter(event.key);
    };

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
    
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }
    }, []);

    const addLetter = (input) => {
        const newGuess = currentGuess + input.toUpperCase();

        switch (input) {
            case "Enter":
                // (only allow unique guesses)
                dispatch(gameActions.addGuess());
                break;
            
            case "Backspace":
                dispatch(gameActions.removeLetter());
                break;
            
            default:
                const letter = input.toUpperCase();
                if (LETTERS.includes(letter))
                    dispatch(gameActions.addLetter(letter));
        }
    };

    return addLetter;
}