import Key from "./Key";
import "./Keyboard.css";

/*
    props
    - state      [] / {} | array of LetterStates detailing statuses of each character for a particular board
    - addLetter      fun | function to add a letter to the current guess
*/

const backspaceSVG = (
    <svg name = "Backspace"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        height="27.5px">
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
    </svg>
);

const enterSVG = (
    <svg name = "Enter"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        height="27.5px">
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"></path>
    </svg>
);

const KEYS = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['','A','S','D','F','G','H','J','K','L',''],
    [backspaceSVG,'Z','X','C','V','B','N','M',enterSVG]
];

export default function Keyboard(props) {
    return (
        <div className = "keyboard">
            {KEYS.map((keyRow, index) => {
                return (
                    <div className = "keyRow" key = {index}>
                        {keyRow.map((key, index) => {
                            if (typeof(key) === "object")
                                return <Key key = {index} display = {key} value = {key.props.name} addLetter = {props.addLetter}/>
                            
                            return <Key key = {index} display = {key} value = {key} addLetter = {props.addLetter}/>;
                        })}
                    </div>
                );
            })}
        </div>
    );
}