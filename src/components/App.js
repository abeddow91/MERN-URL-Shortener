import React, {Component} from 'react';

import Header from './Header';


class App extends Component {

  state = {
    pageHeader: 'Url Shortener'
  };

  render () {
    return (
      <div className="App">
      <Header message = {this.state.pageHeader} />
      <div>
      </div>
      </div>

    );
  }
}


export default App;
