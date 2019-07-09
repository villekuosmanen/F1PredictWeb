import React from 'react';
import { BarGraphTooltip } from './BarGraphTooltip';
import './BarGraphBar.css';

/**
 * A single row in a bar chart.
 */
export class BarGraphBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.value);
        return (
            <div className="barGraphRowContainer">
                <div className="barGraphLabel">{this.props.label}</div>
                <div className="barGraphBar" style={{width: this.props.value, backgroundColor: this.props.color}} />
                <BarGraphTooltip color={this.props.color} label={this.props.value} />
            </div>
        );
    }
}