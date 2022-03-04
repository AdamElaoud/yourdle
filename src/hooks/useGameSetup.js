import { useDispatch } from "react-redux";
import { gameActions } from "../store/gameSlice";
import { stateActions } from "../store/stateSlice";
import Dictionary from "../utility/dictionary.json";

export default function useGameSetup(numWords, wordLength) {
    const dict = Dictionary[wordLength];
    const words = [];

    for (let i = 0; i < numWords; i++) {
        const index = Math.floor(Math.random() * dict.length);
        words.push(dict[index].toUpperCase());
    }

    const dispatch = useDispatch();

    // setup new game
    dispatch(gameActions.newGame(words));
    dispatch(stateActions.newGame());
}