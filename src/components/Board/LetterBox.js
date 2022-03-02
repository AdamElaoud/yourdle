import "./LetterBox.css";

/*
    props
    - letter       str | letter displayed in this box
    - state       enum | LetterState detailing status of character in guess
*/
export default function LetterBox(props) {
    console.log(props.state);

    return (
        <div className = {`letterbox ${props.state ? props.state : ""}`}>
            {props.letter}
        </div>
    );
}