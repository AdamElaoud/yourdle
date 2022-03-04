import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name: "gameState",
    initialState: {
        gameOver: false,
        status: "playing" // playing, won, lost
    },
    reducers: {
        newGame(state) {
            state.gameOver = false;
            state.status = "playing";
        },
        setGameOver(state, action) {
            state.gameOver = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export default stateSlice.reducer;
export const stateActions = stateSlice.actions;