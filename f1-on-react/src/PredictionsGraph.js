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
        if (!this.props.selectedDriverId) {
            return <div />;
        }
        return (
            <div className="barChart">
                {positions.map(i => {
                    const value = this.props.predictions[i.toString()];
                    const valueAsPercentage = value ? (value / 10.0) + "%" : "0%";
                    return <BarGraphBar  
                        value={valueAsPercentage}
                        maxValue={1000}
                        label={i + 1}
                        color={this.props.color}
                    />;
                })}
            </div>
        );
    }
}