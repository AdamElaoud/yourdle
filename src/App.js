import  { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Infinite from "./pages/Infinite";
import Daily from "./pages/Daily";
import Create from "./pages/Create";
import "./App.css";

export default function App() {

    return (
        <Routes>
            <Route path = "/" element = {<Welcome />} />
            <Route path = "/infinite" element = {<Infinite />} />
            <Route path = "/daily" element = {<Daily />} />
            <Route path = "/create" element = {<Create />} />
        </Routes>        
    );
}