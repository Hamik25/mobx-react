import React, { Component } from 'react';

import { Counter, CounterStore } from '../counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter store={CounterStore} />
      </div>
    )
  }
}

export default App;
