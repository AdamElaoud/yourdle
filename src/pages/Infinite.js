import { useState } from "react";
import useDictionary from "../hooks/useDictionary";
import Slider from '@mui/material/Slider';
import Game from "../components/Game/Game";
import Navbar from "../components/Navbar/Navbar";
import "./Infinite.css";

export default function Infinite() {
    const [boardCount, setBoardCount] = useState(1);
    const [wordLength, setWordLength] = useState(5);

    console.log(`Boards: ${boardCount} Length: ${wordLength}`);

    const [started, setStarted] = useState(false);
    const words = useDictionary(boardCount, wordLength);

    const onBoardCountChange = (event) => {
        setBoardCount(event.target.value);
    };

    const onWordLengthChange = (event) => {
        setWordLength(event.target.value);
    };

    return (
        <div className = "full-vert-container">
            <Navbar games = {true}/>

            <div className = "sliders">
                <div className = "slider">
                    <div className = "slider-title">Boards</div>
                    <Slider
                        aria-label = "Boards"
                        defaultValue = {1}
                        valueLabelDisplay = "auto"
                        step = {1}
                        min = {1}
                        max = {8}
                        onChange = {onBoardCountChange}
                        sx = {{ flex: 12 }}
                    />
                    <div className = "slider-value">{boardCount}</div>
                </div>

                <div className = "slider">
                    <div className = "slider-title">Word Length</div>
                    <Slider
                        aria-label = "Word Length"
                        defaultValue = {5}
                        valueLabelDisplay = "auto"
                        step = {1}
                        min = {3}
                        max = {8}
                        onChange = {onWordLengthChange}
                        sx = {{ flex: 12 }}
                    />
                    <div className = "slider-value">{wordLength}</div>
                </div>
            </div>

            <Game words = {words}/>
        </div>
    );
}