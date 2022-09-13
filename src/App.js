import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";
import TheBuzz from "./components/TheBuzz";
import TheBusyBee from "./components/TheBusyBee";
import TheSwarm from "./components/TheSwarm";
import TheColony from "./components/TheColony";
import NoMatch404 from "./components/NoMatch404";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <header className="App-header">
            <div>
              <h1>Hive Social Wellness</h1>
            </div>
            <div>
              <h2>Run, and Tell Your Friends!</h2>
            </div>
            <Nav></Nav>
          </header>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/TheBuzz" element={<TheBuzz />} />
            <Route path="/TheBusyBee" element={<TheBusyBee />} />
            <Route path="/TheSwarm" element={<TheSwarm />} />
            <Route path="/TheColony" element={<TheColony />} />
            <Route path="*" element={<NoMatch404 />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
