import React from 'react';
import Predictions from './Predictions'

function App() {
    return (
        <div id="background">
            <header>
                <h1 id="gpNameHeader">F1 Qualification predictions</h1>
                <a href="https://predictf1.blogspot.com/">Blog</a>
            </header>
            <div>
                <Predictions />
            </div>
        </div>
    );
}

export default App;