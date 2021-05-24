import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Navigation from "./components/landingpage/Navigation";
import Demo from "./components/landingpage/Demo";
import Footer from "./components/landingpage/Footer";
import Aboutus from "./components/aboutus/Aboutus";
import SignUpNeeder from "./components/register/SignUpNeeder";
import SignUpGiver from "./components/register/signUpGiver";
import Login from "./components/login/Login";
import Giver from "./components/giver/Giverprofile"
import Needer from "./components/needer/NeederProfile"
import NewItem from "./components/giver/NewItem"
import ItemPreview from "./components/giver/ItemPreview";
import ItemView from './components/giver/ItemView';
function App() {
    return (
        <div className="App">
            <Router>           
                <Navigation/>
                <Switch>
                    <Route path="/" exact component={Demo}/>
                    <Route path="/signupneeder" exact component={SignUpNeeder}/>
                    <Route path="/signupgiver" exact component={SignUpGiver}/>
                    <Route path="/profilegiver" exact component={Giver}/>
                    <Route path="/profileneeder" exact component={Needer}/>
                    <Route path="/newgoods" exact component={NewItem}/>
                    <Route component={ItemPreview} path="/itemview"/>
                    <Route path="/login" exact component ={Login}></Route>
                    <Route path="/profilegiver/item/:id" exact component ={ItemView}></Route>

                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;