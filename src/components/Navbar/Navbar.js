import NavButton from "./NavButton";
import "./Navbar.css";

/*
    props
    - games        bool | toggle to display links to Daily, Infinite, and Create modes
*/
export default function Navbar(props) {
    return (
        <nav className = "navbar-background">
            <div className = "navbar">
                <div className = "nav-title">Yourdle</div>

                {
                    props.games && (
                        <div className = "nav-gamemodes">
                            <NavButton display = "Daily" link = "/daily"/>
                            <NavButton display = "Infinite" link = "/infinite"/>
                            <NavButton display = "Create" link = "/create"/>
                        </div>       
                    )
                }

                <div className = "nav-buttons">
                    <NavButton display = "help" link = "/help"/>
                    <NavButton display = "profile" link = "/profile"/>
                    <NavButton display = "settings" link = "/settings"/>
                </div>
            </div>
        </nav>
    );
}