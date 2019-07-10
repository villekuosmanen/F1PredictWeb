import React from 'react';

import "./driver-list.css";
import DriverListRow from './DriverListRow';

/**
 * The driver list component used in showing participating drivers
 */
export default class DriverList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: -1, isMobile: false};
    }

    componentDidMount() {
        var mq = window.matchMedia( "(max-width: 768px)" );
        if (mq.matches) {
            this.setState({isMobile: true, expanded: true});
        }
    }

    rowClicked = (did) => {
        this.setState({selected: did});
        this.props.rowClicked(did);
        if (this.state.isMobile) {
            this.setState({expanded: !this.state.expanded});
        }
    };

    render() {
        return (
            <div style={{"display": "flex", "width": "100%", "min-width": "300px"}}>
                <table className="driver-list-table">
                    <thead>
                        <tr>
                            <th>Driver</th>
                            <th>Constructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.order.map(id => {
                            if (this.state.isMobile && !this.state.expanded && (this.state.selected !== id)) {
                                return null;
                            }
                            return <DriverListRow
                                key={id}
                                id={id}
                                selected={this.state.selected === id ? true : false}
                                driver={this.props.drivers[id.toString()].name}
                                constructor={this.props.drivers[id.toString()].constructor}
                                color={this.props.drivers[id.toString()].color} 
                                onClick={this.rowClicked} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}