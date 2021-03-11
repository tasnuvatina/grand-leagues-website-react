import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/events">
          <Home />
        </Route>
        <Route path="/gallery">
          <Home />
        </Route>
        <Route path="/league/:leagueId">
          <LeagueDetails></LeagueDetails>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
