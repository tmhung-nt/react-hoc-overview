import React, { Component } from 'react';
import Hoc from './HOC';
import StockList from "./StockList";
import UserList from "./UserList";

class App extends Component {

  render() {
    return (
        <div>
          <StockList />
          <hr/>
          <UserList />
        </div>
    )
  }
}

export default App;
