import { useState } from "react";
import Board from "./components/Board/Board";
import "./App.css";

/*
    props
    - words         int | number of wordboxes on screen
*/
export default function App() {
    // const rows = props.words + 5;
    const [length, setLength] = useState(5);
    const [height, setHeight] = useState(6);
    const [words, setWords] = useState(["tests", "happy", "twist"]);

    return (
        <div className = "boards">
            {words.map(word => <Board key = {word} word = {word} length = {length} height = {height} />)}
        </div>
    );
}