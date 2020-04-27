import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import logo from './logo.svg';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from './Pages/Search';
import Saved from './Pages/Saved';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/">
              <Search />
            </Route>
        </Switch>
        <Footer />
        </div>
      </Router>
  );
}

export default App;
