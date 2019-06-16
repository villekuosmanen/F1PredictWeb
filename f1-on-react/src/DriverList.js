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
                <tr>
                    <th>XX</th>
                    <th>YY</th>
                </tr>
                <DriverListRow driver="driver" constructor="team" />
            </table>
        );
    }
}