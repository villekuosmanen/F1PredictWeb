import React from 'react';
import Predictions from './Predictions'

function App() {
    return (
        <div>
            <div className="pageHeader">
                <h1 id="gpNameHeader">F1 Qualification predictions</h1>
                <a href="https://predictf1.blogspot.com/" style={{display: 'none'}}>Blog</a>
            </div>
            <div id="background">
                <Predictions />
            </div>
        </div>
    );
}

export default App;