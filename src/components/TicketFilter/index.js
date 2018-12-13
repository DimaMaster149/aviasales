import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TicketFilter extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        currencyFilter: PropTypes.func,
        checkStop: PropTypes.func,
        stops:PropTypes.object,
        allStops:PropTypes.bool
    }

    render() {
        const {currencyFilter, checkStop, stops, allStops} = this.props;
        return (
            <div className="filter-block">

                <div className="currency">
                    <div className="buttons">
                        <button className = "currency__item" onClick={()=> currencyFilter('rub') }>RUB</button>
                        <button className = "currency__item" onClick={()=> currencyFilter('usd') }>USD</button>
                        <button className = "currency__item" onClick={()=> currencyFilter('eur') }>EUR</button>
                    </div>
                </div>

                <div className="stops">
                    <div className="stops__item">
                        <input checked={allStops} type="checkbox" onChange={()=> checkStop('all') }/>
                        <div> All </div>
                    </div>
                    <div className="stops__item">
                        <input checked={stops[0]} type="checkbox" onChange={()=> checkStop(0) }/>
                        <div> Without transfer </div>
                    </div>
                    <div className="stops__item">
                        <input checked={stops[1]} type="checkbox" onChange={()=> checkStop(1) }/>
                        <div> 1 transfer </div>
                    </div>
                    <div className="stops__item">
                        <input checked={stops[2]} type="checkbox" onChange={()=> checkStop(2) }/>
                        <div> 2 transfers </div>
                    </div>
                    <div className="stops__item">
                        <input checked={stops[3]} type="checkbox" onChange={()=> checkStop(3) }/>
                        <div> 3 transfers </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default TicketFilter;
