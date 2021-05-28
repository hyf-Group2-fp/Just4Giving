import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Navigation from './components/landingpage/Navigation';
import Demo from './components/landingpage/Demo';
import Footer from './components/landingpage/Footer';
import SignUpNeeder from './components/register/SignUpNeeder';
import SignUpGiver from './components/register/signUpGiver';
import Login from './components/login/Login';
import Giver from './components/giver/Giverprofile';
import Needer from './components/needer/NeederProfile';
import NewItem from './components/giver/NewItem';
import ItemPreview from './components/giver/ItemPreview';
import Contactus from './components/contactus/contactus';
import ItemView from './components/giver/ItemView';
import EditItem from './components/giver/EditItem';
import DetailsItem from './components/giver/DetailsItem';
import ContactGiver from './components/needer/ContactGiver';
//for testing purposes
// import Categories from './components/categories/categories';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/' exact component={Demo} />
                    <Route
                        path='/signupneeder'
                        exact
                        component={SignUpNeeder}
                    />
                    <Route path='/signupgiver' exact component={SignUpGiver} />
                    <Route path='/profilegiver' exact component={Giver} />
                    <Route path='/profileneeder' exact component={Needer} />
                    <Route path='/newgoods' exact component={NewItem} />
                    <Route path='/itemview' component={ItemPreview} />
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/contactus' component={Contactus} />
                    <Route
                        path='/profilegiver/item/:id'
                        exact
                        component={ItemView}></Route>
                    <Route
                        path='/edititem/:id'
                        exact
                        component={EditItem}></Route>
                    <Route
                        path='/detailsitem/:id'
                        exact
                        component={DetailsItem}></Route>
                    <Route
                        path='/profileneeder/details/:id'
                        exact
                        component={ContactGiver}></Route>
                    {/* for testing purpose */}
                    {/* <Route path="/categories" exact component ={Categories}></Route> */}
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
