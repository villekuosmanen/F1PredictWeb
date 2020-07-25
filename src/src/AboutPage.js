import React from 'react';

import "./about-page.css"

export default function AboutPage() {
    return (
        <div class="about-page-root">
            <p>
                F1Predict is an application that aims to predict the results of Formula 1 Grand Prix using statistical models.
                At the moment, the application hosts a model for predicting qualifying results (first released in 2018),
                and a model for predicting race results is currently under development.
            </p>
            <p>
                F1Predict uses a variety of data and techniques in predicting the results. The model for predicting qualifying
                results uses historical data of qualifyings (since 2003) to calculate "power scores" for each driver, constructor
                and engine. These scores are then used to calculate an overall score for each competitor, along with an adjustment
                for how well the driver, constructor and engine has performed in the particular track in the past. Machine learning
                (linear regression) is used to determine how much the score of the driver, constructor, engine and their track-specific
                adjustments should be weighted. A Monte Carlo simulation is then used to determine the odds of each competitor in
                finishing in a particular position. After a qualifying has been completed, the model's power scores will be adjusted
                up or down depending on whether the driver, constructor or engine qualified better or worse than what the model expected.
                Here, the metric for how well or poorly a driver did is how well their best qualifying time (across all sessions)
                compared to the mean and standard deviation of the times of other drivers.
            </p>
            <p>
                The race model is currently in development, and it will be based around Elo scores. We're hoping to release the race
                model before the end of the 2020 season.
            </p>
            <p>Credits:</p>
            <ul>
                <li>Qualifying model by Ville Kuosmanen</li>
                <li>Race model by Ville Kuosmanen, Raiyan Chowdhury and Philip Searcy</li>
                <li>Special thanks to <a href="https://ergast.com/mrd/">Ergast F1 API</a></li>
            </ul>
            <p>
                If you are interested in exploring the codebase of the project, you can fork the project on GitHub! The project is
                licensed under an <a href="https://github.com/villekuosmanen/F1Predict/blob/master/LICENSE">open source license</a>.
                The repository for the predictions application is <a href="https://github.com/villekuosmanen/F1Predict/">F1Predict</a>,
                while the repository for this web app is <a href="https://github.com/villekuosmanen/F1PredictWeb/">F1PredictWeb</a>.
            </p>
        </div>
    )
}