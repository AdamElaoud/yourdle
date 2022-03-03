import Navbar from "../components/Navbar/Navbar";
import "./Welcome.css";

export default function Welcome() {
    return (
        <>
            <Navbar games = {false}/>
            <main>
                Yourdle
            </main>
        </>
        
    );
}