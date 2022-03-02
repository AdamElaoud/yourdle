import "./LetterBox.css";

/*
    props
    - letter       str | letter displayed in this box
    - state        str | LetterState detailing status of character in guess
*/
export default function LetterBox(props) {
    return (
        <div className = {`letterbox ${props.state ? props.state : ""}`}>
            {props.letter.toUpperCase()}
        </div>
    );
}