import React from 'react';

import "./driver-list-row.css";

/**
 * An individual row element in a driver list
 */
export default class DriverList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="driver-list-row" onClick={() => this.props.onClick(this.props.id)} >
                <td className="driver-list-cell">
                    <svg width="8" height="16" style={{fill: this.props.color}} >
                        <rect width="7" height="20"></rect>
                    </svg>
                    <span>{this.props.driver}</span>
                </td>
                <td className="driver-list-cell">{this.props.constructor}</td>
            </tr>
        );
    }
}