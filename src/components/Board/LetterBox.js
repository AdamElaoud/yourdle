import "./LetterBox.css";

/*
    props
    - letter         str | letter displayed in this box
    - state          str | LetterState detailing status of character in guess
    - submitted     bool | boolean indicating if guess has been submitted and should be colored
*/
export default function LetterBox(props) {
    return (
        <div className = {`letterbox ${props.submitted ? props.state : ""}`}>
            {props.letter.toUpperCase()}
        </div>
    );
}