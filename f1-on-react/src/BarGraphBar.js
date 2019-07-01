import React from 'react';
import './BarGraphBar.css';

/**
 * A single row in a bar chart.
 * Props:
 *  height
 *  value
 *  maxValue
 *  label
 *  color
 */
export class BarGraphBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.value);
        return (
            <div className="barGraphRowContainer">
                <div>{this.props.label}</div>
                <div className="barGraphBar" style={{width: this.props.value, height: this.props.height, backgroundColor: this.props.color}} />
            </div>
        );
    }
}