import { Link } from "react-router-dom";
import "./WelcomeButton.css";

/*
    props
    - text          str | text to display
    - link          str | path to link to upon click
*/
export default function WelcomeButton(props) {
    return (
        <Link className = "welcome-button" to = {props.link}>
            {props.text}
        </Link>
    );
}