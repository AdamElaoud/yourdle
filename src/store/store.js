import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./stateSlice";
import gameDataReducer from "./gameSlice";

const store = configureStore({
    reducer: {
        gameState: gameStateReducer,
        gameData: gameDataReducer
    }
});

export default store;