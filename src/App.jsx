import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Features from "./components/features/Features";
import CoachManagement from "./components/coachManagement/CoachManagement";
import HowTheAppHelpsUs from "./components/howTheAppHelpsUs/HowTheAppHelpsUs";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";




function App() {
    const [menuOpen,setMenuOpen] = useState(false)
    return ( <
        div className = "app" >
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
            <Intro/>
            <HowTheAppHelpsUs/>
            <Features/>
            <CoachManagement/>
            <Contact/>
        </div>
        </div>
    );
}

export default App;