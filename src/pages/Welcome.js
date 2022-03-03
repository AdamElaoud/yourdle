import Navbar from "../components/Navbar/Navbar";
import WelcomeButton from "../components/Welcome/WelcomeButton";
import "./Welcome.css";

export default function Welcome() {
    return (
        <div className = "full-vert-container">
            <Navbar games = {false}/>

            <main className = "welcome">
                <div className = "title">
                    Yourdle
                </div>
                
                <div className = "gamemodes">
                    <div className = "row">
                        <WelcomeButton text = "Daily" link = "/daily"/>
                    </div>
                    <div className = "row">
                        <WelcomeButton text = "Infinite" link = "/infinite"/>
                        <WelcomeButton text = "Create" link = "/create"/>
                    </div>
                </div>

            </main>
        </div>
        
    );
}