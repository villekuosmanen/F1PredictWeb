import React from 'react';
import DriverList from './DriverList';
import PredictionsGraph from './PredictionsGraph';

/**
 * The parent component for F1 predictions. It contains state for which predictions to use.
 */
export default class Predictions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drivers: {},
            predictions: {},
            selectedDriverId: null,
            raceName: {},
            raceYear: null,
            racesIndex: {}
        };

        //Fetch index file, sort the years and races in it
        //TODO How does this relate to React lifecycle...
        const indexFileName = 'data/index.json';
        let mostRecentId = undefined;
        const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
        fetch(indexFileName)
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
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
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (res) {
                        this.setState({
                            drivers: res["drivers"],
                            predictions: res["predictions"],
                            raceName: res["name"],
                            raceYear: res["year"],
                        });
                    });
            });
    }

    handleDriverSelection = (did) => {
        this.setState({ selectedDriverId: did });
    };

    render() {
        const predictionsForDriver = this.state.selectedDriverId ? this.state.predictions[this.state.selectedDriverId] : {};
        const driverColor = this.state.selectedDriverId ? this.state.drivers[this.state.selectedDriverId].color : null; 
        return (
            <div>
                <div>Race header...</div>
                <DriverList 
                    onClick={this.handleDriverSelection}
                    participants={this.state.participants} />
                <div>
                    <div>Driver Name...</div>
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