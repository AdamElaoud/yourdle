import "./Key.css";

/*
    props
    - contents           str | contents to be displayed in button
    - state          str | LetterState detailing status of character in guess
*/
export default function Key(props) {
    let style;

    if (props.contents === "") {
        style = "blank";
    
    } else if (typeof(props.contents) === "object") {
        style = "key wide";
    
    } else {
        style = "key";
    }

    return (
        <div className = {style}>
            {props.contents}
        </div>
    );
}