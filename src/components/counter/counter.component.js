import React, { Component } from 'react';

import Devtools from 'mobx-react-devtools';

import { observer } from 'mobx-react';

@observer
class Counter extends Component {

  constructor(props) {
    super(props);

    this.handleDec = this.props.store.handleDec;
    this.handleInc = this.props.store.handleInc;
  }

  render() {
    return (
      <div>
        <Devtools/>
        <h3>Count: {this.props.store.count}</h3>
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    );
  }

}

export default Counter;
