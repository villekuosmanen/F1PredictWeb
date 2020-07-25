import React from 'react';
import './BarGraphTooltip.css';

/**
 * A reusable tooltip for a bar chart
 */
export class BarGraphTooltip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.value);
        return (
            <div className="barGraphTooltip" style={{backgroundColor: this.props.color}}>{this.props.label}</div>
        );
    }
}