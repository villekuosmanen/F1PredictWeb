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
        if (this.props.dnf) {
            return (
                <div className="barGraphRowContainer">
                    <div className="barGraphLabel_dnf">{this.props.label}</div>
                    <div className="barGraphBar" style={{width: this.props.value, backgroundColor: this.props.color}} />
                    {this.props.value !== '0%' ?
                        <BarGraphTooltip color={this.props.color} label={this.props.value} /> :
                        null
                    }
                </div>
            );
        }
        return (
            <div className="barGraphRowContainer">
                <div className="barGraphLabel">{this.props.label}</div>
                <div className="barGraphBar" style={{width: this.props.value, backgroundColor: this.props.color}} />
                {this.props.value !== '0%' ?
                    <BarGraphTooltip color={this.props.color} label={this.props.value} /> :
                    null
                }
            </div>
        );
    }
}