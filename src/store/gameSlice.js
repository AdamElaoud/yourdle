import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: "gameData",
    initialState: {
        currentGuess: "",
        wordLength: 0,
        boards: [],
        guesses: [],
        words: [],
        remainingGuesses: 0,
        maxGuesses: 0
    },
    reducers: {
        newGame(state, action) {
            state.currentGuess = "";
            state.wordLength = action.payload[0].length;
            state.words = action.payload;
            state.boards = Array(action.payload.length).fill(false);
            state.guesses = [];
            state.remainingGuesses = action.payload.length + 5;
            state.maxGuesses = action.payload.length + 5;
        },
        boardSolved(state, action) {
            const index = state.words.indexOf(action.payload);
            state.boards[index] = true;
        },
        addGuess(state) {
            if (state.remainingGuesses > 0 && state.currentGuess.length === state.wordLength && !state.guesses.includes(state.currentGuess)) {
                state.guesses.push(state.currentGuess);
                state.remainingGuesses--;
                state.currentGuess = "";
            }
        },
        addLetter(state, action) {
            if (state.currentGuess.length < state.wordLength)
                state.currentGuess += action.payload;
        },
        removeLetter(state) {
            if (state.currentGuess.length > 0)
                state.currentGuess = state.currentGuess.slice(0, -1);
        }
    }
});

export default gameSlice.reducer;
export const gameActions = gameSlice.actions;