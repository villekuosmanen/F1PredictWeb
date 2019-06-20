import React from 'react';

import "./driver-list.css";
import DriverListRow from './DriverListRow';

/**
 * The driver list component used in showing participating drivers
 */
export default class DriverList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="driver-list-table">
                <thead>
                    <tr>
                        <th>Driver</th>
                        <th>Constructor</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.order.map(id => (
                        <DriverListRow
                            key={id}
                            id={id}
                            driver={this.props.drivers[id.toString()].name}
                            constructor={this.props.drivers[id.toString()].constructor}
                            color={this.props.drivers[id.toString()].color} 
                            onClick={this.props.onClick} />
                    ))}
                </tbody>
            </table>
        );
    }
}