import "./LetterBox.css";

/*
    props
    - letter       str | letter displayed in this box
*/
export default function LetterBox(props) {
    return (
        <div className = "letterbox">
            {props.letter}
        </div>
    );
}