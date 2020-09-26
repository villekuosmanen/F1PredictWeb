import React from 'react';
import Select from 'react-select';

import DriverList from '../quali/DriverList';
import { RacePredictionsGraph } from './RacePredictionsGraph';
import '../quali/QualiPredictions.css';

/**
 * The parent component for F1 predictions. It contains state for which predictions to use.
 */
export default class RacePredictions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            withoutQuali: {
                drivers: {},
                order: [],
                predictions: {},
            },
            withQuali: {
                drivers: {},
                order: [],
                predictions: {},
            },
            selectedDriverId: null,
            gpTitle: "",
            racesList: {},
            selectedRace: null,
            changeQualiExpanded: false,
            year: null,
            qualiIncludedPredictionExists: false,
            qualiIncludedSelected: false,
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
                const racesList = [];
                for (let i = 0; i < years.length; i++) {
                    const races = Object.keys(res[years[i]]).sort(collator.compare);
                    races.map(id => (
                        racesList.push({ value: id, label: `${years[i]} ${res[years[i]][id]}` })
                    ));

                    //Select most recent race.
                    mostRecentId = races[races.length - 1];

                }
                racesList.reverse();
                this.setState({ racesList });
                fetch(`${process.env.PUBLIC_URL}/data/races/${mostRecentId}.json`)
                    .then(res => {
                        return res.json();
                    })
                    .then(res => {
                        fetch(`${process.env.PUBLIC_URL}/data/races/${mostRecentId}_afterQuali.json`)
                            .then(check => {
                                return check.json();
                            })
                            .then(check => {
                                this.setState({
                                    withoutQuali: {
                                        drivers: res["drivers"],
                                        order: res["order"],
                                        predictions: res["predictions"],
                                    },
                                    withQuali: {
                                        drivers: check["drivers"],
                                        order: check["order"],
                                        predictions: check["predictions"],
                                    },
                                    gpTitle: `${res["year"]} ${res["name"]}`,
                                    year: res["year"],
                                    selectedRace: mostRecentId,
                                    qualiIncludedPredictionExists: true,
                                });
                            })
                            .catch((error) => {
                                this.setState({
                                    withoutQuali: {
                                        drivers: res["drivers"],
                                        order: res["order"],
                                        predictions: res["predictions"],
                                    },
                                    gpTitle: `${res["year"]} ${res["name"]}`,
                                    year: res["year"],
                                    selectedRace: mostRecentId,
                                    qualiIncludedPredictionExists: false,
                                    qualiIncludedSelected: false,
                                });
                            })
                    });
            });
    }

    handleDriverSelection = (did) => {
        this.setState({ selectedDriverId: did });
    };

    onToggleQualiOptionsSelected = () => {
        this.setState({ changeQualiExpanded: !this.state.changeQualiExpanded });
    }

    onChangeIncludeQuali = (event) => {
        this.setState({
            qualiIncludedSelected: !this.state.qualiIncludedSelected,
        })
    }

    onNewQualiSelected = selection => {
        fetch(`${process.env.PUBLIC_URL}/data/races/${selection.value}.json`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                fetch(`${process.env.PUBLIC_URL}/data/races/${selection.value}_afterQuali.json`)
                    .then(check => {
                        return check.json();
                    })
                    .then(check => {
                        this.setState({
                            withoutQuali: {
                                drivers: res["drivers"],
                                order: res["order"],
                                predictions: res["predictions"],
                            },
                            withQuali: {
                                drivers: check["drivers"],
                                order: check["order"],
                                predictions: check["predictions"],
                            },
                            gpTitle: `${res["year"]} ${res["name"]}`,
                            year: res["year"],
                            selectedRace: selection.value,
                            qualiIncludedPredictionExists: true,
                        });
                    })
                    .catch((error) => {
                        this.setState({
                            withoutQuali: {
                                drivers: res["drivers"],
                                order: res["order"],
                                predictions: res["predictions"],
                            },
                            gpTitle: `${res["year"]} ${res["name"]}`,
                            year: res["year"],
                            selectedRace: selection.value,
                            qualiIncludedPredictionExists: false,
                            qualiIncludedSelected: false,
                        });
                    })
            });
    }

    render() {
        const selectedData = this.state.qualiIncludedSelected ? this.state.withQuali : this.state.withoutQuali;
        const predictionsForDriver = this.state.selectedDriverId ? selectedData.predictions[this.state.selectedDriverId] : {};
        const driverColor = this.state.selectedDriverId ? selectedData.drivers[this.state.selectedDriverId].color : null;
        return (
            <div>
                <div className="qualiHeader">
                    <span className="qualiHeaderText">{this.state.gpTitle} - Race predictions</span>
                    <button onClick={this.onToggleQualiOptionsSelected} className='toggleQualiOptionsButton'>
                        {this.state.changeQualiExpanded ? 'Cancel' : 'Change GP'}
                    </button>
                    {this.state.changeQualiExpanded ? <div>
                        <Select
                            className='qualiOptionsSelect'
                            value={this.state.gpTitle}
                            options={this.state.racesList}
                            onChange={this.onNewQualiSelected}
                        />
                    </div> : null}
                    {this.state.qualiIncludedPredictionExists ? <div onChange={this.onChangeIncludeQuali}>
                        <span className="qualiHeaderText" >Include qualifying results in prediction</span>
                        <input type="radio" value="Yes" name="include_quali" checked={this.state.qualiIncludedSelected} /> <span className="qualiHeaderText" >Yes</span>
                        <input type="radio" value="No" name="include_quali" checked={!this.state.qualiIncludedSelected} /> <span className="qualiHeaderText" >No</span>
                    </div> : null}
                </div>
                <div className="mainContainer">
                    <DriverList
                        rowClicked={this.handleDriverSelection}
                        drivers={selectedData.drivers}
                        order={selectedData.order}
                    />
                    <div style={{ "min-width": "300px", "width": "100%" }}>
                        {this.state.selectedDriverId ?
                            <div className="selectedDriverText"
                                style={{ color: driverColor }}>
                                {selectedData.drivers[this.state.selectedDriverId].name}
                            </div> :
                            <div className="selectedDriverText" style={{ color: '#888888' }}>Choose your driver:</div>
                        }
                        <RacePredictionsGraph
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