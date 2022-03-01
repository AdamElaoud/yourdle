import { useState } from "react";
import Board from "./components/Board/Board";

/*
    props
    - words         int | number of wordboxes on screen
*/
export default function App() {
    // const rows = props.words + 5;
    [length, setLength] = useState(5);
    [height, setHeight] = useState(6);
    [words, setWords] = useState(["tests", "happy", "twist"]);

    return (
        <div>
            {words.map(word => <Board key = {word} word = {word} length = {length} height = {height} />)}
        </div>
    );
}