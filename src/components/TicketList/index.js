import React, { Component } from 'react';
import TicketView from '../TicketView'
import TicketFilter from '../TicketFilter'
import PropTypes from 'prop-types';
import data from "../../data/tickets";

class TicketList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCurrency:'₽',
            tickets: [],
            filteredTickets:[],
            allStops: true,
            stops: {
                0: false,
                1: false,
                2: false,
                3: false
            },
            loading:false
        };
    }

    loadTickets = () => {
      const inform = [...data.tickets];
        this.setState((state) => ({
            tickets: inform
        }));
    }

    currencyFilter = (currency) => {
        const {tickets} = this.state;
        let ticketsArray = [];
        console.log(currency);
        switch (currency) {

            case 'rub':
                this.setState((state) => ({
                    filteredTickets: tickets,
                    currentCurrency: '₽'
                }));
                break;

            case 'usd':
                for(let i=0; i<tickets.length; i++)
                {
                    let ticket = {...tickets[i]};
                    console.log(ticket)
                    ticket.price = (ticket.price*0.015).toFixed(2);
                    ticketsArray.push(ticket);
                }
                this.setState((state) => ({
                    filteredTickets: ticketsArray,
                    currentCurrency: '$'
                }));
                break;

            case 'eur':
                for(let i=0; i<tickets.length; i++)
                {
                    let ticket = {...tickets[i]};
                    ticket.price = (ticket.price*0.012).toFixed(2);
                    ticketsArray.push(ticket);
                }
                this.setState((state) => ({
                    filteredTickets: ticketsArray,
                    currentCurrency: '€'
                }));
                break;
        }
        console.log(this.state);
    }

    stopFilter = () =>{
        console.log(this.state.allStops, 'allStops variable')
        const {tickets, stops, allStops} = this.state;
        let filtered = [];
        //TODO:Change to true and check why it's not working
        if(allStops === true) {
            filtered = tickets;
            console.log(filtered, 'update filtered')
        }else{
            filtered = tickets.filter( ticket => stops[ticket.stops] );
        }
        this.setState((state) => ({
            filteredTickets: filtered
        }));
    }

    checkStop = (stopNumber) => {
        if(stopNumber === 'all'){
            this.setState((state) => ({
                allStops: !this.state.allStops,
            }));
        let changedStops = this.state.stops;
            for (let stop in changedStops){
                changedStops[stop] = false;
            }
            console.log(changedStops, 'if')
            this.setState((state) => ({
                stops: changedStops
            }));
        }else{
            const changedStops = this.state.stops;

            changedStops[stopNumber] = !changedStops[stopNumber];
            console.log(changedStops);
            this.setState((state) => ({
                allStops: false,
                stops: changedStops
            }));
        }
        //Because state updates async and function for rerender should wait

    }

    componentDidMount() {
        this.loadTickets();
        this.setState((state) => ({
            loading: true,
        }));
        setTimeout(() => {
            this.stopFilter()
            this.setState((state) => ({
                loading: false,
            }));
        },300);
    }

    render() {
        const {stops, allStops, filteredTickets, tickets, currentCurrency, loading} = this.state;
        console.log(tickets, 't');
        return (
            !loading ?
          <div className="page">
              <TicketFilter stops={stops} allStops={allStops} currencyFilter={this.currencyFilter} checkStop = {this.checkStop}/>
              <div className="tickets">
                  {filteredTickets.map((item, index) => (
                      <TicketView
                          currentCurrency = {currentCurrency}
                          key={`item-key-${item.id}`}
                                  item={item}
                      />
                  ))}
              </div>
          </div>
                : <div style={{padding: '20px'}}> Loading data ... </div>
     );
   }

}

export default TicketList;
