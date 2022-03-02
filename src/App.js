import { useState } from "react";
import Board from "./components/Board/Board";
import "./App.css";

/*
    props
    - words         int | number of wordboxes on screen
*/
export default function App() {
    const [words, setWords] = useState(["tests", "happy", "twist"]);
    const [length, setLength] = useState(words[0].length);
    const [height, setHeight] = useState(words.length + 5);

    return (
        <main className = "boards">
            {words.map(word => <Board key = {word} word = {word} length = {length} height = {height} />)}
        </main>
    );
}