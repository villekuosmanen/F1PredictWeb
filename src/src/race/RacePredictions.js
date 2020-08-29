import React from 'react';
import Select from 'react-select';

import DriverList from '../quali/DriverList';
import { QualiPredictionsGraph } from '../quali/QualiPredictionsGraph';
import '../quali/QualiPredictions.css';

/**
 * The parent component for F1 predictions. It contains state for which predictions to use.
 */
export default class RacePredictions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drivers: {},
            order: [],
            predictions: {},
            selectedDriverId: null,
            gpTitle: "",
            racesList: {},
            selectedRace: null,
            changeQualiExpanded: false,
            year: null
        };

        //Fetch index file, sort the years and races in it
        //TODO How does this relate to React lifecycle...
        const indexFileName = `${process.env.PUBLIC_URL}/data/races/index.json`;
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
                const racesList = [];
                for (let i = 0; i < years.length; i++) {
                    const races = Object.keys(res[years[i]]).sort(collator.compare);
                    races.map(id => (
                        racesList.push({ value: id, label: `${years[i]} ${res[years[i]][id]}` })
                    ));
                    console.log(races);

                    //Select most recent race.
                    console.log("In loop");
                    mostRecentId = races[races.length - 1];
                    
                }
                racesList.reverse();
                this.setState({ racesList });
                fetch(`${process.env.PUBLIC_URL}/data/races/${mostRecentId}.json`)
                    .then(res => {
                        return res.json();
                    })
                    .then(res => {
                        this.setState({
                            drivers: res["drivers"],
                            order: res["order"],
                            predictions: res["predictions"],
                            gpTitle: `${res["year"]} ${res["name"]}`,
                            year: res["year"],
                            selectedRace: mostRecentId
                        });
                    });
            });
    }

    handleDriverSelection = (did) => {
        console.log(did);
        this.setState({ selectedDriverId: did });
    };

    onToggleQualiOptionsSelected = () => {
        this.setState({changeQualiExpanded: !this.state.changeQualiExpanded});
    }

    onChangeIncludeQuali = (event) => {
        if (event.target.value === "Yes") {
            fetch(`${process.env.PUBLIC_URL}/data/races/${this.state.selectedRace}_afterQuali.json`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({
                    drivers: res["drivers"],
                    order: res["order"],
                    predictions: res["predictions"],
                });
            });
        } else {
            fetch(`${process.env.PUBLIC_URL}/data/races/${this.state.selectedRace}.json`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({
                    drivers: res["drivers"],
                    order: res["order"],
                    predictions: res["predictions"],
                });
            });
        }
    }

    onNewQualiSelected = selection => {
        console.log(selection);
        fetch(`${process.env.PUBLIC_URL}/data/races/${selection.value}.json`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({
                    drivers: res["drivers"],
                    order: res["order"],
                    predictions: res["predictions"],
                    gpTitle: `${res["year"]} ${res["name"]}`,
                    year: res["year"],
                    selectedDriverId: null,
                    selectedRace: selection.value
                });
            });
    }

    render() {
        const predictionsForDriver = this.state.selectedDriverId ? this.state.predictions[this.state.selectedDriverId] : {};
        const driverColor = this.state.selectedDriverId ? this.state.drivers[this.state.selectedDriverId].color : null; 
        return (
            <div>
                <div className="qualiHeader">
                    <span className="qualiHeaderText">{this.state.gpTitle} - Race predictions</span>
                    <button onClick={this.onToggleQualiOptionsSelected} className='toggleQualiOptionsButton'>
                        { this.state.changeQualiExpanded ?  'Cancel' : 'Change GP' }
                    </button>
                    {this.state.changeQualiExpanded ?<div>
                        <Select
                            className='qualiOptionsSelect'
                            value={this.state.gpTitle}
                            options={this.state.racesList}
                            onChange={this.onNewQualiSelected}
                        />
                    </div> : null}
                    <div onChange={this.onChangeIncludeQuali}>
                        <span className="qualiHeaderText" >Include qualifying results in prediction</span>
                        <input type="radio" value="Yes" name="include_quali" /> <span className="qualiHeaderText" >Yes</span>
                        <input type="radio" value="No" name="include_quali" defaultChecked /> <span className="qualiHeaderText" >No</span>
                    </div>
                </div>
                <div className="mainContainer">
                    <DriverList 
                        rowClicked={this.handleDriverSelection}
                        drivers={this.state.drivers}
                        order={this.state.order} 
                    />
                    <div style={{"min-width": "300px", "width": "100%"}}>
                        {this.state.selectedDriverId ?
                            <div className="selectedDriverText" 
                                style={{color: this.state.drivers[this.state.selectedDriverId].color}}>
                                {this.state.drivers[this.state.selectedDriverId].name}
                            </div> : 
                            <div className="selectedDriverText" style={{color: '#888888'}}>Choose your driver:</div>
                        }
                        <QualiPredictionsGraph
                            predictions={predictionsForDriver}
                            color={driverColor} 
                            selectedDriverId={this.state.selectedDriverId} 
                            year={this.state.year} />
                    </div>
                </div>
            </div>
        );
    }
}