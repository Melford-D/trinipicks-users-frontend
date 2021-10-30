import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import About from "./pages/About";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Features from "./pages/Features";
import Trinipot from "./components/trinipot/Trinipot";
import Faq from "./pages/Faq";
import SportSelection from "./components/trinipot/selection/SportSelection";
import LeaderBoard from "./components/trinipot/leaderboard/LeaderBoard";
import HowToPlay from "./components/trinipot/leaderboard/HowToPlay";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={MainLayout} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/terms-of-use" component={TermsOfUse} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/features" component={Features} />
            <Route path="/trinipot" component={Trinipot} />
            <Route path="/selection" component={SportSelection} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/how-to-play" component={HowToPlay} />
            <Route path="/faq" component={Faq} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
