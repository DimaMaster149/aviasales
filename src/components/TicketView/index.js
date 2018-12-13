import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TicketView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
            item: PropTypes.object,
            currentCurrency:PropTypes.string
    }

    render() {
        const { item, currentCurrency } = this.props;
        return (
            <div className="ticket">
                <div className="left-block">
                    <button class="btn-orange"> Купить за {item.price}{currentCurrency}</button>
                </div>
                <div className="right-block">
                    <div className="origin">
                        <div className="time">  {item.departure_time}</div>
                        <div className="city"> {item.origin}, {item.origin_name}</div>
                        <div className="date">  {item.departure_date}</div>
                    </div>
                    <div className="transfer">
                        Transfers: {item.stops}
                    </div>
                    <div className="destination">
                        <div className="time"> {item.arrival_time}</div>
                        <div className="city"> {item.destination}, {item.destination_name}</div>
                        <div className="date">  {item.arrival_date}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TicketView;
