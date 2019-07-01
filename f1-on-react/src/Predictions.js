import React from 'react';

import DriverList from './DriverList';
import { PredictionsGraph } from './PredictionsGraph';

/**
 * The parent component for F1 predictions. It contains state for which predictions to use.
 */
export default class Predictions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drivers: {},
            order: [],
            predictions: {},
            selectedDriverId: null,
            raceName: "",
            raceYear: null,
            racesIndex: {}
        };

        //Fetch index file, sort the years and races in it
        //TODO How does this relate to React lifecycle...
        const indexFileName = 'data/index.json';
        let mostRecentId = undefined;
        const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
        fetch(indexFileName)
            .then(res => {
                return res.json();
            })
            .then(res => {
                const years = Object.keys(res).sort(collator.compare);
                //For each year:
                console.log("Above loop" + years);
                for (let i = 0; i < years.length; i++) {
                    const races = Object.keys(res[years[i]]).sort(collator.compare);
                    console.log(races);

                    //Select most recent race.
                    console.log("In loop");
                    mostRecentId = races[races.length - 1];
                }
                this.setState({ racesIndex: res });
                fetch('data/' + mostRecentId + '.json')
                    .then(res => {
                        return res.json();
                    })
                    .then(res => {
                        this.setState({
                            drivers: res["drivers"],
                            order: res["order"],
                            predictions: res["predictions"],
                            raceName: res["name"],
                            raceYear: res["year"],
                        });
                    });
            });
    }

    handleDriverSelection = (did) => {
        console.log(did);
        this.setState({ selectedDriverId: did });
    };

    render() {
        const predictionsForDriver = this.state.selectedDriverId ? this.state.predictions[this.state.selectedDriverId] : {};
        const driverColor = this.state.selectedDriverId ? this.state.drivers[this.state.selectedDriverId].color : null; 
        return (
            <div>
                <div>{this.state.raceYear} {this.state.raceName} - Qualifying predictions</div>
                <DriverList 
                    onClick={this.handleDriverSelection}
                    drivers={this.state.drivers}
                    order={this.state.order} />
                <div>
                    {this.state.selectedDriverId ?
                        <div className="selectedDriverText" 
                            style={{color: this.state.drivers[this.state.selectedDriverId].color}}>
                            {this.state.drivers[this.state.selectedDriverId].name}
                        </div> : 
                        <div className="selectedDriverText">Choose your driver:</div>
                    }
                    <PredictionsGraph
                        predictions={predictionsForDriver}
                        color={driverColor} 
                        selectedDriverId={this.state.selectedDriverId} />
                </div>
                <p>Text about these predictions...</p>
            </div>
        );
    }
}