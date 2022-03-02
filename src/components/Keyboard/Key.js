import "./Key.css";

/*
    props
    - display        str | display to be displayed in button
    - value          str | value of button on click
    - state          str | LetterState detailing status of character in guess
    - addLetter      fun | function to add a letter to the current guess
*/
export default function Key(props) {
    let style;

    switch (props.value) {
        case "":
            style = "blank";
            break;
        case "Backspace":
        case "Enter":
            style = "key wide";
            break;
        default:
            style = "key";
    }

    const onClickHandler = () => {
        props.addLetter(props.value)
    };

    return (
        <div className = {style} onClick = {onClickHandler}>
            {props.display}
        </div>
    );
}