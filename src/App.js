import React, { Component } from 'react';
import './App.css';
import TicketList from './components/TicketList/index';

//TODO: render TicketFilter and TicketList
class App extends Component {
  render() {
    return (
      <div className="App">
        <TicketList/>
      </div>
    );
  }
}

export default App;
