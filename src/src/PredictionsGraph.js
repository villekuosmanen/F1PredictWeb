import React from 'react';
import { BarGraphBar } from './BarGraphBar';

/**
 * The bar graph used in showing predicted results for each driver
 */
export class PredictionsGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const positions = [...Array(20).keys()];
        return (
            <div className="barChart">
                {positions.map(i => {
                    const value = this.props.predictions ? this.props.predictions[i.toString()] : null;
                    const scaledValue = this.props.year >= 2020 ? (value / 100.0) : (value / 10.0);
                    const valueAsPercentage = scaledValue ? `${scaledValue}%` : "0%";
                    return <BarGraphBar  
                        value={valueAsPercentage}
                        label={i + 1}
                        color={this.props.color ? this.props.color : "#00000000"}
                    />;
                })}
            </div>
        );
    }
}