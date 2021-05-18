import React from 'react';
import { Container } from "@material-ui/core";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import Home from './components/Home/Home';

const App = () => {


    return (
        <Router>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </Router>
    )
}

export default App;
