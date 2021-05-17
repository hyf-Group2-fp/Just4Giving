import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/landingpage/Navigation";
import Demo from "./components/landingpage/Demo";
import Footer from "./components/landingpage/Footer";
import About from "./components/landingpage/About";
import Signupneeder from "./components/register/Signupneeder";
import Signupgiver from "./components/register/signupgiver";
import Disclaimer from "./components/disclaimer/Disclaimer";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Demo} />
          <Route path="/aboutus" exact component={About} />
          <Route path="/disclaimer" exact component={Disclaimer} />
          <Route
              path="/signupneeder"
              exact
              component={Signupneeder}
           />
          <Route
              path="/signupgiver"
              exact
              component={Signupgiver}
           />
           <Route  path="/login"
              exact
              component={Login}

           />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
