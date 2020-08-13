import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import QualiPredictions from './quali/QualiPredictions'
import RacePredictions from './race/RacePredictions'
import AboutPage from './AboutPage'

function App() {
    return (
        <Router>
            <div className="pageHeader">
                <Link to="/" id="title">F1Predict</Link>
                <Link to="/">Quali</Link>
                <Link to="/race">Race</Link>
                <Link to="/about">About</Link>
            </div>
            <div id="background">
                <Switch >
                    <Route path="/race">
                        <RacePredictions />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/">
                        <QualiPredictions />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;