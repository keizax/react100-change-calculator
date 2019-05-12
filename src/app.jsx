import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      received: 0,
      due: 0,
      total: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };

    this.handleReceived = this.handleReceived.bind(this);
    this.handleDue = this.handleDue.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }
  handleReceived(event) {
    this.setState({ received: event.target.value });
  }
  handleDue(event) {
    this.setState({ due: event.target.value });
  }
  handleCalculate() {
    const r = this.state.received;
    const d = this.state.due;
    const tr = r - d;
    const change = tr.toFixed(2);
    this.setState({ total: change });
    const twenties = Math.floor(change / 20);
    this.setState({ twenties });
    const tens = Math.floor((change - (twenties * 20)) / 10);
    this.setState({ tens });
    const fives = Math.floor((change - (twenties * 20)) % 10 / 5);
    this.setState({ fives });
    const ones = Math.floor((change - (twenties * 20)) % 10) % 5;
    this.setState({ ones });

    const centsConverted = Math.round(change * 100);
    const cents = Number((centsConverted.toString().slice(-2)));
    const quarters = Math.floor(cents / 25);
    this.setState({ quarters });
    const dimes = Math.floor((cents % 25) / 10);
    this.setState({ dimes });
    const nickels = Math.floor(((cents % 25) % 10) / 5);
    this.setState({ nickels });
    const pennies = Math.floor(((cents) % 25) % 10) % 5;
    this.setState({ pennies });
  }

  render() {
    return (
      <div className='container-fluid'>
        <h2 className='jumbotron'>Change Calculator</h2>
        <hr />
        <div className='row'>
          <div className='col-sm-4' style={ { backgroundColor: 'lavender' } }>
            <div>Enter information.</div>
            <div>How much is received?</div>
            <input onChange={ this.handleReceived } />
            <div>How much is due?</div>
            <input onChange={ this.handleDue } />
            <hr />
            <button onClick={ this.handleCalculate }>Calculate</button>
          </div>
          <div className='col-sm-8' style={ { backgroundColor: 'lavenderblush', alignContent: 'center' } }>
            <hr />
            <h4>Total: { this.state.total }</h4>
            <h5>Twenties: { this.state.twenties }</h5>
            <h5>Tens: { this.state.tens }</h5>
            <h5>Fives: { this.state.fives }</h5>
            <h5>Ones: { this.state.ones }</h5>
            <h5>Quarters: { this.state.quarters }</h5>
            <h5>Dimes: { this.state.dimes }</h5>
            <h5>Nickels: { this.state.nickels }</h5>
            <h5>Pennies: { this.state.pennies }</h5>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
