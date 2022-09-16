import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import SplashPage from "./components/SplashPage";
import JoinPage from "./components/JoinPage";
import TheBuzz from "./components/TheBuzz";
import TheBusyBee from "./components/TheBusyBee";
import TheHive from "./components/TheHive";
import TheColony from "./components/TheColony";
import NoMatch404 from "./components/NoMatch404";
import "./style.css";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/Join" element={<JoinPage />} /> {/* Join / Signup */}
            <Route path="/TheHive" element={<TheHive />} />{" "}
            {/* Main Page / Dashboard */}
            <Route path="/TheBuzz" element={<TheBuzz />} /> {/* Newsfeed */}
            <Route path="/TheBusyBee" element={<TheBusyBee />} />{" "}
            {/* Journaling */}
            <Route path="/TheColony" element={<TheColony />} />{" "}
            {/* User Page */}
            <Route path="*" element={<NoMatch404 />} />
          </Routes>
          <Footer/> 

        </Router>
      </div>
    </div>
  );
}

export default App;
