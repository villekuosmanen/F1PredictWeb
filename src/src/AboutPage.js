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
                The race model is based on the Elo ranking system. It uses data from past F1 races to calculate a ranking for each
                driver, constructor and engine. Each race is modelled as a series of head-to-head competitions between drivers.
                A driver who wins is considered to have won all their head-to-head matchups, while the driver finishing second is
                recorded one loss (against the winner) and wins for all other matchups. Retired drivers are not considered, meaning
                that the driver finishing in last place receives losses for all of their matchups. The Elo score of a participant is
                calculated from the driver, constructor, and engine scores, as well as their track-adjusted counterparts. After a
                race, Elo scores of drivers, constructors, and engines are adjusted based on the difference between the expected and
                real scores of all their matchups, with a K-factor of 4 per matchup.
            </p>
            <p>
                Two different race predictions are offered: "Before Quali" makes predictions based on the qualifying result predictions
                offered by the Qualifying model, while "After Quali" makes predictions based of grid position of drivers. Because of this,
                "After Quali" predictions should be more accurate.
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