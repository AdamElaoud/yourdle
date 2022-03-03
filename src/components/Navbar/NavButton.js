import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faUser, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import "./NavButton.css";

/*
    props
    - display       str | value to display
    - link          str | path to link to upon click
*/
export default function NavButton(props) {
    let contents;

    switch (props.display) {
        case "help":
            contents = <FontAwesomeIcon icon = {faCircleQuestion} />
            break;
        case "profile":
            contents = <FontAwesomeIcon icon = {faUser} />
            break;
        case "settings":
            contents = <FontAwesomeIcon icon = {faGear} />
            break;
        default:
            contents = props.display;
    }

    return (
        <Link className = "nav-button" to = {props.link}>
            {contents}
        </Link>
    );
}